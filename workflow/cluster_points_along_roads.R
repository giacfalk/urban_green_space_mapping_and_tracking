library(raster)
library(sf)
library(tidyverse)
library(sf)
library(pbapply)
library(osmdata)
library(mapview)

load("data/validation/after_points_030624.Rdata")

sf <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

out_ndvi_m$city <- sf_c$UC_NM_MN[as.numeric((sapply(strsplit(out_ndvi_m$id,"_"), `[`, 1)))]

#----------------------------------------

out_ndvi_m_s <- split(out_ndvi_m, out_ndvi_m$city)

for (i in 1:length(out_ndvi_m_s)){
  tryCatch({
  print(i)
  
sf_orig <- out_ndvi_m_s[[i]] %>% group_by(x, y) %>% mutate(id= cur_group_id())

sf <- out_ndvi_m_s[[i]] %>% group_by(x, y) %>% mutate(id= cur_group_id()) %>% ungroup() %>% group_by(city, x, y, id) %>%  dplyr::summarise(out_b = mean(out_b, na.rm=T)) %>% ungroup() %>%  st_as_sf(coords=c("x", "y"), crs=4326) %>% st_transform(3395) %>% st_centroid() %>% st_cast("POINT") %>% st_as_sf()  %>% mutate(as_tibble(st_coordinates(.)))

km <- kmeans(sf |>
               st_drop_geometry() |>
               dplyr::select(X, Y), 
             centers = round(nrow(sf)/20, 0))

sf$cluster <- km$cluster

sf_orig <- merge(sf_orig, sf %>% dplyr::select(id, cluster), "id")

sf_orig <- sf_orig %>% group_by(city, cluster) %>% dplyr::summarise(out_b_min=min(out_b, na.rm=T), out_b_max=max(out_b, na.rm=T), out_b = mean(out_b, na.rm=T))

# ggplot(sf) +
# geom_sf(aes(colour = cluster)) +
# labs(fill = "Group")+
#   scale_colour_distiller(palette = "Set1")+
#   theme(legend.position = "none")+
#   labs(caption="Although colours are repeated due to palette limitations, points within each cluster are contiguous")
# 
# ggsave("clusters.png", height=5, width = 5, scale=1.2)

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


