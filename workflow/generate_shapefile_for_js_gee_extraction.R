library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)
library(rnaturalearthdata)

# setwd("data/validation/")

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data")

#### NB: consider stratified sampling by city to have balanced picture
set.seed(2022)

sf <- read_sf("validation/all_cities_green_index.shp")

# filter by region
# countries = st_as_sf(rnaturalearthdata::countries50)
# countries = st_make_valid(countries)
# sf <- st_join(sf, countries)
# sf = filter(sf, continent=="Europe")

sf <- split(sf, ceiling(seq(nrow(sf))/50000))

for (i in 1:length(sf)){
print(i)
sf[[i]] <- sf[[i]] %>% st_transform(3395) %>% st_buffer(10) %>% st_transform(4326) %>% ungroup()
write_sf(sf[[i]], paste0("gee_data/gv_all_", i, ".shp"))
}

###


# 20 largest cities for each region / continent

source("workflow/process_roads.R")

