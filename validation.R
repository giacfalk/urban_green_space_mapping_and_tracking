library(rgee)
library(sf)
library(tidyverse)
ee_Initialize("giacomo.falchetta@gmail.com", drive = TRUE)
library(lubridate)
library(raster)
library(exactextractr)

#

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/")

sf <- read_sf("geneva_green_index.json") %>% st_transform(3395) %>% st_buffer(10) %>% st_transform(4326)

iml8 = ee$ImageCollection("LANDSAT/LC08/C01/T1_32DAY_NDVI")$select('NDVI')

image2 = ee$Image(
  iml8$filterDate("2020-01-01","2021-01-01")
  $first()
);

sf2 <- ee_extract(
  image2,
  sf,
  fun = ee$Reducer$mean(),
  scale = 100,
  sf = FALSE)




#############



