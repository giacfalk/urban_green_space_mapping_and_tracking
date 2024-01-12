library(raster)
library(sf)
library(tidyverse)
library(sf)
library(pbapply)
library(osmdata)
library(mapview)

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")

sf <- read_rds(paste0("points_along_roads_", "1", ".Rdata")) %>% st_transform(3395) %>% st_centroid() %>% st_cast("POINT") %>% st_as_sf()  %>% mutate(as_tibble(st_coordinates(.)))

km <- kmeans(sf |>
               st_drop_geometry() |>
               select(X, Y), 
             centers = round(nrow(sf)/100, 0))

sf$cluster <- km$cluster

ggplot(sf) +
geom_sf(aes(colour = as.factor(cluster))) +
labs(fill = "Group")+
scale_fill_discrete()+
  theme(legend.position = "none")

ggsave("clusters.png", height=5, width = 5, scale=1.2)

sf <- arrange(sf, cluster)

s <- data.frame(cluster=unique(sf$cluster), geometry=NA)

for (i in unique(sf$cluster)){
  print(i)
  sf_c <- filter(sf, cluster==i) %>% dplyr::summarise(...3 = st_union(...3)) %>%
    st_cast("POLYGON") %>% 
    st_convex_hull() %>% 
    st_transform(3395)
    
    s[i,]$geometry = sf_c$...3

  }

s <- st_as_sf(s, crs=3395) %>% st_transform(4326)

sf <- st_transform(sf, 4326)

mapview(s, legend=F) + mapview(sf["cluster"], legend=F)


