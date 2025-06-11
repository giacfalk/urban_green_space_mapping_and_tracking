
##############################################################################

# This Rscript: 

#   1) Use trained model and prediction data to make predictions in the sampled points

##############################################################################

rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

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
library(data.table)
library(pbapply)

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


###

gvs <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled", full.names = T))
gvs$id <- 1:nrow(gvs)
gvs <- gvs[!grepl("lc", gvs$name),]
gvs <- gvs[!grepl("era", gvs$name),]
gvs <- gvs[!grepl("pop", gvs$name),]
gvs <- arrange(gvs, desc(name))

gvs <- pblapply(gvs$name, fread)

gvsnames <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled"))
gvsnames <- gvsnames[!grepl("lc", gvsnames$name),]
gvsnames <- gvsnames[!grepl("era", gvsnames)]
gvsnames <- gvsnames[!grepl("pop", gvsnames)]

gvsnames <- ifelse(grepl("2023", gvsnames), "2023", ifelse(grepl("2022", gvsnames), "2022", ifelse(grepl("2021", gvsnames), "2021", ifelse(grepl("2020", gvsnames), "2020", ifelse(grepl("2019", gvsnames), "2019", ifelse(grepl("2018", gvsnames), "2018", ifelse(grepl("2017", gvsnames), "2017", "2016")))))))

###

gvs2 <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled_new", full.names = T))
gvs2$id <- 1:nrow(gvs2)
gvs2 <- gvs2[grepl("lc", gvs2$name),]

gvs2 <- arrange(gvs2, desc(name))

gvs2 <- pblapply(gvs2$name, fread)

gvs2names <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled_new", full.names = T))
gvs2names <- gvs2names[grepl("lc", gvs2names$name),]

gvs2names <- ifelse(grepl("2023", gvs2names), "2023", ifelse(grepl("2022", gvs2names), "2022", ifelse(grepl("2021", gvs2names), "2021", ifelse(grepl("2020", gvs2names), "2020", ifelse(grepl("2019", gvs2names), "2019", ifelse(grepl("2018", gvs2names), "2018", ifelse(grepl("2017", gvs2names), "2017", "2016")))))))

###

gvs3 <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled", full.names = T))
gvs3$id <- 1:nrow(gvs3)
gvs3 <- gvs3[grepl("pop", gvs3$name),]

gvs3 <- arrange(gvs3, desc(name))

gvs3 <- pblapply(gvs3$name, fread)

###

gvs4 <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled", full.names = T))
gvs4$id <- 1:nrow(gvs4)
gvs4 <- gvs4[grepl("era", gvs4$name),]

gvs4 <- arrange(gvs4, desc(name))

gvs4 <- pblapply(gvs4$name, fread)

gvs4names <- data.frame(name=list.files(path="G:/Il mio Drive", pattern = "cities_sampled", full.names = T))
gvs4names <- gvs4names[grepl("era", gvs4names$name),]

gvs4names <- ifelse(grepl("2023", gvs4names), "2023", ifelse(grepl("2022", gvs4names), "2022", ifelse(grepl("2021", gvs4names), "2021", ifelse(grepl("2020", gvs4names), "2020", ifelse(grepl("2019", gvs4names), "2019", ifelse(grepl("2018", gvs4names), "2018", ifelse(grepl("2017", gvs4names), "2017", "2016")))))))

###

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs[which(gvsnames=="2023")])
gvs_b[[2]] <- bind_rows(gvs[which(gvsnames=="2022")])
gvs_b[[3]] <- bind_rows(gvs[which(gvsnames=="2021")])
gvs_b[[4]] <- bind_rows(gvs[which(gvsnames=="2020")])
gvs_b[[5]] <- bind_rows(gvs[which(gvsnames=="2019")])
gvs_b[[6]] <- bind_rows(gvs[which(gvsnames=="2018")])
gvs_b[[7]] <- bind_rows(gvs[which(gvsnames=="2017")])
gvs_b[[8]] <- bind_rows(gvs[which(gvsnames=="2016")])
gvs <- gvs_b
rm(gvs_b)

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs2[which(gvs2names=="2023")])
gvs_b[[2]] <- bind_rows(gvs2[which(gvs2names=="2022")])
gvs_b[[3]] <- bind_rows(gvs2[which(gvs2names=="2021")])
gvs_b[[4]] <- bind_rows(gvs2[which(gvs2names=="2020")])
gvs_b[[5]] <- bind_rows(gvs2[which(gvs2names=="2019")])
gvs_b[[6]] <- bind_rows(gvs2[which(gvs2names=="2018")])
gvs_b[[7]] <- bind_rows(gvs2[which(gvs2names=="2017")])
gvs_b[[8]] <- bind_rows(gvs2[which(gvs2names=="2016")])
gvs2 <- gvs_b
rm(gvs_b)

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs3)
gvs_b[[2]] <- bind_rows(gvs3)
gvs_b[[3]] <- bind_rows(gvs3)
gvs_b[[4]] <- bind_rows(gvs3)
gvs_b[[5]] <- bind_rows(gvs3)
gvs_b[[6]] <- bind_rows(gvs3)
gvs_b[[7]] <- bind_rows(gvs3)
gvs_b[[8]] <- bind_rows(gvs3)
gvs3 <- gvs_b
rm(gvs_b)

gvs_b <- list()
gvs_b[[1]] <- bind_rows(gvs4[which(gvs4names=="2023")])
gvs_b[[2]] <- bind_rows(gvs4[which(gvs4names=="2022")])
gvs_b[[3]] <- bind_rows(gvs4[which(gvs4names=="2021")])
gvs_b[[4]] <- bind_rows(gvs4[which(gvs4names=="2020")])
gvs_b[[5]] <- bind_rows(gvs4[which(gvs4names=="2019")])
gvs_b[[6]] <- bind_rows(gvs4[which(gvs4names=="2018")])
gvs_b[[7]] <- bind_rows(gvs4[which(gvs4names=="2017")])
gvs_b[[8]] <- bind_rows(gvs4[which(gvs4names=="2016")])
gvs4 <- gvs_b
rm(gvs_b)

###

  gvs[[8]]$year <- 2016
  gvs[[7]]$year <- 2017
  gvs[[6]]$year <- 2018
  gvs[[5]]$year <- 2019
  gvs[[4]]$year <- 2020
  gvs[[3]]$year <- 2021
  gvs[[2]]$year <- 2022
  gvs[[1]]$year <- 2023
  
  for (i in 1:8){
    gvs[[i]]$`system:index` <- sub("\\_.*", "", gvs[[i]]$`system:index`)
    gvs[[i]]$`system:index` <- as.numeric(gvs[[i]]$`system:index`) + 1
    colnames(gvs[[i]])[21:22] <- c("x", "y")
    gvs[[i]]$.geo <- NULL
    gvs[[i]] <- pivot_wider(gvs[[i]], names_from = 1 , values_from = c(2:20, 24), names_glue = "{.value}_{`system:index`}", values_fn = mean)
    gvs[[i]]$merger <- as.character(paste0(gvs[[i]]$x, gvs[[i]]$y))
    
  }
  
  gvs2[[8]]$year <- 2016
  gvs2[[7]]$year <- 2017
  gvs2[[6]]$year <- 2018
  gvs2[[5]]$year <- 2019
  gvs2[[4]]$year <- 2020
  gvs2[[3]]$year <- 2021
  gvs2[[2]]$year <- 2022
  gvs2[[1]]$year <- 2023
  
  for (i in 1:8){
    gvs2[[i]]$`system:index` <- sub("\\_.*", "", gvs2[[i]]$`system:index`)
    gvs2[[i]]$`system:index` <- as.numeric(gvs2[[i]]$`system:index`) + 1
    gvs2[[i]]$.geo <- NULL
    gvs2[[i]]$merger <- as.character(paste0(gvs2[[i]]$X, gvs2[[i]]$Y))
    gvs2[[i]] <- dplyr::select(gvs2[[i]], 4:9, 11:14, 15, 16)
  }
  
  
  gvs3[[8]]$year <- 2016
  gvs3[[7]]$year <- 2017
  gvs3[[6]]$year <- 2018
  gvs3[[5]]$year <- 2019
  gvs3[[4]]$year <- 2020
  gvs3[[3]]$year <- 2021
  gvs3[[2]]$year <- 2022
  gvs3[[1]]$year <- 2023
  
  for (i in 1:8){
    gvs3[[i]]$`system:index` <- sub("\\_.*", "", gvs3[[i]]$`system:index`)
    gvs3[[i]]$`system:index` <- as.numeric(gvs3[[i]]$`system:index`) + 1
    gvs3[[i]]$.geo <- NULL
    gvs3[[i]]$merger <- as.character(paste0(gvs3[[i]]$X, gvs3[[i]]$Y))
    gvs3[[i]] <- dplyr::select(gvs3[[i]], median, merger, year)
    colnames(gvs3[[i]])[1] <- "population"
  }
  
  gvs4[[8]]$year <- 2016
  gvs4[[7]]$year <- 2017
  gvs4[[6]]$year <- 2018
  gvs4[[5]]$year <- 2019
  gvs4[[4]]$year <- 2020
  gvs4[[3]]$year <- 2021
  gvs4[[2]]$year <- 2022
  gvs4[[1]]$year <- 2023
  
  for (i in 1:8){
    gvs4[[i]]$`system:index` <- sub("\\_.*", "", gvs4[[i]]$`system:index`)
    gvs4[[i]]$`system:index` <- as.numeric(substr(gvs4[[i]]$`system:index`, 5, 6))
    colnames(gvs4[[i]])[2:3] <- c("x", "y")
    gvs4[[i]]$.geo <- NULL
    gvs4[[i]] <- pivot_wider(gvs4[[i]], names_from = 1 , values_from = c(5:9), names_glue = "{.value}_{`system:index`}", values_fn = mean)
    gvs4[[i]]$merger <- as.character(paste0(gvs4[[i]]$x, gvs4[[i]]$y))
    gvs4[[i]] <- dplyr::select(gvs4[[i]], -x, -y)
    
  }
  
  library(data.table)
  library(nngeo)
  library(countrycode)

for (i in 1:8){
  
  gvs[[i]] <- arrange(gvs[[i]], merger, year)
  gvs2[[i]] <- gvs2[[i]] %>% filter(merger %in% unique(gvs[[i]]$merger)) %>% arrange(merger, year) %>% dplyr::select(-merger, -year, -id) 
  gvs3[[i]] <- gvs3[[i]] %>% filter(merger %in% unique(gvs[[i]]$merger)) %>% arrange(merger, year) %>% dplyr::select(-merger, -year)
  gvs4[[i]] <- gvs4[[i]] %>% filter(merger %in% unique(gvs[[i]]$merger)) %>% arrange(merger, year) %>% dplyr::select(-merger, -year, -id)
  
  gvs[[i]] <- bind_cols(gvs[[i]], gvs2[[i]], gvs3[[i]], gvs4[[i]])
  
  gvs[[i]] <-  gvs[[i]] %>% drop_na(x,y)
  
  gvs[[i]] <- st_as_sf(gvs[[i]], coords=c("x", "y"), crs=3395)
  gvs[[i]] <- st_transform(gvs[[i]], 4326)
  
  cs <- st_coordinates( gvs[[i]])
  cs <- as.data.frame(cs)
  
  gvs[[i]]$x <- cs$X  
  gvs[[i]]$y <- cs$Y
  
  gvs[[i]]$geometry <- NULL
  
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

for (i in 1:8){
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

for (i in 1:8){
colnames( gvs[[i]])[320:324] <- c("medTrees","medBare","medWater","medGrass","medPop")
}

library(gdata)

gdata::keep(gvs, gvs2, gvs3, gvs4, gvs2names, gvs4names, gvsnames, get_countries, sure=T)

save.image("after_points_step1_100425.Rdata")

load("after_points_step1_100425.Rdata")

gvs[[1]]$merger <-  as.character(paste0(gvs[[1]]$x, gvs[[1]]$y))
gvs[[2]]$merger <-  as.character(paste0(gvs[[2]]$x, gvs[[2]]$y))
gvs[[3]]$merger <-  as.character(paste0(gvs[[3]]$x, gvs[[3]]$y))
gvs[[4]]$merger <-  as.character(paste0(gvs[[4]]$x, gvs[[4]]$y))
gvs[[5]]$merger <-  as.character(paste0(gvs[[5]]$x, gvs[[5]]$y))
gvs[[6]]$merger <-  as.character(paste0(gvs[[6]]$x, gvs[[6]]$y))
gvs[[7]]$merger <-  as.character(paste0(gvs[[7]]$x, gvs[[7]]$y))
gvs[[8]]$merger <-  as.character(paste0(gvs[[8]]$x, gvs[[8]]$y))

#########

library(h2o)
h2o.init(min_mem_size = "12g")

setwd("C:/Users/Utente/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")

saved_model <- h2o.loadModel("C:/Users/Utente/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/h2ofilesgreen/xgbLog5hNNrmseHubFinalALL")

out_ndvi_m <- list()

for (i in 7:8){
  print(i)
  pr_2016 <- h2o::h2o.predict(saved_model,  as.h2o( gvs[[i]]))

  out_ndvi_m[[i]] <- exp(as.data.frame(pr_2016)$predict)

  gvs[[i]]$out_b <- out_ndvi_m[[i]]

  gc()

}

h2o.shutdown(prompt = FALSE)
gc()

out_ndvi_m <- gvs
out_ndvi_m <- bind_rows(out_ndvi_m)

########################

rm(list=setdiff(ls(), c("gvs","out_ndvi_m")))

save.image("data/validation/after_points_100425.Rdata")

#######################

gg <- list()

for (i in 1:8){

  gg[[i]] <- dplyr::select(gvs[[i]],  1, 2, 3, 315:316, 325)

}

gg <- bind_rows(gg)

write_rds(gg, "data/validation/after_points_predict_100425.Rds")

