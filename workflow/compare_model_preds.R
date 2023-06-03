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

load("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/after_points.Rdata")

###

out_ndvi_m_old <- out_ndvi_m

load("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/after_points_new.Rdata")

summary(abs(out_ndvi_m_old$out_b - out_ndvi_m$out_b))
hist(out_ndvi_m_old$out_b - out_ndvi_m$out_b)

###
