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


