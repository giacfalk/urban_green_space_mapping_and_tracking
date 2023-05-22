
#::install_github("r-spatial/rgee")
# library(rgee)
# ee_Initialize(user = "giacomo.falchetta@gmail.com", drive = T)
#rgee::ee_install()
library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)
library(rnaturalearthdata)

setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/")

#setwd("D:/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/")

#### NB: consider stratified sampling by city to have balanced picture
set.seed(2022)

sf <- read_sf("all_cities_green_index.shp")

library(lattice)
h<-histogram(as.numeric(substr(sf$panoDate, 1, 4)), xlab="Google Street View aquisition year",
             ylab="Relative frequency",col="darkred")

png("hist_y_distr.png")
h
dev.off()
# descriptive plot for SI

sf_d <- sf

sf_d$city <- gsub("green_index", "", sf_d$city)
sf_d$city <- gsub("green_view", "", sf_d$city)
sf_d$city <- gsub("greenview", "", sf_d$city)
sf_d$city <- gsub("_", "", sf_d$city)

ggplot(sf_d)+
  theme_classic()+
geom_boxplot(aes(x=reorder(city, GreenView, FUN = median), y=GreenView), fill="white")+
  xlab("City")+
  ylab("GVI distribution")+
  theme(legend.position = "none", axis.text.x = element_text(angle = 90))

ggsave("gvi_descr.png", scale=1.5)

#################

## extraction being done on js GEE

#################

sf$x <- as.numeric(st_coordinates(sf$geometry)[,1])
sf$y <- as.numeric(st_coordinates(sf$geometry)[,2])

# map for figure 1

grr <- sf %>% group_by(city) %>% slice_sample(n=1) %>% ungroup() %>%  st_transform("ESRI:54009")
grr2 <- sf %>% st_set_geometry(NULL) %>%  group_by(city) %>% dplyr::summarise(GreenView=mean(GreenView, na.rm=T))
grr$GreenView <- grr2$GreenView

library(rasterVis)
require(rgdal)
require(maptools)
library(ggthemes)
library(ggrepel)

data(wrld_simpl)
wrld_simpl_sf <- st_as_sf(wrld_simpl)
wrld_simpl_sf <- st_transform(wrld_simpl_sf, "ESRI:54009")

load(url("https://github.com/valentinitnelav/RandomScripts/blob/master/NaturalEarth.RData?raw=true"))

PROJ <- "+proj=eck4 +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs" 
NE_graticules.prj <- spTransform(NE_graticules, CRSobj = PROJ)

ggplot()+
  theme_classic()+
  geom_sf(data=wrld_simpl_sf, fill="lightgrey", colour="black", lwd=0.25)+
  geom_sf(data=grr, fill=NA, colour="black", lwd=0.75, size=1.5)+
  stat_sf_coordinates(data=st_centroid(grr), colour="forestgreen", size=2.5)+
  scale_colour_viridis_c(name="GVI in 2022")+
  theme(legend.position = "bottom", legend.direction = "horizontal",  plot.margin = unit(c(t=0, r=2, b=0, l=0), unit="cm"))+
  xlab("")+
  ylab("")

ggsave("map_gvi_cities.png", scale=3.5, height = 3, width = 3)

#############

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

#

library(googledrive)
googledrive::drive_auth(email="giacomo.falchetta@gmail.com")
# gvs <- drive_find(q="name contains 'gv' AND name contains 'csv'", n_max = 500, orderBy = "recency desc")
# gvs$local_path <- NA
# 
# for (i in 1:nrow(gvs)){
# gvs[i,] <- drive_download(gvs[i,], overwrite = T)
# }

gvs <- list.files(pattern="gv_")
gvs <- gvs[!grepl("lc", gvs)]
gvs <- gvs[!grepl("era", gvs)]
gvs <- gvs[!grepl("pop", gvs)]
gvs <- gvs[!grepl("22", gvs)]
gvs <- lapply(gvs, read.csv)
gvs <- bind_rows(gvs)

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
# googledrive::drive_auth(email="giacomo.falchetta@gmail.com")
# gvs <- drive_find(q="name contains 'gv' AND name contains 'lc' AND name contains 'csv'", n_max = 500, orderBy = "recency desc")
# gvs$local_path <- NA
# 
# for (i in 1:nrow(gvs)){
# gvs[i,] <- drive_download(gvs[i,], overwrite = T)
# }

gvs <- list.files(pattern="gv_")
gvs <- gvs[grepl("lc", gvs)]
gvs <- lapply(gvs, read.csv)
gvs <- bind_rows(gvs)

gvs <- plyr::arrange(gvs, panoID)
gvs <- dplyr::select(gvs, 2, 5:6, 8:10, 13, 14:17)
out_ndvi_m <- merge(out_ndvi_m, gvs, "panoID")

#

# library(googledrive)
# gvs <- drive_find(q="name contains 'gv' AND name contains 'pop' AND name contains 'csv'", n_max = 500, orderBy = "recency desc")
# gvs$local_path <- NA
# 
# for (i in 1:nrow(gvs)){
#   gvs[i,] <- drive_download(gvs[i,], overwrite = T)
# }

gvs <- list.files(pattern="gv_")
gvs <- gvs[grepl("pop", gvs)]
gvs <- lapply(gvs, read.csv)
gvs <- bind_rows(gvs)

gvs <- dplyr::select(gvs, 7:8)
colnames(gvs)[2] <- "population"
out_ndvi_m <- merge(out_ndvi_m, gvs, "panoID")

rm(gvs, sf_d)

#

# library(googledrive)
# gvs <- drive_find(q="name contains 'gv' AND name contains 'era' AND name contains 'csv'", n_max = 500, orderBy = "recency desc")
# gvs$local_path <- NA
# 
# for (i in 1:nrow(gvs)){
#   gvs[i,] <- drive_download(gvs[i,], overwrite = T)
# }

gvs <- list.files(pattern="gv_")
gvs <- gvs[grepl("era", gvs)]
gvs <- lapply(gvs, read.csv)
gvs <- bind_rows(gvs)

gvs$system.index <- sub("\\_.*", "", gvs$system.index)
gvs$system.index <- sub("2015", "", gvs$system.index)
gvs$system.index <- as.numeric(gvs$system.index)
gvs <- plyr::arrange(gvs, panoID, system.index)

gvs_w <- pivot_wider(gvs, names_from = 1 , values_from = c(6, 9, 10, 11, 12), names_glue = "{.value}_{system.index}")
gvs_w$.geo <- NULL

gvs <- dplyr::select(gvs_w, 6:66)

out_ndvi_m <- merge(out_ndvi_m, gvs, "panoID")

rm(gvs, gvs_w)

###

# library(readxl)
# fex <- read_xlsx("11_7_1_provision_and_access_to_open_spaces_in_cities_2020.xlsx")

#geocode and spatial merge OR fuzzyjoin with city/countryname

#save.image("after_gee_multispectral_gee.Rdata")
#load("after_gee_multispectral_gee.Rdata")

############

out_ndvi_m <- sample_frac(out_ndvi_m, 0.01)

out_ndvi_m$x_bin <- cut(out_ndvi_m$x, quantile(out_ndvi_m$x, seq(0, 1, 0.1)), labels=F)
out_ndvi_m$y_bin <- cut(out_ndvi_m$y, quantile(out_ndvi_m$y, seq(0, 1, 0.1)), labels=F)
out_ndvi_m$sampling_var <- as.factor(paste(out_ndvi_m$x_bin, out_ndvi_m$y_bin, sep="_")) 

##################

library(splitstackshape)

out_ndvi_m <- na.omit(out_ndvi_m)

global_ac_train <- stratified(out_ndvi_m, c("sampling_var"), 0.75, bothSets = T)
global_ac_test <- as.data.frame(global_ac_train[[2]])
global_ac_train <- as.data.frame(global_ac_train[[1]])

global_ac_train$city <- NULL
global_ac_test$city <- NULL

#

library(caret)
library(parallel)
library(doParallel)
library(CAST)

# Enable multithread support
# cores_2_use <- floor(0.5*detectCores())
# cl <- makeCluster(cores_2_use, outfile = "parallel_log.txt")
# registerDoParallel(cl)

global_ac_train <- dplyr::select(global_ac_train, -c(1,2,4, 5, 212, 214, 285:286))
global_ac_train <- dplyr::select(global_ac_train, -starts_with("QA"))

indices <- CreateSpacetimeFolds(global_ac_train,spacevar = "sampling_var", # requires pre-calculated "clusters!" (e.g. define transects based on coords http://rstudio-pubs-static.s3.amazonaws.com/465397_57be566aff364c309e2e3a5e9ce8f7e1.html)
                                k=10)

global_ac_train$sampling_var <- NULL

# Model cross validations options
fitControl <- trainControl(
  ## Repeated 10-fold CreateSpaceTimeFolds CV 
  method = "cv",
  index = indices$index,
  indexOut = indices$indexOut,
  verboseIter = TRUE, allowParallel = F)

cRmsle <- function(data, lev = NULL, model = NULL) {
  out = Metrics::rmsle(data[, "obs"], data[, "pred"])
  names(out) = c("rmsle")
  out
}

# definisci manualmente i parameter (num.trees, mtry, splitrule) space con tunematrix
rrfFit <- train(GreenView ~ ., 
                data = as.data.frame(global_ac_train),
                method = 'ranger',
                num.trees = 1000,
                metric = "cRmsle",
                maximize = FALSE,
                tuneLength = 10,
                trControl = fitControl,
                importance = "permutation", na.action = na.omit)

# Shut down parallel
stopCluster(cl)
registerDoSEQ()

# Print CV accuracy
print(rrfFit)

save(rrfFit, "after_rf_multispectral_gee.Rdata")

##########

r2_train <- cor(na.omit(global_ac_train)$GreenView, predict(rrfFit, na.omit(global_ac_train)))^2

r2_train

library(caret)

# Variable importance
varImp_test <- varImp(rrfFit)
varImp_test

# Predict on test

global_ac_test <- dplyr::select(global_ac_test, -c(1,2,4, 5, 212, 214, 285:286))
global_ac_test <- dplyr::select(global_ac_test, -starts_with("QA"))

global_ac_test$GreenView_predicted = predict(rrfFit, global_ac_test)

r2_test <- cor(global_ac_test$GreenView, global_ac_test$GreenView_predicted)^2

r2_test

######

# comparison plot

library(ggplot2)

# calculate MAPEs and MSEs

mape <- function(real,modeled){
  
  round(mean(abs((real - modeled)/real), na.rm=T), 2)
  
}


mse <- function(real,modeled){
  
  round(mean((real - modeled)^2, na.rm=T), 2)
  
}

global_ac_train$greenview_pred <- predict(rrfFit, global_ac_train)
global_ac_test$greenview_pred <- predict(rrfFit, global_ac_test)

a <- ggplot(global_ac_train)+
  geom_abline()+
  geom_point(aes(x=greenview_pred, y = GreenView), alpha=0.25)+
  xlab("Model estimate")+
  ylab("Survey data")+
  annotate("text", x=7, y=75, label= paste0("r2 = ", round(cor(global_ac_train$greenview_pred, global_ac_train$GreenView)^2, 2)))+
  annotate("text", x=7, y=70, label= paste0("MSE = ", mse(global_ac_train$greenview_pred, global_ac_train$GreenView)))+
  ggtitle("Training set")+
  coord_cartesian(xlim=c(0, 75), ylim=c(0, 75))

b <- ggplot(global_ac_test)+
  geom_abline()+
  geom_point(aes(x=greenview_pred, y = GreenView), alpha=0.25)+
  xlab("Model estimate")+
  ylab("Survey data")+
  annotate("text", x=7, y=75, label= paste0("r2 = ", round(cor(global_ac_test$greenview_pred, global_ac_test$GreenView)^2, 2)))+
  annotate("text",x=7, y=70, label= paste0("MSE = ", mse(global_ac_test$greenview_pred, global_ac_test$GreenView)))+
  ggtitle("Testing set")+
  coord_cartesian(xlim=c(0, 75), ylim=c(0, 75))

library(patchwork)

p <- a + b

ggsave("results/valid_plot.png", p, scale=1.25, height = 4, width = 7)

####
# country level validation

global_ac_test$ctry = gdp$iso2c[match(global_ac_test$gdp_capita, gdp$gdp_capita)]

ctry_acc = unlist(lapply(unique(global_ac_test$ctry), function(X){
  
  cor(global_ac_test$greenview_pred[global_ac_test$ctry==X], global_ac_test$GreenView[global_ac_test$ctry==X])^2
  
}))

ctry_acc = data.frame(ctry_acc=ctry_acc, ctry=unique(global_ac_test$ctry))

ggplot(na.omit(ctry_acc))+
  theme_classic()+
  geom_col(aes(x=ctry, y=ctry_acc))+
  scale_y_continuous(labels=scales::label_percent())+
  ylab("Country-level testing accuracy")+
  xlab("Country")

ggsave("results/ctr_level_test_acc.png", scale=1.25, height = 3, width = 7)


