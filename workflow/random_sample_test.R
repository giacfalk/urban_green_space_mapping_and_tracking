

##############################################################################

# This Rscript: 

#   1)

##############################################################################

rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

library(caret)
library(CAST)
library(rworldmap)
library(countrycode)
library(wbstats)
library(rasterVis)
require(rgdal)
require(maptools)
library(ggthemes)
library(ggrepel)
library(sf)
library(tidyverse)
library(raster)
library(dplyr)
library(kgc)

cl <- climatezones

###########

out_ndvi_m <- readRDS("data/validation/after_gee_multispectral_gee_170524.rds")

out_ndvi_m_sel <- out_ndvi_m %>% dplyr::select(country, panoID, panoDate, x, y, GreenView, starts_with("nd_"), population, gdp_capita, city)

out_ndvi_m_sel$x_s <- RoundCoordinates(out_ndvi_m_sel$x)
out_ndvi_m_sel$y_s <- RoundCoordinates(out_ndvi_m_sel$y)

out_ndvi_m_sell <- merge(out_ndvi_m_sel, cl, by.x=c("x_s", "y_s"), by.y=c("Lon", "Lat"))

out_ndvi_m_sell$x_s <- NULL
out_ndvi_m_sell$y_s <- NULL

out_ndvi_m_sell2 <- out_ndvi_m_sell

citiess <- unique(out_ndvi_m_sell$city)
citiess2 <- c("London", "Los Angeles", "Vancouver", "São Paulo", "Toronto", "Miami", "Tampa", "Singapore", "Sydney", "Johannesburg", "Tel Aviv", "Amsterdam", "Turin")

###

for(i in 1:length(citiess)){

  print(citiess)[i]
  
ll <- out_ndvi_m_sell[out_ndvi_m_sell$city==citiess[i],]

library(spatstat)

observed <- ppp(ll$x, ll$y, window = owin(c(min(ll$x),max(ll$x)),c(min(ll$y),max(ll$y)))) # Defines point pattern object
observed_f <- st_as_sf(data.frame(x=observed$x, y=observed$y), coords=c("x", "y"), crs=4326, remove=T)

# Generate a random point pattern with the same window

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


####

# available_features()

mm <- st_convex_hull(st_union(st_as_sf(ll, coords=c("x", "y"), crs=4326))) 
mm <- st_as_sf(mm)

lagos_streets <- list()

for (ii in 1){
  print(ii)
  lagos_streets[[ii]] <- st_coordinates(mm)[,1:2] %>%
    opq(timeout = 500) %>%
    add_osm_feature("highway") %>%
    osmdata_sf()
  
  lagos_streets[[ii]] <- lagos_streets[[ii]]$osm_lines
  
}

lagos_streets <-lagos_streets[[1]]$geometry

lagos_streets <- st_transform(lagos_streets, 3395) %>% st_buffer(5)

lagos_streets <- st_union(lagos_streets)

lagos_streets <- sf::st_cast(lagos_streets, "POLYGON")

# mapview::mapview(lagos_streets)

sf_p <- lagos_streets
sf_p <- st_as_sf(sf_p)

#

library(clhs)
sf_use_s2(FALSE)
sf_p <- st_sample(sf_p, size=nrow(observed_f), type="random")
sf_p <- st_cast(st_sfc(sf_p), "POINT", group_or_split = T)
sf_p_df <- as.data.frame(st_coordinates(sf_p))
# sf_p_i <- clhs(sf_p_df, size = round(nrow(sf_p_df)*0.05, 0), progress = TRUE)
# sf_p <- sf_p[sf_p_i]
# sf_p_df <- as.data.frame(st_coordinates(sf_p))
sf_p <- sf_p %>% st_transform(3395) %>% st_buffer(10) %>% st_transform(4326)
sf_p <- bind_cols(sf_p_df, sf_p)
sf_p <- st_as_sf(sf_p)

gc()

cc <- st_within(st_as_sf(sf_p) %>% st_transform(4326), st_as_sf(mm))

sf_p <- sf_p[which(as.numeric(cc)==1),]

####

observed_f <- as.data.frame(st_coordinates(observed_f))
random_f <- as.data.frame(st_coordinates(sf_p))

random_f <- filter(random_f, X>=min(observed_f$X) & X<=max(observed_f$X), Y>=min(observed_f$Y) & Y<=max(observed_f$Y))
random_f <- sample_n(random_f, nrow(observed_f))

a <- ggplot()+
  theme_classic()+
  geom_hex(data=observed_f, aes(x=X, y=Y))+
  scale_fill_distiller(palette = "Reds", limits=c(0, 1000), oob = scales::squish)+
  ggtitle("Training data (Treepedia)")

b <- ggplot()+
  theme_classic()+
  geom_hex(data=random_f, aes(x=X, y=Y))+
  scale_fill_distiller(palette = "Reds", limits=c(0, 1000), oob = scales::squish)+
  ggtitle("Randomly sampled points along streets")


r <- raster(st_as_sf(random_f, coords=c("X", "Y"), crs=4326), res = 0.00833333, vals=0)
r2 <- stars::st_as_stars(r)
r2 <- st_as_sf(r2)
r2$pt_count <- lengths(st_intersects(r2, st_as_sf(observed_f, coords=c("X", "Y"), crs=4326)))

r <- raster(st_as_sf(random_f, coords=c("X", "Y"), crs=4326), res = 0.00833333, vals=0)
r3 <- stars::st_as_stars(r)
r3 <- st_as_sf(r3)
r3$pt_count <- lengths(st_intersects(r3, st_as_sf(random_f, coords=c("X", "Y"), crs=4326)))

r2$geometry <- NULL
r3$geometry <- NULL

library(patchwork)

(a + b) + plot_layout(guides="collect") + plot_annotation(title  = paste0("Point density spatial correlation at 1 km aggregation = ", round(cor(r2$pt_count, r3$pt_count, use="complete.obs"), 2)))

ggsave(paste0(citiess2[i], "_randomness.png"), width = 8, height = 5, scale=1.2)

}

