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

sf <- read_sf("GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

sf_p_l <- list()

library(clhs)

sf_use_s2(FALSE)

for (city in 1:nrow(sf_c)){
  sf_p <- sf_c[city,] 
  area <- sf_p$AREA
  sf_p <- st_sample(sf_p, area*10)
  sf_p_df <- as.data.frame(st_coordinates(sf_p))
  sf_p_i <- clhs(sf_p_df, size = area, progress = TRUE)
  sf_p <- sf_p[sf_p_i]
  sf_p_df <- as.data.frame(st_coordinates(sf_p))
  sf_p <- sf_p %>% st_transform(3395) %>% st_buffer(10) %>% st_transform(4326)
  sf_p <- st_as_sf(sf_p)
  sf_p <- bind_cols(sf_p, sf_p_df)
  sf_p_l[[city]] <- sf_p
  
}

names(sf_p_l) <- sf_c$UC_NM_MN

for (i in 1:length(sf_p_l)){
  colnames(sf_p_l[[i]][3]) <- "geometry"
  sf_p_l[[i]] <- st_as_sf(sf_p_l[[i]])
}

sf_p_l <- data.table::rbindlist(sf_p_l, idcol="city")

sf_p_l <- as.data.frame(sf_p_l)

####

sf_p_l <- sf_p_l %>% sample_n(nrow(.))

####


sf_p_ll <- split(sf_p_l, ceiling(seq(nrow(sf_p_l))/5000))

for (i in 1:length(sf_p_ll)){
  print(i)
  write_sf(sf_p_ll[[i]], paste0("gee_data/city_sampled/cities_sampled_points_", i, ".shp"))
}
