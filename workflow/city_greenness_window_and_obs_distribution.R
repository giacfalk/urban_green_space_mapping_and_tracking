

##############################################################################

# This Rscript: 

#   1) Create some additional plots and descriptive statistics on the training data

##############################################################################

rm(list=ls()) 
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

load("data/validation/after_gee_multispectral_gee_170524.Rdata")

out_ndvi_m$month <- as.numeric(unlist(lapply(1:nrow(out_ndvi_m), function(i){strsplit(out_ndvi_m$panoDate[i], "-")}))[nchar(unlist(lapply(1:2, function(i){strsplit(out_ndvi_m$panoDate[i], "-")})))==2])

out_ndvi_m$begin <- NA
out_ndvi_m$begin[out_ndvi_m$city %in% unique(out_ndvi_m$city)[c(1,3,5,6,13,14,19,20,22, 8, 9, 10, 23)]] <- 4
out_ndvi_m$end <- NA
out_ndvi_m$end[out_ndvi_m$city %in% unique(out_ndvi_m$city)[c(1,3,5,6,13,14,19,20,22, 8, 9, 10, 23)]] <- 10

out_ndvi_m$begin[out_ndvi_m$city %in% unique(out_ndvi_m$city)[c(4, 7, 12, 18)]] <- 10
out_ndvi_m$end[out_ndvi_m$city %in% unique(out_ndvi_m$city)[c(4, 7, 12, 18)]] <- 4

out_ndvi_m$begin <- ifelse(is.na(out_ndvi_m$begin), 1, out_ndvi_m$begin)
out_ndvi_m$end <- ifelse(is.na(out_ndvi_m$end), 12, out_ndvi_m$end)

##


out_ndvi_m$city <- gsub("green_index", "", out_ndvi_m$city)
out_ndvi_m$city <- gsub("green_view", "", out_ndvi_m$city)
out_ndvi_m$city <- gsub("greenview", "", out_ndvi_m$city)
out_ndvi_m$city <- gsub("_", "", out_ndvi_m$city)

##

out_ndvi_m$city[out_ndvi_m$city=="la"] <- "Los Angeles"
out_ndvi_m$city[out_ndvi_m$city=="capetown"] <- "Cape Town"
out_ndvi_m$city[out_ndvi_m$city=="london"] <- "London"
out_ndvi_m$city[out_ndvi_m$city=="nyc"] <- "New York"
out_ndvi_m$city[out_ndvi_m$city=="saopaolo"] <- "Sao Paolo"
out_ndvi_m$city[out_ndvi_m$city=="montreal"] <- "Montreal"
out_ndvi_m$city[out_ndvi_m$city=="tampa"] <- "Tampa"
out_ndvi_m$city[out_ndvi_m$city=="ams"] <- "Amsterdam"
out_ndvi_m$city[out_ndvi_m$city=="oslo"] <- "Oslo"
out_ndvi_m$city[out_ndvi_m$city=="johanburg"] <- "Johannesburg"
out_ndvi_m$city[out_ndvi_m$city=="telaviv"] <- "Tel Aviv"
out_ndvi_m$city[out_ndvi_m$city=="toronto"] <- "Toronto"
out_ndvi_m$city[out_ndvi_m$city=="cambridge"] <- "Cambridge"
out_ndvi_m$city[out_ndvi_m$city=="sydney"] <- "Sydney"
out_ndvi_m$city[out_ndvi_m$city=="quito"] <- "Quito"
out_ndvi_m$city[out_ndvi_m$city=="miami"] <- "Miai"
out_ndvi_m$city[out_ndvi_m$city=="sacramento"] <- "Sacramento"
out_ndvi_m$city[out_ndvi_m$city=="dunban"] <- "Durban"
out_ndvi_m$city[out_ndvi_m$city=="vancouver"] <- "Vancouver"
out_ndvi_m$city[out_ndvi_m$city=="paris"] <- "Paris"
out_ndvi_m$city[out_ndvi_m$city=="turin"] <- "Turin"
out_ndvi_m$city[out_ndvi_m$city=="geneva"] <- "Geneva"
out_ndvi_m$city[out_ndvi_m$city=="singapore"] <- "Singapore"
out_ndvi_m$city[out_ndvi_m$city=="frankfurt"] <- "Frankfurt"

##

ggplot(out_ndvi_m)+
  theme_classic()+
  geom_histogram(aes(x=month, y = after_stat(count / sum(count))*100))+
  facet_wrap(vars(city))+
  geom_vline(aes(xintercept=begin, colour="Begin"))+
  geom_vline(aes(xintercept=end, colour="End"))+
  scale_x_continuous(breaks = c(3,6,9,12))+
  xlab("Month")+
  ylab("% of total observations")+
  scale_colour_manual(name="", values=c("lightgreen", "orange"))+
  ggtitle("Distribution of training data acquisition date, by city")

ggsave("monthly_distribution_training_data.png", height = 5, width = 5, scale=1.1)

###

library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)
library(rnaturalearthdata)

# setwd("data/validation/")

setwd("C:/Users/Utente/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data")

#### NB: consider stratified sampling by city to have balanced picture
set.seed(2022)

sf <- read_sf("validation/all_cities_green_index.shp")

sf_ams <- filter(sf, city=="greenview_ams")
sf_miami <- filter(sf, city=="greenview_miami")
sf_singapore <- filter(sf, city=="greenview_singapore")
sf_capetown <- filter(sf, city=="greenview_capetown")

###

st_coordinates(sf_ams[first(which(sf_ams$GreenView==summary(sf_ams$GreenView)[2])),])
st_coordinates(sf_ams[first(which(sf_ams$GreenView==summary(sf_ams$GreenView)[3])),])
st_coordinates(sf_ams[first(which(sf_ams$GreenView==summary(sf_ams$GreenView)[5])),])

summary(sf_ams$GreenView)[2]
summary(sf_ams$GreenView)[3]
summary(sf_ams$GreenView)[5]

st_coordinates(sf_miami[first(which(sf_miami$GreenView==summary(sf_miami$GreenView)[2])),])
st_coordinates(sf_miami[first(which(sf_miami$GreenView==summary(sf_miami$GreenView)[3])),])
st_coordinates(sf_miami[first(which(sf_miami$GreenView==summary(sf_miami$GreenView)[5])),])

summary(sf_miami$GreenView)[2]
summary(sf_miami$GreenView)[3]
summary(sf_miami$GreenView)[5]

st_coordinates(sf_singapore[which.min(abs((sf_singapore$GreenView - summary(sf_singapore$GreenView)[2]))),])
st_coordinates(sf_singapore[which.min(abs((sf_singapore$GreenView - summary(sf_singapore$GreenView)[3]))),])
st_coordinates(sf_singapore[which.min(abs((sf_singapore$GreenView - summary(sf_singapore$GreenView)[5]))),])

summary(sf_singapore$GreenView)[2]
summary(sf_singapore$GreenView)[3]
summary(sf_singapore$GreenView)[5]


st_coordinates(sf_capetown[which.min(abs((sf_capetown$GreenView - summary(sf_capetown$GreenView)[2]))),])
st_coordinates(sf_capetown[which.min(abs((sf_capetown$GreenView - summary(sf_capetown$GreenView)[3]))),])
st_coordinates(sf_capetown[which.min(abs((sf_capetown$GreenView - summary(sf_capetown$GreenView)[5]))),])

summary(sf_capetown$GreenView)[2]
summary(sf_capetown$GreenView)[3]
summary(sf_capetown$GreenView)[5]


