library(raster)
library(sf)
library(tidyverse)
library(sf)
library(pbapply)
library(osmdata)

split_bbox <- function(bbox, n_x = 2, n_y = 2) {
  # Assert that bbox is a bounding box
  stopifnot(class(bbox) %in% "bbox")
  
  # Get the length of the x axis
  x_ext <- bbox["xmax"] - bbox["xmin"]
  # Get the length of the y axis
  y_ext <- bbox["ymax"] - bbox["ymin"]
  
  incr_x <- x_ext / n_x
  incr_y <- y_ext / n_y
  
  # Create a sequence of x and y coordinates to generate the xmins and ymins
  xmin <- seq(from = bbox["xmin"], to = bbox["xmax"], by = incr_x)
  ymin <- seq(from = bbox["ymin"], to = bbox["ymax"], by = incr_y)
  
  # Remove the last element of x and y to ensure that the
  # top right corner isnt create an xmin or ymin
  xmin <- xmin[1:length(xmin) - 1]
  ymin <- ymin[1:length(ymin) - 1]
  
  bbox_table <-
    expand_grid(xmin, ymin) %>%
    mutate(xmax = xmin + incr_x,
           ymax = ymin + incr_y)
  
  bounding_boxes <-
    transpose(bbox_table) %>% map( ~ .x %>%
                                     unlist %>% st_bbox(crs = st_crs(bbox)$epsg))
  
  return(bounding_boxes)
}

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")

####

cities <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg")
cities <- cities %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

####

for(X in (1:nrow(cities))[-68]){

  print(X)
  
lagos_bb <- st_bbox(cities[X,])
lagos_bb <- split_bbox(lagos_bb, n_x = 2, n_y = 2)

# available_features()

lagos_streets <- list()

for (i in 1:4){
  print(i)
lagos_streets[[i]] <- lagos_bb[[i]] %>%
  opq(timeout = 500) %>%
  add_osm_feature("highway") %>%
  osmdata_sf()

lagos_streets[[i]] <- lagos_streets[[i]]$osm_lines

}

lagos_streets <- bind_rows(lagos_streets)

lagos_streets <- st_transform(lagos_streets, 3395) %>% st_buffer(5)

lagos_streets <- st_union(lagos_streets)

lagos_streets <- sf::st_cast(lagos_streets, "POLYGON")

# mapview::mapview(lagos_streets)

sf_p <- lagos_streets
sf_p <- st_as_sf(sf_p)

#

library(clhs)
sf_use_s2(FALSE)
sf_p <- st_sample(sf_p, size=cities[X,]$AREA*10, type="random")
sf_p <- st_cast(st_sfc(sf_p), "POINT", group_or_split = T)
sf_p_df <- as.data.frame(st_coordinates(sf_p))
# sf_p_i <- clhs(sf_p_df, size = round(nrow(sf_p_df)*0.05, 0), progress = TRUE)
# sf_p <- sf_p[sf_p_i]
# sf_p_df <- as.data.frame(st_coordinates(sf_p))
sf_p <- sf_p %>% st_transform(3395) %>% st_buffer(10) %>% st_transform(4326)
sf_p <- bind_cols(sf_p_df, sf_p)
sf_p <- st_as_sf(sf_p)

sf_p <- st_filter(sf_p, cities[X,], .predicate = st_within)

# mapview::mapview(cities[X,]) + mapview::mapview(sf_p)

saveRDS(sf_p, paste0("points_along_roads_", X, ".Rdata"))

gc()

}

# mapview::mapview(read_rds(paste0("points_along_roads_", "1", ".Rdata")))

############
############
############

# upload to GEE

library(rgee)
email = "giacomo.falchetta@gmail.com"
ee_Initialize(email, drive=T, gcs=T)

output_items <- list()

for (i in ( 1:nrow(cities))[-68]){
  print(i)
  output_items[[i]] <- read_rds(paste0("points_along_roads_", i, ".Rdata")) %>% dplyr::select(-X, -Y)
  output_items[[i]] <- st_set_geometry(output_items[[i]], "geometry")
  output_items[[i]]$id <- paste0(i, "_", 1:nrow( output_items[[i]]))
  output_items[[i]] <- st_transform(output_items[[i]], 4326)
  sf_as_ee(output_items[[i]], via="gcs_to_asset", bucket = "accessibility_jack", assetId=paste0("users/giacomofalchetta/cities_sampled_points_", i, ".shp"), overwrite = T, monitoring=F)
}
  

