

##############################################################################

# This Rscript: 

#   1) Sample prediction points along roads in world cities
#   2) Upload sampled points to GEE

##############################################################################

rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

library(raster)
library(sf)
library(tidyverse)
library(sf)
library(pbapply)
library(osmdata)

list_exclude <- c(275,291,292)

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

####


cities <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg")
cities <- cities %>% group_by(GRGN_L1) %>% slice_max(P15, n = 50)

cities_provide <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg")

dict <- basename(list.dirs("C:/Users/Utente/OneDrive - IIASA/IBGF_2024/implementation/climate/provide_urban_climate_data/climatechange/future_deltas", recursive = F))

cities_provide <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg")

library(stringdist)

# Compute the string distance matrix
dist_matrix <- stringdistmatrix(dict, cities_provide$UC_NM_MN, method = "lv")  # "lv" = Levenshtein distance

# Find the closest match for each string in vec1
closest_matches <- apply(dist_matrix, 1, function(row) cities_provide$UC_NM_MN[which.min(row)])

# Combine results
matches <- data.frame(original = dict, closest_match = closest_matches)

matches$closest_match[3] <- "Alacant / Alicante"
matches$closest_match[50] <- "Ho Chi Minh City"
matches$closest_match[53] <- "Rawalpindi [Islamabad]"
matches$closest_match[111] <- "Rotterdam [The Hague]"
matches <- matches[-c(67,133),] 

cities_provide <- filter(cities_provide, UC_NM_MN %in% matches$closest_match)
cities_provide <- group_by(cities_provide, UC_NM_MN) %>% slice_max(P15, n = 1, with_ties = FALSE) %>% 
  ungroup()

cities <- bind_rows(cities, cities_provide)
cities <- unique(cities)

####

for(X in (1:nrow(cities))){
  
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
  
  saveRDS(sf_p, paste0("points_along_roads_new_", X, ".Rdata"))
  
  gc()
  
}

  # mapview::mapview(read_rds(paste0("points_along_roads_", "1", ".Rdata")))

# upload to GEE

reticulate::use_python("C:/Users/Utente/miniconda3/envs/rgee")
library(rgee)
# rgee::ee_install_upgrade(earthengine_env = "C:/Users/Utente/miniconda3/envs/rgee")
ee_install_set_pyenv(py_path = "C:/Users/Utente/miniconda3/envs/rgee")
# ee_check()
# ee_Authenticate()
email = "giacomo.falchetta@gmail.com"
ee_Initialize(email, drive=T, gcs=T, project = "ee-giacomofalchetta")

###

output_items <- list()

for (i in c(1:nrow(cities))[-list_exclude]){
  print(i)
  output_items[[i]] <- read_rds(paste0("points_along_roads_new_", i, ".Rdata"))
  output_items[[i]] <- st_set_geometry(output_items[[i]], "geometry")
  output_items[[i]]$id <- paste0(i, "_", 1:nrow( output_items[[i]]))
  output_items[[i]] <- st_transform(output_items[[i]], 4326)
  sf_as_ee(output_items[[i]], via="gcs_to_asset", bucket = "accessibility_jackk", assetId=paste0("users/giacomofalchetta/cities_sampled_points_new_", i, ".shp"), overwrite = T, monitoring=F)
}
