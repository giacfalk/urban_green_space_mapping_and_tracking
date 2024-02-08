library(raster)
library(sf)
library(tidyverse)
library(sf)
library(pbapply)
library(osmdata)
library(mapview)

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")

load("data/validation/after_points.Rdata")
out_ndvi_m <- filter(out_ndvi_m, year==2022)
out_ndvi_m <- split(out_ndvi_m, out_ndvi_m$city)

for (i in 1:length(out_ndvi_m)){
  tryCatch({
  print(i)
  
sf_orig <- out_ndvi_m[[i]]
  
sf <- out_ndvi_m[[i]] %>% st_as_sf(coords=c("x", "y"), crs=4326) %>% st_transform(3395) %>% st_centroid() %>% st_cast("POINT") %>% st_as_sf()  %>% mutate(as_tibble(st_coordinates(.)))

km <- kmeans(sf |>
               st_drop_geometry() |>
               dplyr::select(X, Y), 
             centers = round(nrow(sf)/20, 0))

sf$cluster <- km$cluster
sf_orig$cluster <- km$cluster

sf_orig <- sf_orig %>% group_by(city, cluster) %>% dplyr::summarise(out_b_min=min(out_b, na.rm=T), out_b_max=max(out_b, na.rm=T), out_b = mean(out_b, na.rm=T))

ggplot(sf) +
geom_sf(aes(colour = as.factor(cluster))) +
labs(fill = "Group")+
  theme(legend.position = "none")

ggsave("clusters.png", height=5, width = 5, scale=1.2)

sf <- arrange(sf, cluster)

s <- data.frame(cluster=unique(sf$cluster), geometry=NA)

for (kk in unique(sf$cluster)){
  sf_c <- filter(sf, cluster==kk) %>% dplyr::summarise(geometry = st_union(geometry)) %>%
    st_cast("POLYGON") %>% 
    st_convex_hull() %>% 
    st_transform(3395)
    
    s[kk,]$geometry = sf_c$geometry
    
  }

s <- st_as_sf(s, crs=3395) %>% st_transform(4326)

sf <- st_transform(s, 4326)

sf <- st_as_sf(sf)

sf$out_b = sf_orig$out_b
sf$out_b_min = sf_orig$out_b_min
sf$out_b_max = sf_orig$out_b_max
sf$city = sf_orig$city

write_sf(sf, paste0("clusters_", i, ".gpkg"))

  }, error=function(e){})
}

# mapview(s, legend=F) + mapview(sf["cluster"], legend=F)


