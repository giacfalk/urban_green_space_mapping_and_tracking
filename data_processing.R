#https://www.overleaf.com/project/612d4f20a1328578aada68c9

# Go on with data analysis; start seriously writing paper even if results are still not great -> Perhaps think about validation against some high-resolution land cover maps [14.30 - 17]

##########################
##########################

library(rgee)
library(sf)
library(tidyverse)
ee_Initialize()
library(lubridate)
library(raster)
library(exactextractr)

#
setwd("D:/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")

#

ndvi_threshold <- 0.15 # NDVI threshold to consider an urban area covered by some vegetation
change_threshold <- 0.1 # minimum change in NDVI to assign pixel as "with vegetation status change"

###############
# Local data

sf <- read_sf("data/ucdb.shp") # Cities database

world <- rnaturalearth::ne_countries(scale = "medium", returnclass = "sf") # Country borders shapefile

pop <- raster("data/GHS_POP_E2015_GLOBE_R2019A_4326_30ss_V1_0.tif") # Gridded population
sf$P15 <- exactextractr::exact_extract(pop, sf, "sum")

sf$X= st_coordinates(st_centroid(sf))[,1]
sf$Y= st_coordinates(st_centroid(sf))[,2]

###############
# Google Earth Engine

table = ee$FeatureCollection("users/giacomofalchetta/UC_cities_global")

iml8 = ee$ImageCollection("LANDSAT/LC08/C01/T1_32DAY_NDVI")$select('NDVI')

image1 = ee$Image(
  iml8$filterDate("2014-01-01","2015-01-01")
  $max()
);

image2 = ee$Image(
  iml8$filterDate("2020-01-01","2021-01-01")
  $max()
);

builtup = ee$Image("JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1")$select("built")
builtup = builtup$gte(3)
builtup = builtup$mask(builtup$eq(1))

# cropland = ee$Image("USGS/GFSAD1000_V1")$eq(0)
# cropland = cropland$mask(cropland$eq(1))

image1 = image1$mask(builtup)
image2 = image2$mask(builtup)

area = ee$Image$pixelArea()$divide(1000000)

ndvi_plus = image2$subtract(image1)
ndvi_plus = ndvi_plus$gte(change_threshold)$And(image2$gte(ndvi_threshold))
ndvi_plus <- ndvi_plus$multiply(area)
ndvi_plus <- ndvi_plus$mask(ndvi_plus$gt(0))

ndvi_minus = image2$subtract(image1)
ndvi_minus = ndvi_minus$lte(-change_threshold)$And(image1$gte(ndvi_threshold))
ndvi_minus <- ndvi_minus$multiply(area)
ndvi_minus <- ndvi_minus$mask(ndvi_minus$gt(0))

scale = ndvi_minus$projection()$nominalScale()

cities1 <- ndvi_plus$reduceRegions(reducer = ee$Reducer$sum(), collection=table, scale=1000) %>% ee_as_sf(via="drive")

cities2 <- ndvi_minus$reduceRegions(reducer = ee$Reducer$sum(), collection=table, scale=1000) %>% ee_as_sf(via="drive")

green_area_2020 = image2$gte(ndvi_threshold)
green_area_2020 <- green_area_2020$multiply(area)
green_area_2020 <- green_area_2020$mask(green_area_2020$gt(0))

cities3 <- green_area_2020$reduceRegions(reducer = ee$Reducer$sum(), collection=table, scale=1000) %>% ee_as_sf(via="drive")

builtup_sum <- builtup$reduceRegions(reducer = ee$Reducer$sum(), collection=table, scale=1000) %>% ee_as_sf(via="drive")

image2 = ee$Image(
  iml8$filterDate("2020-01-01","2021-01-01")
  $max()
);

builtup = ee$Image("JRC/GHSL/P2016/BUILT_LDSMT_GLOBE_V1")$select("built")
builtup = builtup$lt(3)
builtup = builtup$mask(builtup$eq(1))

image2 = image2$mask(builtup)

parks = image2$gte(ndvi_threshold)
parks <- parks$multiply(area)
parks <- parks$mask(parks$gt(0))

cities4 <- parks$reduceRegions(reducer = ee$Reducer$sum(), collection=table, scale=1000) %>% ee_as_sf(via="drive")

save(cities1, file = paste0("cities1_", ndvi_threshold, ".Rds"))
save(cities2, file = paste0("cities2_", ndvi_threshold, ".Rds"))
save(cities3, file = paste0("cities3_", ndvi_threshold, ".Rds"))
save(builtup_sum, file = paste0("builtup_sum_", ndvi_threshold, ".Rds"))
save(cities4, file = paste0("cities4_", ndvi_threshold, ".Rds"))

################
# Processed data wrangling

load(paste0("cities1_", ndvi_threshold, ".Rds"))
load(paste0("cities2_", ndvi_threshold, ".Rds"))
load(paste0("cities3_", ndvi_threshold, ".Rds"))
load(paste0("cities4_", ndvi_threshold, ".Rds"))
load(paste0("builtup_sum_", ndvi_threshold, ".Rds"))

#

cities1 <- cities1 %>% mutate(geometry=NULL, AREA=NULL) %>% as.data.frame()
cities1 <- cities1[order(cities1$fid),]
cities1 <- cities1$sum

cities2 <- cities2 %>% mutate(geometry=NULL, AREA=NULL) %>% as.data.frame()
cities2 <- cities2[order(cities2$fid),]
cities2 <- cities2$sum

cities3 <- cities3 %>% mutate(geometry=NULL, AREA=NULL) %>% as.data.frame()
cities3 <- cities3[order(cities3$fid),]
cities3 <- cities3$sum

builtup_sum <- builtup_sum %>% mutate(geometry=NULL, AREA=NULL) %>% as.data.frame()
builtup_sum <- builtup_sum[order(builtup_sum$fid),]
builtup_sum <- builtup_sum$sum

cities4 <- cities4 %>% mutate(geometry=NULL, AREA=NULL) %>% as.data.frame()
cities4 <- cities4[order(cities4$fid),]
cities4 <- cities4$sum

delta <- cities1 - cities2

#

sf <- bind_cols(sf, cities1, cities2, cities3, delta, builtup_sum, cities4)

sf$posneg <- ifelse(sf$...7 < -0.2, "Green space shrinking",  ifelse(sf$...7> -0.2 & sf$...7<0.2, "Green space idle", "Green space growing"))

sf$share <- sf$...6/sf$...8
