###############

youremail = "giacomo.falchetta@gmail.com" # GEE-enabled email address

# predict for another city
# samplepoints within FUA city boundary

## extraction being done on js GEE

library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)
library(rnaturalearthdata)

#################

# download the data from GEE drive

setwd("workflow/data_cities")

get_countries <-  function(long, lat)
{ 
  points <- cbind(long, lat)
  countriesSP <- rworldmap::getMap(resolution = 'low')
  pointsSP = sp::SpatialPoints(points, sp::CRS(sp::proj4string(countriesSP)))  
  sp::over(pointsSP, countriesSP)$ADMIN
}

library(googledrive)
googledrive::drive_auth(email=youremail)
gvs <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'", n_max = 5000, orderBy = "recency desc")
gvs <- gvs[!grepl("lc", gvs$name),]
gvs <- gvs[!grepl("era", gvs$name),]
gvs <- gvs[!grepl("pop", gvs$name),]
gvs$local_path <- NA
gvs <- arrange(gvs, desc(name))

for (i in 1:nrow(gvs)){
  gvs[i,] <- drive_download(gvs[i,], overwrite = T)
}

gvs <- lapply(gvs$local_path, read.csv)

gvsnames <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'", n_max = 5000, orderBy = "recency desc")
gvsnames <- gvsnames[!grepl("lc", gvsnames$name),]
gvsnames <- gvsnames[!grepl("era", gvsnames$name),]
gvsnames <- gvsnames[!grepl("pop", gvsnames$name),]

gvsnames <- ifelse(grepl("2022", gvsnames$name), "2022", "2016")

###

gvs2 <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'AND name contains 'lc'", n_max = 5000, orderBy = "recency desc")
gvs2$local_path <- NA
gvs2 <- arrange(gvs2, desc(name))

for (i in 1:nrow(gvs2)){
  gvs2[i,] <- drive_download(gvs2[i,], overwrite = T)
}

gvs2 <- lapply(gvs2$local_path, read.csv)

gvs2names <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'AND name contains 'lc'", n_max = 5000, orderBy = "recency desc")
gvs2names <- ifelse(grepl("2022", gvs2names$name), "2022", "2016")

###

gvs3 <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'AND name contains 'points_pop'", n_max = 5000, orderBy = "recency desc")
gvs3$local_path <- NA

for (i in 1:nrow(gvs3)){
  gvs3[i,] <- drive_download(gvs3[i,], overwrite = T)
}

gvs3 <- lapply(gvs3$local_path, read.csv)

###

gvs4 <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'AND name contains 'points_era'", n_max = 5000, orderBy = "recency desc")
gvs4$local_path <- NA

for (i in 1:nrow(gvs4)){
  gvs4[i,] <- drive_download(gvs4[i,], overwrite = T)
}

gvs4 <- lapply(gvs4$local_path, read.csv)

gvs4names <- drive_find(q="name contains 'cities_sampled' AND name contains 'csv'AND name contains 'points_era'", n_max = 5000, orderBy = "recency desc")
gvs4names <- ifelse(grepl("2022", gvs4names$name), "2022", "2016")

###

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs[which(gvsnames=="2022")])
gvs_b[[2]] <- bind_rows(gvs[which(gvsnames=="2016")])
gvs <- gvs_b
rm(gvs_b)

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs2[which(gvs2names=="2022")])
gvs_b[[2]] <- bind_rows(gvs2[which(gvs2names=="2016")])
gvs2 <- gvs_b
rm(gvs_b)

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs3)
gvs_b[[2]] <- bind_rows(gvs3)
gvs3 <- gvs_b
rm(gvs_b)

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs4[which(gvs4names=="2022")])
gvs_b[[2]] <- bind_rows(gvs4[which(gvs4names=="2016")])
gvs4 <- gvs_b
rm(gvs_b)

###

gvs[[2]]$year <- 2016
gvs[[1]]$year <- 2022

# save.image("bk_while_processing.Rdata")

load("bk_while_processing.Rdata")

for (i in 1:2){
  gvs[[i]]$system.index <- sub("\\_.*", "", gvs[[i]]$system.index)
  gvs[[i]]$system.index <- as.numeric(gvs[[i]]$system.index) + 1
  colnames(gvs[[i]])[18:19] <- c("x", "y")
  gvs[[i]]$.geo <- NULL
  gvs[[i]] <- pivot_wider(gvs[[i]], names_from = 1 , values_from = c(2:17, 21), names_glue = "{.value}_{system.index}", values_fn = mean)
  gvs[[i]]$merger <- as.character(paste0(gvs[[i]]$x, gvs[[i]]$y))
  
}

gvs2[[2]]$year <- 2016
gvs2[[1]]$year <- 2022

for (i in 1:2){
  gvs2[[i]]$system.index <- sub("\\_.*", "", gvs2[[i]]$system.index)
  gvs2[[i]]$system.index <- as.numeric(gvs2[[i]]$system.index) + 1
  gvs2[[i]]$.geo <- NULL
  gvs2[[i]]$merger <- as.character(paste0(gvs2[[i]]$X, gvs2[[i]]$Y))
  gvs2[[i]] <- dplyr::select(gvs2[[i]], 4:8, 11:14, 16, 17)
}


gvs3[[2]]$year <- 2016
gvs3[[1]]$year <- 2022

for (i in 1:2){
  gvs3[[i]]$system.index <- sub("\\_.*", "", gvs3[[i]]$system.index)
  gvs3[[i]]$system.index <- as.numeric(gvs3[[i]]$system.index) + 1
  gvs3[[i]]$.geo <- NULL
  gvs3[[i]]$merger <- as.character(paste0(gvs3[[i]]$X, gvs3[[i]]$Y))
  gvs3[[i]] <- dplyr::select(gvs3[[i]], median, merger, year)
  colnames(gvs3[[i]])[1] <- "population"
}

gvs4[[2]]$year <- 2016
gvs4[[1]]$year <- 2022

for (i in 1:2){
  gvs4[[i]]$system.index <- sub("\\_.*", "", gvs4[[i]]$system.index)
  gvs4[[i]]$system.index <- as.numeric(substr(gvs4[[i]]$system.index, 5, 6))
  colnames(gvs4[[i]])[2:3] <- c("x", "y")
  gvs4[[i]]$.geo <- NULL
  gvs4[[i]] <- pivot_wider(gvs4[[i]], names_from = 1 , values_from = c(5:9), names_glue = "{.value}_{system.index}", values_fn = mean)
  gvs4[[i]]$merger <- as.character(paste0(gvs4[[i]]$x, gvs4[[i]]$y))
  gvs4[[i]] <- dplyr::select(gvs4[[i]], -x, -y, -city)
  
}

#

library(data.table)
library(nngeo)
library(countrycode)

for (i in 1:2){
  gvs[[i]] <- merge(gvs[[i]], gvs2[[i]], by=c("merger", "year"))
  gvs[[i]] <- merge(gvs[[i]], gvs3[[i]], by=c("merger", "year"))
  gvs[[i]] <- merge(gvs[[i]], gvs4[[i]], by=c("merger", "year"))
  
  gvs[[i]]$country <- as.character(get_countries(gvs[[i]]$x, gvs[[i]]$y))
  gvs[[i]]$country <- countrycode(gvs[[i]]$country, 'country.name', 'iso2c')
  gdp <- wbstats::wb_data(indicator = "NY.GDP.PCAP.PP.CD", mrnev=1)
  gdp <- dplyr::select(gdp, iso2c, NY.GDP.PCAP.PP.CD)
  colnames(gdp)[2] <- "gdp_capita"
  gvs[[i]] <- merge(gvs[[i]], gdp, by.x="country", by.y="iso2c")
  
  ###
  
  colnames(gvs[[i]]) <- gsub("temperature_2m", "mean_2m_air_temperature", colnames( gvs[[i]]))
  
  colnames(gvs[[i]]) <- gsub("total_precipitation_sum", "total_precipitation", colnames( gvs[[i]]))
  
}


###

vars<-c("trees","bare","water","grass","population")

for (i in 1:2){
  print(i)
  cart2polar <- function(x, y) {
    data.frame(r = sqrt(x^2 + y^2), theta = atan2(y, x))
  }
  
  
  hep<-cart2polar(gvs[[i]]$x,gvs[[i]]$y)
  gvs[[i]]<-cbind(gvs[[i]],hep)
  
  x = data.frame(
    lon = gvs[[i]]$x,
    lat = gvs[[i]]$y
  )
  
  x = sf::st_as_sf(x, coords = c("lon", "lat"), crs = 4326)
  x = st_transform(x, 3395)
  result1 <-st_nn(x, x, k = 10,maxdist=5000, progress = T)
  x = st_transform(x, 4326)
  
  library(pbapply)
  
  for (vv in vars){
  print(vv)
  vvv<-unlist(pblapply(result1,function(x){
    nn<-x[-1]
    median(gvs[[i]][nn,vv], na.rm=T)
  }))
  
  gvs[[i]] <- bind_cols(gvs[[i]], vvv)
  
  }
  
}

colnames( gvs[[1]])[285:289] <- c("medTrees","medBare","medWater","medGrass","medPop")
colnames( gvs[[2]])[285:289] <- c("medTrees","medBare","medWater","medGrass","medPop")

library(gdata)

gdata::keep(gvs, gvs2, gvs3, gvs4, gvs2names, gvs4names, gvsnames, get_countries, sure=T)

save.image("data/validation/after_points_step1.Rdata")

load("data/validation/after_points_step1.Rdata")


#########

library(h2o)
h2o.init()
saved_model <- h2o.loadModel("h2ofilesgreen/xgbLog5hNNrmseHubFinalALL")

out_ndvi_m <- list()

for (i in 1:2){
  
  pr_2016 <- h2o::h2o.predict(saved_model,  as.h2o( gvs[[i]][complete.cases( gvs[[i]]),]))

  out_ndvi_m[[i]] <- exp(as.data.frame(pr_2016)$predict)

  gvs[[i]] <- na.omit(gvs[[i]])
  
  gvs[[i]]$out_b <- out_ndvi_m[[i]]

}

out_ndvi_m <- gvs
out_ndvi_m <- bind_rows(out_ndvi_m)

########################

rm(list=setdiff(ls(), c("gvs","out_ndvi_m")))

save.image("data/validation/after_points.Rdata")
