

##############################################################################

# This Rscript: 

#   1) Prepare data for ML model training 

##############################################################################


rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)
library(rnaturalearthdata)

set.seed(2022)

#############

sf <- read_sf("data/validation/all_cities_green_index.shp")

# add country of belonging
get_countries <-  function(long, lat)
{ 
  points <- cbind(long, lat)
  countriesSP <- rworldmap::getMap(resolution = 'low')
  pointsSP = sp::SpatialPoints(points, sp::CRS(sp::proj4string(countriesSP)))  
  sp::over(pointsSP, countriesSP)$ADMIN
}

sf$country <- as.character(get_countries(sf$x, sf$y))

library(countrycode)

sf$country <- countrycode(sf$country, 'country.name', 'iso2c')

library(wbstats)

gdp <- wbstats::wb_data(indicator = "NY.GDP.PCAP.PP.CD", mrnev=1)
gdp <- dplyr::select(gdp, iso2c, NY.GDP.PCAP.PP.CD)
colnames(gdp)[2] <- "gdp_capita"
  
sf <- merge(sf, gdp, by.x="country", by.y="iso2c")

sf$x_bin <- cut(sf$x, quantile(sf$x, seq(0, 1, 0.1)), labels=F)
sf$y_bin <- cut(sf$y, quantile(sf$x, seq(0, 1, 0.1)), labels=F)
sf$panomonth <- as.factor(substr(sf$panoDate, 6, 7))
sf$sampling_var <- as.factor(paste(sf$x_bin, sf$y_bin, sf$panomonth, sep="_")) 

###

# get processed data from GEE

library(googledrive)
googledrive::drive_auth(email="giacomo.falchetta@gmail.com")
gvs <- drive_find(q="name contains 'gv' AND name contains 'csv'", n_max = 2000, orderBy = "recency desc")

gvs <- filter(gvs, !grepl("comuni", name))
gvs <- filter(gvs, !grepl("ene", name))
gvs <- filter(gvs, !grepl("cities", name))
gvs <-  filter(gvs, !grepl("lc", name))
gvs <-  filter(gvs, !grepl("era", name))
gvs <- filter(gvs, !grepl("pop", name))

gvss <- data.frame()

for (i in 1:nrow(gvs)){
gvss[i,] <- drive_download(gvs[i,], overwrite = T)
}

gvss <- lapply(gvs$name, read_csv)
gvs <- bind_rows(gvss)

colnames(gvs)[1] <- "system.index"

gvs$system.index <- sub("\\_.*", "", gvs$system.index)
gvs$system.index <- as.numeric(gvs$system.index) + 1
gvs <- plyr::arrange(gvs, panoID, system.index)

gvs_w <- pivot_wider(gvs, names_from = 1 , values_from = c(2:14, 18:20, 22), names_glue = "{.value}_{system.index}")

gvs_w$.geo <- NULL

sf <- plyr::arrange(sf, panoID)
sf_b <- dplyr::select(sf, x, y, country, gdp_capita, panoID)
sf_b$geometry <- NULL

out_ndvi_m <- merge(gvs_w, sf_b, "panoID")

rm(gvs, gvs_w, sf_b, sf)

#

library(googledrive)
googledrive::drive_auth(email="giacomo.falchetta@gmail.com")
gvs <- drive_find(q="name contains 'gv' AND name contains 'csv'", n_max = 2000, orderBy = "recency desc")

gvs <- filter(gvs, !grepl("comuni", name))
gvs <- filter(gvs, !grepl("ene", name))
gvs <- filter(gvs, !grepl("cities", name))
gvs <-  filter(gvs, grepl("lc", name))
gvs <-  filter(gvs, !grepl("era", name))
gvs <- filter(gvs, !grepl("pop", name))

gvss <- data.frame()

for (i in 1:nrow(gvs)){
  gvss[i,] <- drive_download(gvs[i,], overwrite = T)
}

gvss <- lapply(gvs$name, read_csv)
gvs <- bind_rows(gvss)

gvs <- plyr::arrange(gvs, panoID)
gvs <- dplyr::select(gvs, 2, 5:6, 8:10, 13, 14:17)
out_ndvi_m <- merge(out_ndvi_m, gvs, "panoID")

#

library(googledrive)
googledrive::drive_auth(email="giacomo.falchetta@gmail.com")
gvs <- drive_find(q="name contains 'gv' AND name contains 'csv'", n_max = 2000, orderBy = "recency desc")

gvs <- filter(gvs, !grepl("comuni", name))
gvs <- filter(gvs, !grepl("ene", name))
gvs <- filter(gvs, !grepl("cities", name))
gvs <-  filter(gvs, !grepl("lc", name))
gvs <-  filter(gvs, !grepl("era", name))
gvs <- filter(gvs, grepl("pop", name))

gvss <- data.frame()

for (i in 1:nrow(gvs)){
  gvss[i,] <- drive_download(gvs[i,], overwrite = T)
}

gvss <- lapply(gvs$name, read_csv)
gvs <- bind_rows(gvss)

gvs <- dplyr::select(gvs, 6,8)
colnames(gvs)[1] <- "population"
out_ndvi_m <- merge(out_ndvi_m, gvs, "panoID")

rm(gvs, sf_d)

#

library(googledrive)
googledrive::drive_auth(email="giacomo.falchetta@gmail.com")
gvs <- drive_find(q="name contains 'gv' AND name contains 'csv'", n_max = 2000, orderBy = "recency desc")

gvs <- filter(gvs, !grepl("comuni", name))
gvs <- filter(gvs, !grepl("ene", name))
gvs <- filter(gvs, !grepl("cities", name))
gvs <-  filter(gvs, !grepl("lc", name))
gvs <-  filter(gvs, grepl("era", name))
gvs <- filter(gvs, !grepl("pop", name))

gvss <- data.frame()

for (i in 1:nrow(gvs)){
  gvss[i,] <- drive_download(gvs[i,], overwrite = T)
}

gvss <- lapply(gvs$name, read_csv)
gvs <- bind_rows(gvss)

colnames(gvs)[1] <- "system.index"

gvs$system.index <- sub("\\_.*", "", gvs$system.index)
gvs$system.index <- sub("2016", "", gvs$system.index)
gvs$system.index <- as.numeric(gvs$system.index)
gvs <- plyr::arrange(gvs, panoID, system.index)

gvs_w <- pivot_wider(gvs, names_from = 1 , values_from = c(8, 9, 10, 11, 12), names_glue = "{.value}_{system.index}")
gvs_w$.geo <- NULL

gvs <- dplyr::select(gvs_w, 6:66)

####

# 

out_ndvi_m <- merge(out_ndvi_m, gvs, "panoID")

rm(gvs, gvs_w)

saveRDS(out_ndvi_m, "after_gee_multispectral_gee_170524.rds")
save.image("after_gee_multispectral_gee_170524.Rdata")

#########################
#########################

# create spatial lag variables

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
save.image("data/validation/nnList_170524.RData")
