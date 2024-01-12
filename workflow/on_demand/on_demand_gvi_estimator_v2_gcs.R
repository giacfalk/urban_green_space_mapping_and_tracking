library(raster)
library(sf)
library(tidyverse)
library(sf)
library(rgee)
library(ranger)

# install.packages("https://cran.r-project.org/src/contrib/Archive/h2o/h2o_3.40.0.4.tar.gz", repos=NULL, type="source")
# library(h2o)
# h2o.init()
# saved_model <- h2o.loadModel("xgbLog5hNNrmseHubFinalALL")

email = "giacomo.falchetta@gmail.com"
ee_Initialize(email, drive=T, gcs=T)
load("after_rf_multispectral_gee.Rdata")

# lon_x = output_items[[i]]$x; lat_y = output_items[[i]]$y; obs_id = output_items[[i]]$id; year_yr = 2019;  buffer_size = 500

GVI_estimator <- function(lon_x, lat_y, obs_id, year_yr, buffer_size){

get_countries <-  function(long, lat)
{ 
  points <- cbind(long, lat)
  countriesSP <- rworldmap::getMap(resolution = 'low')
  pointsSP = sp::SpatialPoints(points, sp::CRS(sp::proj4string(countriesSP)))  
  sp::over(pointsSP, countriesSP)$ADMIN
}

#########

#1) import a set of points

p_s <- data.frame(X=lon_x, Y=lat_y, id=obs_id)

p_s <- st_as_sf(p_s, coords=c("X", "Y"), crs=4326) 
p_s_coords <- p_s

#2) get data for predictions from RGEE

timestamp()

p_s <- st_transform(p_s, 3395) %>% st_buffer(buffer_size) %>% st_transform(4326)

p <- sf_as_ee(p_s, via="gcs_to_asset", bucket = "accessibility_jack", assetId=paste0("users/giacomofalchetta/tuamadre_", round(runif(1, 0, 1e9), 0)), overwrite = T)

collection = ee$ImageCollection("COPERNICUS/S2")$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))



months = ee$List$sequence(1, 12);
years = ee$List$sequence(year_yr, year_yr+1);

addNDVI = function(image) {
  return(image$addBands(image$normalizedDifference(list("B8", "B4"))))}

yrMo = ee$ImageCollection$fromImages(
  months$map(ee_utils_pyfunc(function(m){
    return(collection$filter(ee$Filter$calendarRange(m, m, "month"))$map(addNDVI)$median()$set("month",m))
  })))

ndvi_2016 = ee_extract(yrMo, p, fun=ee$Reducer$median(), scale=buffer_size, sf=F, via="drive", lazy=F, quiet = F)

COL_FILTER = ee$Filter$And(
  ee$Filter$date(paste0(year_yr, "-01-01"), paste0(year_yr, "-12-01")));

dwCol = ee$ImageCollection("GOOGLE/DYNAMICWORLD/V1")$filter(COL_FILTER)$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))
dwImage = dwCol$median()
dwImage = ee$ImageCollection(dwImage)



landcover_2016 = ee_extract(dwImage, p, fun=ee$Reducer$median(), scale=buffer_size, sf=F, via="drive", lazy=F, quiet = F)

###

era5 = ee$ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") $filter(ee$Filter$date(paste0(year_yr, "-01-01"), paste0(year_yr+1, "-01-01")))$select(list("temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"))$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))




era_2016 = ee_extract(era5, p, fun=ee$Reducer$median(), scale=buffer_size, sf=F, via="drive", lazy=F, quiet = F)

###

dwImage = ee$Image("users/giacomofalchetta/ghs_pop_2022")$clip(p)
dwImage = ee$ImageCollection(dwImage)



pop = ee_extract(dwImage, p, fun=ee$Reducer$median(), scale=buffer_size, sf=F, via="drive", lazy=F, quiet = F)

timestamp()

colnames(landcover_2016)[-1] <- gsub("X0_", "", colnames(landcover_2016)[-1])
colnames(ndvi_2016)[-1] <- paste0(sub("^[^_]+_","",colnames(ndvi_2016)[-1]), "_", rep(1:12, each=17))
colnames(era_2016)[-1] <- paste0(sub("^[^_]+_","",colnames(era_2016)[-1]), "_", rep(1:12, each=5))

colnames(era_2016)[-1] <- gsub("temperature_2m", "mean_2m_air_temperature", colnames(era_2016)[-1])
colnames(era_2016)[-1] <- gsub("surface_pressure", "surface_pressure", colnames(era_2016)[-1])
colnames(era_2016)[-1] <- gsub("total_precipitation_sum", "total_precipitation", colnames(era_2016)[-1])
colnames(era_2016)[-1] <- gsub("u_component_of_wind_10m", "u_component_of_wind_10m", colnames(era_2016)[-1])
colnames(era_2016)[-1] <- gsub("v_component_of_wind_10m", "v_component_of_wind_10m", colnames(era_2016)[-1])

pr_data_2016 <- Reduce(function(x,y) merge(x,y,by="id") ,list(ndvi_2016, landcover_2016, era_2016, pop))

colnames(pr_data_2016)[276] <- "population"

pr_data_2016$x <- st_coordinates(p_s_coords)[,1]
pr_data_2016$y <- st_coordinates(p_s_coords)[,2]

#

library(countrycode)

pr_data_2016$country <- as.character(get_countries(pr_data_2016$x, pr_data_2016$y))
pr_data_2016$country <- countrycode(pr_data_2016$country, 'country.name', 'iso3c')
gdp <- wbstats::wb(indicator = "NY.GDP.PCAP.PP.CD")
gdp <- gdp %>% group_by(iso3c) %>% slice_head(n=1)
gdp <- dplyr::select(gdp, iso3c, value)
colnames(gdp)[2] <- "gdp_capita"
pr_data_2016 <- merge(pr_data_2016, gdp, by.x="country", by.y="iso3c")

###########

#3) make predictions

pr_2016 <- predict(rrfFit, pr_data_2016[complete.cases(pr_data_2016),])

# h2o::h2o.predict(saved_model,  pr_data_2016[complete.cases(pr_data_2016),])

pr_2016_b <- data.frame(id=pr_data_2016[complete.cases(pr_data_2016),]$id, GVI=pr_2016)

return(pr_2016_b)

}
