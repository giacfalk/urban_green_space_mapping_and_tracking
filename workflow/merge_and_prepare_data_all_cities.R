

##############################################################################

# This Rscript: 

#   1) Read training data from MIT Treepedia and merge all cities
#   2) Split into chunks for upload to Google Earth Engine
#   3) Create some descriptive plots

##############################################################################


rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

library(rgee)
library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)

# read raw data files

ls <- list.files(pattern="\\.json", path="data/validation", full.names = T)[-c(8, 25, 27)]
ls2 <- lapply(ls, read_sf)

for (i in 2:length(ls2)){
  
  colnames(ls2[[i]]) <- colnames(ls2[[1]])
  
}

for (i in 1:length(ls2)){
  
  ls2[[i]]$city <- gsub(".json", "", ls[i])
  
}

# bind them together and write to a single shapefile

ls2 <- bind_rows(ls2)

write_sf(ls2, "data/validation/all_cities_green_index.shp")

##########################

sf <- split(sf, ceiling(seq(nrow(sf))/50000))

for (i in 1:length(sf)){
  print(i)
  sf[[i]] <- sf[[i]] %>% st_transform(3395) %>% st_buffer(10) %>% st_transform(4326) %>% ungroup()
  write_sf(sf[[i]], paste0("data/validation/gee_data/gv_all_", i, ".shp"))
}

###########################

sf <- read_sf("data/validation/all_cities_green_index.shp")

library(lattice)
h<-histogram(as.numeric(substr(sf$panoDate, 1, 4)), xlab="Google Street View aquisition year",
             ylab="Relative frequency",col="darkred")

png("hist_y_distr.png", width = 1000, height = 1000, res=200)
h
dev.off()

# descriptive plot for SI

sf_d <- sf

sf_d$city <- gsub("green_index", "", sf_d$city)
sf_d$city <- gsub("green_view", "", sf_d$city)
sf_d$city <- gsub("greenview", "", sf_d$city)
sf_d$city <- gsub("_", "", sf_d$city)

sf_d$city[sf_d$city=="la"] <- "Los Angeles"
sf_d$city[sf_d$city=="capetown"] <- "Cape Town"
sf_d$city[sf_d$city=="london"] <- "London"
sf_d$city[sf_d$city=="nyc"] <- "New York"
sf_d$city[sf_d$city=="saopaolo"] <- "Sao Paolo"
sf_d$city[sf_d$city=="montreal"] <- "Montreal"
sf_d$city[sf_d$city=="tampa"] <- "Tampa"
sf_d$city[sf_d$city=="ams"] <- "Amsterdam"
sf_d$city[sf_d$city=="oslo"] <- "Oslo"
sf_d$city[sf_d$city=="johanburg"] <- "Johannesburg"
sf_d$city[sf_d$city=="telaviv"] <- "Tel Aviv"
sf_d$city[sf_d$city=="toronto"] <- "Toronto"
sf_d$city[sf_d$city=="cambridge"] <- "Cambridge"
sf_d$city[sf_d$city=="sydney"] <- "Sydney"
sf_d$city[sf_d$city=="quito"] <- "Quito"
sf_d$city[sf_d$city=="miami"] <- "Miai"
sf_d$city[sf_d$city=="sacramento"] <- "Sacramento"
sf_d$city[sf_d$city=="dunban"] <- "Durban"
sf_d$city[sf_d$city=="vancouver"] <- "Vancouver"
sf_d$city[sf_d$city=="paris"] <- "Paris"
sf_d$city[sf_d$city=="turin"] <- "Turin"
sf_d$city[sf_d$city=="geneva"] <- "Geneva"
sf_d$city[sf_d$city=="singapore"] <- "Singapore"
sf_d$city[sf_d$city=="frankfurt"] <- "Frankfurt"

ggplot(sf_d)+
  theme_classic()+
  gg.layers::geom_boxplot2(aes(x=reorder(city, -GreenView, FUN = median), y=GreenView), fill="orange")+
  xlab("City")+
  ylab("GVI distribution")+
  theme(legend.position = "none", axis.text.x = element_text(angle = 45, hjust=1))

ggsave("data/validation/gvi_descr.png", scale=1.1)

########
########

sf$x <- as.numeric(st_coordinates(sf$geometry)[,1])
sf$y <- as.numeric(st_coordinates(sf$geometry)[,2])

# map for figure 1

grr <- sf %>% group_by(city) %>% slice_sample(n=1) %>% ungroup() %>%  st_transform("ESRI:54009")
grr2 <- sf %>% st_set_geometry(NULL) %>%  group_by(city) %>% dplyr::summarise(GreenView=mean(GreenView, na.rm=T))
grr$GreenView <- grr2$GreenView

library(rasterVis)
require(rgdal)
require(maptools)
library(ggthemes)
library(ggrepel)

data(wrld_simpl)
wrld_simpl_sf <- st_as_sf(wrld_simpl)
wrld_simpl_sf <- st_transform(wrld_simpl_sf, "ESRI:54009")

load(url("https://github.com/valentinitnelav/RandomScripts/blob/master/NaturalEarth.RData?raw=true"))

PROJ <- "+proj=eck4 +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs" 
NE_graticules.prj <- spTransform(NE_graticules, CRSobj = PROJ)

ggplot()+
  theme_classic()+
  geom_sf(data=wrld_simpl_sf, fill="lightgrey", colour="black", lwd=0.25)+
  geom_sf(data=grr, fill=NA, colour="black", lwd=0.75, size=1.5)+
  stat_sf_coordinates(data=st_centroid(grr), colour="forestgreen", size=2.5)+
  scale_colour_viridis_c(name="GVI in 2022")+
  theme(legend.position = "bottom", legend.direction = "horizontal",  plot.margin = unit(c(t=0, r=2, b=0, l=0), unit="cm"))+
  xlab("")+
  ylab("")

ggsave("map_gvi_cities.png", scale=3.5, height = 3, width = 3)

