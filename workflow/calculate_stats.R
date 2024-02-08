# calculate statistics

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

load("data/validation/after_points.Rdata")

setwd("data/validation/")

sf <- read_sf("GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

grr <- out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T))
grr <- grr %>% group_by(city) %>% dplyr::mutate(out_b_diff = out_b[2]-out_b[1])
grr <- grr %>% filter(year==2022)

grr <- merge(grr, sf_c, by.x="city", by.y="UC_NM_MN")
grr <- st_as_sf(grr)
grr <- st_transform(grr, "ESRI:54009")
grr$geom <- NULL

####

out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(year) %>%   dplyr::summarise(out_b = mean(out_b, na.rm=T))


#

# greenest and least green cities
View(grr %>% group_by(GRGN_L1) %>% arrange(desc(out_b)) %>% slice(1))

View(grr %>% group_by(GRGN_L1) %>% arrange(out_b) %>% slice(1))


#

out_ndvi_m %>% filter(year==2022) %>%  group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% arrange(desc(out_b))

out_ndvi_m %>% filter(year==2022) %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(median = median(out_b, na.rm=T), min = min(out_b, na.rm=T), max = max(out_b, na.rm=T))

#########

grr %>% filter(year==2022) %>%  group_by(city, GRGN_L2) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L2) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% arrange(desc(out_b))

#########

# out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% summarise(t.test(.$out_b[.$year==2022], .$out_b[.$year==2016])$estimate)

# out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% summarise(t.test(.$out_b[.$year==2022], .$out_b[.$year==2016])$p.value)


# absolute value decline in GVI
out_ndvi_m %>% filter(year==2022) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(median = median(out_b, na.rm=T)) - out_ndvi_m %>% filter(year==2016) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(median = median(out_b, na.rm=T))

# percentage decline in GVI
((out_ndvi_m %>% filter(year==2022) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(mean = mean(out_b, na.rm=T)) / out_ndvi_m %>% filter(year==2016) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(mean = mean(out_b, na.rm=T))) - 1) * 100

###############################

out_ndvi_mm <- merge(out_ndvi_m, sf_c, by.x="city", by.y="UC_NM_MN")

# absolute value decline in GVI
reg_2022 <- out_ndvi_mm %>% filter(year==2022) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>%  dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2016 <- out_ndvi_mm %>% filter(year==2016) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>% dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2022$delta <- reg_2022$median - reg_2016$median

reg_2022

# percentage decline in GVI
reg_2022 <- out_ndvi_mm %>% filter(year==2022) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>%  dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2016 <- out_ndvi_mm %>% filter(year==2016) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>% dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2022$delta <- ((reg_2022$median / reg_2016$median) - 1)*100

reg_2022

