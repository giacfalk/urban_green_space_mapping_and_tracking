
youremail = "test@gmail.com" # GEE-enabled email address

library(rgee)
library(sf)
library(tidyverse)
ee_Initialize(youremail, drive = TRUE)
library(lubridate)
library(raster)
library(exactextractr)

#

setwd("D:/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/")

ls <- list.files(pattern="\\.json")[-c(25, 27)]
ls <- ls[-c(8)]
ls2 <- lapply(ls, read_sf)


for (i in 2:length(ls2)){
  
  colnames(ls2[[i]]) <- colnames(ls2[[1]])
  
}

for (i in 1:length(ls2)){
  
  ls2[[i]]$city <- gsub(".json", "", ls[i])
  
}

ls2 <- bind_rows(ls2)

write_sf(ls2, "all_cities_green_index.shp")

