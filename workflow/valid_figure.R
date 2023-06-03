library(sf)
library(tidyverse)
library(lubridate)
library(raster)
library(exactextractr)
library(rnaturalearthdata)
library(caret)
library(ggplot2)

setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/")

load("allRes.Rdata")
load("after_points_new.Rdata")

csv <- allData

# calculate MAPEs and MSEs

mape <- function(real,modeled){
  
  round(mean(abs((real - modeled)/real), na.rm=T), 2)
  
}


mse <- function(real,modeled){
  
  round(mean((real - modeled)^2, na.rm=T), 2)
  
}

library(scattermore)

csvtrain = csv %>% filter(dataset=="train")
csvtest = csv %>% filter(dataset=="test")

a <- ggplot(csvtrain)+
  geom_abline()+
  geom_scattermore(aes(x=preds, y = GreenView), alpha=0.25)+
  xlab("GVI, model estimate")+
  ylab("Labelled data")+
  annotate("text", x=10, y=75, label= paste0("r2 = ", round(cor(csvtrain$preds, csvtrain$GreenView)^2, 2)))+
  annotate("text", x=10, y=70, label= paste0("MSE = ", mse(csvtrain$preds, csvtrain$GreenView)))+
  ggtitle("Training set")+
  coord_cartesian(xlim=c(0, 75), ylim=c(0, 75))

b <- ggplot(csvtest)+
  geom_abline()+
  geom_scattermore(aes(x=preds, y = GreenView), alpha=0.25)+
  xlab("GVI, model estimate")+
  ylab("Labelled data")+
  annotate("text", x=10, y=75, label= paste0("r2 = ", round(cor(csvtest$preds, csvtest$GreenView)^2, 2)))+
  annotate("text", x=10, y=70, label= paste0("MSE = ", mse(csvtest$preds, csvtest$GreenView)))+
  ggtitle("Test set")+
  coord_cartesian(xlim=c(0, 75), ylim=c(0, 75))

c <- ggplot(csv)+
  geom_abline()+
  geom_scattermore(aes(x=fullPreds, y = GreenView), alpha=0.25)+
  xlab("GVI, model estimate")+
  ylab("Labelled data")+
  annotate("text", x=10, y=75, label= paste0("r2 = ", round(cor(csv$fullPreds, csv$GreenView)^2, 2)))+
  annotate("text", x=10, y=70, label= paste0("MSE = ", mse(csv$fullPreds, csv$GreenView)))+
  ggtitle("Full set, best model")+
  coord_cartesian(xlim=c(0, 75), ylim=c(0, 75))

library(patchwork)

p <- a + b + c

ggsave("results/valid_plot.png", p, scale=1.25, height = 4, width = 8)

#

get_countries <-  function(long, lat)
{ 
  points <- cbind(long, lat)
  countriesSP <- rworldmap::getMap(resolution = 'low')
  pointsSP = sp::SpatialPoints(points, sp::CRS(sp::proj4string(countriesSP)))  
  sp::over(pointsSP, countriesSP)$ADMIN
}

library(countrycode)

csv$country <- as.character(get_countries(csv$x, csv$y))
csv$country <- countrycode(csv$country, 'country.name', 'region')

library(gg.layers)

a <- ggplot(csv)+
  theme_classic()+
  geom_boxplot2(aes(x="Predicted", y=fullPreds, fill="Predicted"))+
  geom_boxplot2(aes(x="Labelled", y=GreenView, fill="Labelled"))+
  xlab("")+
  ylab("GVI")+
  facet_wrap(vars(country))+
  ggtitle("Comparison of labelled and predicted values, by region")+
  scale_fill_viridis_d(name="Data")

a

ggsave("results/valid_boxplot.png", a, scale=1.25, height = 5, width = 6.5)


####
# country level validation

csv$country <- as.character(get_countries(csv$x, csv$y))

ctry_acc = unlist(lapply(unique(csv$country), function(X){
  
  cor(csv$fullPreds[csv$country==X], csv$GreenView[csv$country==X])^2
  
}))

ctry_acc = data.frame(ctry_acc=ctry_acc, ctry=unique(csv$country))

ggplot(na.omit(ctry_acc))+
  theme_classic()+
  geom_col(aes(x=countrycode(ctry, 'country.name', 'iso3c'), y=ctry_acc), fill="forestgreen", colour="black")+
  scale_y_continuous(labels=scales::label_percent())+
  ylab("Country-level, full sample best model r-squared")+
  xlab("Country")

ggsave("results/ctr_level_test_acc.png", scale=0.85, height = 4.5, width = 7)
