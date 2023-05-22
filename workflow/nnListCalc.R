rm(list=ls()) 
gc()
#install.packages("~/Downloads/h2o_3.38.0.4.tar.gz", repos=NULL)
if (!require("pacman")) install.packages("pacman")
pacman::p_load(data.table,ggplot2,ggpubr,h2o,mltools,caret,nngeo,parallel)
out_ndvi_m <- readRDS("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/after_gee_multispectral_gee.rds")
#load("./FULLDATA/after_gee_multispectral_gee4.Rdata")
setDT(out_ndvi_m)
names(out_ndvi_m)

out_ndvi_m<-out_ndvi_m[!country%in%c("CA","AU"),]
#rm(sf)
#summary(out_ndvi_m)
# B1 60 meters	Aerosols
# B2 10 meters	Blue
# B3 10 meters	Green
# B4 10 meters	Red
# B5 20 meters	Red Edge 1
# B6 20 meters	Red Edge 2
# B7 20 meters	Red Edge 3
# B8 10 NIR
# B8A	20 meters	Red Edge 4
# B9 60 meters	Water vapor
# B10	60 meters	Cirrus
# B11	20 meters	SWIR 1
# B12	20 meters	SWIR 2
# QA10 10 meters	Always empty
# QA20 20 meters	Always empty
# QA60 60 meters	Cloud mask
toRemove<-grep(c("QA|nd_[0-9]"),names(out_ndvi_m),value = T)
out_ndvi_m[, (toRemove):=NULL]
#summary(out_ndvi_m)
#dim(na.omit(out_ndvi_m))
#1609671     176
#-----remove ID, dates etc
toRemove<-c("FID.x","FID.y","PntNum","city","panoDate","panoID")
out_ndvi_m[, (toRemove):=NULL]
#-----Dealing with the missing
naVArs<-data.frame("missing"=sapply(out_ndvi_m, function(x) sum(is.na(x))))
naVArs$varName<-rownames(naVArs)
setDT(naVArs)
naVArs[missing>0,]
naCols<-function(x){prop.table(table(is.na(x)))[2]}
#View(out_ndvi_m[, lapply(.SD,naCols), by ='country'])
#AU CA
out_ndvi_m$country<-NULL
names(out_ndvi_m)
#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /
#+ ISSUES:
#+ 1) too many vars
#+ 2) missing data (?) 
#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /
out_ndvi_m<-na.omit(out_ndvi_m)

#Now create Sampling var
out_ndvi_m$x_bin <- cut(out_ndvi_m$x, quantile(out_ndvi_m$x, seq(0, 1, 0.1)), labels=F)
out_ndvi_m$y_bin <- cut(out_ndvi_m$y, quantile(out_ndvi_m$y, seq(0, 1, 0.1)), labels=F)
out_ndvi_m$sampling_var <- as.factor(paste(out_ndvi_m$x_bin, out_ndvi_m$y_bin, sep="_")) 

out_ndvi_m$x_bin<-NULL
out_ndvi_m$y_bin<-NULL

highRes<-unlist(lapply(c("B2_","B3_","B4_","B8_"),function(x) grep(x,names(out_ndvi_m),value = T)))
era5<-unlist(lapply(c("mean_","surface_","total_"),function(x) grep(x,names(out_ndvi_m),value = T)))

#allhRes<-grep(c("B[0-9]"),names(out_ndvi_m),value = T)
toKeep<-c(highRes,era5,"GreenView","x","y","sampling_var",
          "bare","built","crops","flooded_vegetation",
          "grass","shrub_and_scrub","snow_and_ice","trees","water",
          "gdp_capita","population")
out_ndvi_m<-out_ndvi_m[,..toKeep]
###############################################################################
### Transformations ###
###############################################################################
#Cartesian to Polar
#Transform the coordinates into polar coordinates
cart2polar <- function(x, y) {
  data.frame(r = sqrt(x^2 + y^2), theta = atan2(y, x))
}
hep<-cart2polar(out_ndvi_m$x,out_ndvi_m$y)
out_ndvi_m<-cbind(out_ndvi_m,hep)

# featureType="mean"
# 
# if(featureType=="trigo"){
# #trigonometry_features
# out_ndvi_m[,paste0("tan_",highRes):=lapply(.SD,tan), .SDcols=highRes]
# out_ndvi_m[,paste0("sin_",highRes):=lapply(.SD,sin), .SDcols=highRes]
# out_ndvi_m[,paste0("cos_",highRes):=lapply(.SD,cos), .SDcols=highRes]
# }else if(featureType=="mean"){
#   lapply(c("B2_","B3_","B4_","B8_","mean_2m_","surface_","total_"),function(x){
#     bands<-grep(x,names(out_ndvi_m),value = T)
#     out_ndvi_m[,paste0("mean_",x):=rowMeans(.SD), .SDcols=bands]
#    
#     out_ndvi_m[, (bands):=NULL]
#     out_ndvi_m
#     
#     })

# bandsNames<-c("B1_","B2_","B3_","B4_","B5_","B6_",
#               "B7_","B8_","B8A_","B9_","B10_","B11_","B12_")	
#   lapply(bandsNames,function(x){
#     bands<-grep(x,names(out_ndvi_m),value = T)
#     out_ndvi_m[,paste0("mean_",x):=rowMeans(.SD), .SDcols=bands]
#     out_ndvi_m[, (bands):=NULL]
#     out_ndvi_m
#     
#   })

#}

###############################################################################

#clean all keep only DT
names(out_ndvi_m)
rm(list=setdiff(ls(), c("out_ndvi_m")))

###############################################################################
###  NN calc ###
x = data.frame(
  lon = out_ndvi_m$x,
  lat = out_ndvi_m$y
)

x = sf::st_as_sf(x, coords = c("lon", "lat"), crs = 4326)
x = st_transform(x, 3395)

start = Sys.time()
result1 <-st_nn(x, x, k = 10,maxdist=5000, progress = T)
end <- Sys.time()
end - start

x = st_transform(x, 4326)

out_ndvi_m$medTrees<-unlist(lapply(result1,function(x){
  nn<-x[-1]
  out_ndvi_m[nn,median(trees)]
}))

rm(list=setdiff(ls(), "result1"))

#save list and DT
save.image("nnList.RData")
#######################