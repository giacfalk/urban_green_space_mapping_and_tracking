library(raster)
library(sf)
library(tidyverse)
library(sf)
library(rgee)

email = "your@gee_email.com"

setwd("./urban_green_space_mapping_and_tracking")

get_countries <-  function(long, lat)
{ 
  points <- cbind(long, lat)
  countriesSP <- rworldmap::getMap(resolution = 'low')
  pointsSP = sp::SpatialPoints(points, sp::CRS(sp::proj4string(countriesSP)))  
  sp::over(pointsSP, countriesSP)$ADMIN
}

#########
# configure RGEE first: https://github.com/r-spatial/rgee

ee_Initialize(email, drive=T, gcs=F)

#########

#1) import a set of points

# cities <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg")
# cities <- cities[1,]
# p_s <- st_sample(cities, 1000) 

p_s <- st_as_sf(p_s, coords=c("X", "Y"), crs=4326) 
p_s_coords <- p_s

#2) get data for predictions from RGEE

print(timestamp())

p_s <- st_transform(p_s, 3395) %>% st_buffer(10) %>% st_transform(4326)

p <- sf_as_ee(p_s)

collection = ee$ImageCollection("COPERNICUS/S2")$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))

ukr = p

months = ee$List$sequence(1, 12);
years = ee$List$sequence(2016, 2017);

addNDVI = function(image) {
  return(image$addBands(image$normalizedDifference(list("B8", "B4"))))}

yrMo = ee$ImageCollection$fromImages(
  months$map(ee_utils_pyfunc(function(m){
    return(collection$filter(ee$Filter$calendarRange(m, m, "month"))$map(addNDVI)$median()$set("month",m))
  })))

ndvi_2016 = ee_extract(yrMo, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)

###

months = ee$List$sequence(1, 12);
years = ee$List$sequence(2022, 2023);

addNDVI = function(image) {
  return(image$addBands(image$normalizedDifference(list("B8", "B4"))))}

yrMo = ee$ImageCollection$fromImages(
  months$map(ee_utils_pyfunc(function(m){
    return(collection$filter(ee$Filter$calendarRange(m, m, "month"))$map(addNDVI)$median()$set("month",m))
  })))

ndvi_2022 = ee_extract(yrMo, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)

###

COL_FILTER = ee$Filter$And(
  ee$Filter$date("2022-01-01", "2022-12-01"));

dwCol = ee$ImageCollection("GOOGLE/DYNAMICWORLD/V1")$filter(COL_FILTER)$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))
dwImage = dwCol$median()
dwImage = ee$ImageCollection(dwImage)

ukr = p

landcover_2022 = ee_extract(dwImage, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)

###

COL_FILTER = ee$Filter$And(
  ee$Filter$date("2016-01-01", "2016-12-01"));

dwCol = ee$ImageCollection("GOOGLE/DYNAMICWORLD/V1")$filter(COL_FILTER)$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))
dwImage = dwCol$median()
dwImage = ee$ImageCollection(dwImage)

ukr = p

landcover_2016 = ee_extract(dwImage, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)

###

era5 = ee$ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") $filter(ee$Filter$date("2016-01-01", "2017-01-01"))$select(list("temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"))$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))


ukr = p

era_2016 = ee_extract(era5, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)

###

era5 = ee$ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") $filter(ee$Filter$date("2022-01-01", "2023-01-01"))$select(list("temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"))$map(ee_utils_pyfunc(function(image){return(image$clip(p))}))


ukr = p

era_2022 = ee_extract(era5, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)


###

dwImage = ee$Image("users/giacomofalchetta/ghs_pop_2022")$clip(p)
dwImage = ee$ImageCollection(dwImage)

ukr = p

pop = ee_extract(dwImage, p, fun=ee$Reducer$median(), scale=10, sf=F, via="drive", lazy=F)

print(timestamp())

###

colnames(era_2016) <- gsub("temperature_2m", "mean_2m_air_temperature", colnames(era_2016))
colnames(era_2016) <- gsub("surface_pressure", "surface_pressure", colnames(era_2016))
colnames(era_2016) <- gsub("total_precipitation_sum", "total_precipitation", colnames(era_2016))
colnames(era_2016) <- gsub("u_component_of_wind_10m", "u_component_of_wind_10m", colnames(era_2016))
colnames(era_2016) <- gsub("v_component_of_wind_10m", "v_component_of_wind_10m", colnames(era_2016))

colnames(era_2022) <- gsub("temperature_2m", "mean_2m_air_temperature", colnames(era_2022))
colnames(era_2022) <- gsub("surface_pressure", "surface_pressure", colnames(era_2022))
colnames(era_2022) <- gsub("total_precipitation_sum", "total_precipitation", colnames(era_2022))
colnames(era_2022) <- gsub("u_component_of_wind_10m", "u_component_of_wind_10m", colnames(era_2022))
colnames(era_2022) <- gsub("v_component_of_wind_10m", "v_component_of_wind_10m", colnames(era_2022))

pr_data_2016 <- bind_cols(ndvi_2016, landcover_2016, era_2016, pop)
pr_data_2022<- bind_cols(ndvi_2022, landcover_2022, era_2022, pop)

tr <- sub("\\_.*", "", colnames(pr_data_2016))
tr <- gsub("2016", "", tr)
tr <- gsub("X", "", tr)
tr[1:214] <- as.character(as.numeric(tr[1:214])+1)
tr[275] <- ""

tr2 <- sub("^[^_]*_", "",  colnames(pr_data_2016))
colnames(pr_data_2016) <- paste0(tr2, "_", tr)
colnames(pr_data_2016) <- gsub("_0", "_", colnames(pr_data_2016))
colnames(pr_data_2016)[275] <- "population"

pr_data_2016$x <- st_coordinates(p_s_coords)[,1]
pr_data_2016$y <- st_coordinates(p_s_coords)[,2]

#

library(countrycode)

pr_data_2016$country <- as.character(get_countries(pr_data_2016$x, pr_data_2016$y))
pr_data_2016$country <- countrycode(pr_data_2016$country, 'country.name', 'iso2c')
gdp <- wbstats::wb_data(indicator = "NY.GDP.PCAP.PP.CD", mrnev=1)
gdp <- dplyr::select(gdp, iso2c, NY.GDP.PCAP.PP.CD)
colnames(gdp)[2] <- "gdp_capita"
pr_data_2016 <- merge(pr_data_2016, gdp, by.x="country", by.y="iso2c")

#

colnames(pr_data_2016)[206:215] <- gsub("_1", "", colnames(pr_data_2016)[206:215])

#

tr <- sub("\\_.*", "", colnames(pr_data_2022))
tr <- gsub("2022", "", tr)
tr <- gsub("X", "", tr)
tr[1:214] <- as.character(as.numeric(tr[1:214])+1)
tr[275] <- ""

tr2 <- sub("^[^_]*_", "",  colnames(pr_data_2022))
colnames(pr_data_2022) <- paste0(tr2, "_", tr)
colnames(pr_data_2022) <- gsub("_0", "_", colnames(pr_data_2022))
colnames(pr_data_2022)[275] <- "population"

pr_data_2022$x <- st_coordinates(p_s_coords)[,1]
pr_data_2022$y <- st_coordinates(p_s_coords)[,2]

#

library(countrycode)

pr_data_2022$country <- as.character(get_countries(pr_data_2022$x, pr_data_2022$y))
pr_data_2022$country <- countrycode(pr_data_2022$country, 'country.name', 'iso2c')
gdp <- wbstats::wb_data(indicator = "NY.GDP.PCAP.PP.CD", mrnev=1)
gdp <- dplyr::select(gdp, iso2c, NY.GDP.PCAP.PP.CD)
colnames(gdp)[2] <- "gdp_capita"
pr_data_2022 <- merge(pr_data_2022, gdp, by.x="country", by.y="iso2c")

#

colnames(pr_data_2022)[206:215] <- gsub("_1", "", colnames(pr_data_2022)[206:215])

###########

#3) make predictions

load("data/validation/after_rf_multispectral_gee.Rdata")

pr_2016 <- predict(rrfFit, pr_data_2016[complete.cases(pr_data_2016),])
pr_2022 <- predict(rrfFit, pr_data_2022[complete.cases(pr_data_2022),])

#4) show them

pr_data_2016 <- data.frame(pr_data_2016[complete.cases(pr_data_2016),], pr_2016)
pr_data_2022 <- data.frame(pr_data_2022[complete.cases(pr_data_2022),], pr_2022)

p_s_coords <- bind_cols(p_s_coords, st_coordinates(p_s_coords))

p_s_out <- merge(p_s_coords, pr_data_2016 %>% dplyr::select(x, y, pr_2016), by.x=c("X", "Y"), by.y=c("x", "y"))
p_s_out <- merge(p_s_out, pr_data_2022 %>% dplyr::select(x, y, pr_2022), by.x=c("X", "Y"), by.y=c("x", "y"))

colnames(p_s_out)[3:4] <- c("gvi_2016", "gvi_2022")

###

mapview::mapview(p_s_out, zcol="gvi_2022", basemaps = c("Esri.WorldImagery"))

ggplot(st_as_sf(p_s_out %>% reshape2::melt(c(1,2,5))))+
  theme_minimal()+
  geom_sf(aes(colour=value))+
  facet_wrap(vars(variable), ncol=1)+
  scale_colour_distiller(palette = "Greens", direction = 1)

ggplot(st_as_sf(p_s_out %>% reshape2::melt(c(1,2,5))))+
  theme_minimal()+
  geom_boxplot(aes(y=value, fill=variable, group=variable))
