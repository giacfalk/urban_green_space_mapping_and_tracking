
##############################################################################

# This Rscript: 

#   1)

##############################################################################

rm(list=ls(all=TRUE)) # Removes all previously created variables
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
library(dplyr)

pacman::p_load(data.table,panelr,jtools, ggplot2,purrr,xtable,texreg,
               fixest,lmtest,caret,MLmetrics,sandwich)

library(kgc)

cl <- climatezones

## write training and prediction data

load("data/validation/after_points_030624.Rdata")

# prediction

sf <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

###

out_ndvi_m$city <- sf_c$UC_NM_MN[as.numeric((sapply(strsplit(out_ndvi_m$id,"_"), `[`, 1)))]

out_ndvi_m_sel <- out_ndvi_m %>% dplyr::select(country, id, year, x, y, out_b, starts_with("nd_"), merger, population, gdp_capita, city)

rm(out_ndvi_m); gc()

out_ndvi_m_sel$id <- match(out_ndvi_m_sel$merger, unique(out_ndvi_m_sel$merge))
out_ndvi_m_sel$merger <- NULL

out_ndvi_m_sel$x_s <- RoundCoordinates(out_ndvi_m_sel$x)
out_ndvi_m_sel$y_s <- RoundCoordinates(out_ndvi_m_sel$y)

out_ndvi_m_sell <- merge(out_ndvi_m_sel, cl, by.x=c("x_s", "y_s"), by.y=c("Lon", "Lat"))

out_ndvi_m_sell$x_s <- NULL
out_ndvi_m_sell$y_s <- NULL

out_ndvi_m_sell1 <- out_ndvi_m_sell

write_rds(out_ndvi_m_sell1, "prediction_data.rds")

#####

load("data/validation/after_gee_multispectral_gee_170524.Rdata")

load("data/validation/allRes.Rdata")

allDataa <- merge(allData, out_ndvi_m %>% dplyr::select(x, y, country, city), by=c("x", "y"))

out_ndvi_m <- as.data.frame(allDataa)

out_ndvi_m$sample <- out_ndvi_m$dataset

out_ndvi_m_sel <- out_ndvi_m %>% dplyr::select(city, country, x, y, GreenView, starts_with("nd_"), population, gdp_capita, city, sample, preds, fullPreds)

out_ndvi_m_sel$x_s <- RoundCoordinates(out_ndvi_m_sel$x)
out_ndvi_m_sel$y_s <- RoundCoordinates(out_ndvi_m_sel$y)

out_ndvi_m_sell <- merge(out_ndvi_m_sel, cl, by.x=c("x_s", "y_s"), by.y=c("Lon", "Lat"))

out_ndvi_m_sell$x_s <- NULL
out_ndvi_m_sell$y_s <- NULL

out_ndvi_m_sell2 <- out_ndvi_m_sell

write_rds(out_ndvi_m_sell2, "training_data.rds")

##############################################################################
#trend analysis
prediction_data <- readRDS("prediction_data.rds")
setDT(prediction_data)
prediction_data<-prediction_data[order(id,year)]
prediction_data[,.(id,year,city,country,out_b)]

#----------------------------------------
summ(baseModel<-lm(log(out_b)~year,data=prediction_data),digits=4,robust=TRUE)
baseModel<-coeftest(baseModel, vcov = vcovHC(baseModel), type = "HC0")
baseModel
(exp(-5.0936e-03) - 1)*100

#----------------------------------------
# Convert to pdata.frame
# pdata <- pdata.frame(prediction_data, index = c("id","year"))
# model_fe <- plm(log(out_b) ~ year, data = pdata, model = "within")
# summary(model_fe,vcov = vcovHC(model_fe), type = "HC0")
#median(model_fe$coefficients)
#The coefficients indicate how log(GVI) has changed each year compared to the 
#base year (2016). log(GVI) generally decreased from 2016 to 2023,
#with a few fluctuations, such as an increase in 2021 corresponding to post-COVID. 
#----------------------------------------

model_fe_sample<-feols(log(out_b) ~ factor(year)| id , data = prediction_data)

model_fe_sample2<-feols(log(out_b) ~ factor(year)| id + city , data = prediction_data)

# FE model with yearly dummies to consider non-linearity
# consistent negative effect w.r.t. 2016
# 2021 (post-covid) is positive

screenreg(list(baseModel,model_fe_sample,model_fe_sample2),digits = 3,
          custom.model.names =c("Trend (OLS)","Fixed Effect (Sample)","Fixed Effect (Sample + city)"),
          custom.note = "%stars. Robust standard errors in parentheses.",
          include.rsquared = FALSE,
          include.adjrs = FALSE,
          include.nobs = FALSE,
          include.rmse = FALSE)

(exp(mean(coef(model_fe_sample))) -1)*100 # avg. difference w.r.t. 2016, about 4x times the avg. yearly time trend

texreg(list(baseModel,model_fe_sample,model_fe_sample2),digits = 3,
       custom.model.names =c("Trend (OLS)","Fixed Effect (Sample)" ,"Fixed Effect (Sample + city)"),
          custom.note = "%stars. Robust standard errors in parentheses.",
          include.rsquared = FALSE,
          caption="",
          include.adjrs = FALSE,
          include.nobs = FALSE,
          include.rmse = FALSE,
          file="reg_tab.tex")
#        dcolumn = TRUE, booktabs = TRUE,use.packages = FALSE,float.pos = "h")


#################################################################################
#1) Error Analysis
#---by climate zone
training_data <- readRDS("training_data.rds")
setDT(training_data)
names(training_data)

training_data[,cor(preds,GreenView)^2,by="sample"]
training_data$Cls<-substr(training_data$Cls,1,1)
unique(training_data$Cls)
training_data[Cls=="A", Cls:= "Tropical"]
training_data[Cls=="B", Cls:= "Dry"]
training_data[Cls=="C", Cls:= "Temperate"]
training_data[Cls=="D", Cls:= "Continental"]
training_data[Cls=="E", Cls:= "Polar"]

tabZone<-merge(training_data[,list("Training Data"=.N), by="Cls"],
               prediction_data[,list("Prediction Data"=.N), by="Cls"],all = TRUE)
tabZone<-tabZone[order(`Training Data`)]
setnames(tabZone,"Cls","Climate Zone")

errorTable<-merge(
#RMSPE
training_data[sample=="test",list("RMSPE"=MLmetrics::RMSPE(preds,GreenView)),by="Cls"],
#MAPE
training_data[sample=="test",list("MAPE"=MLmetrics::MAPE(preds,GreenView)),by="Cls"],
all = TRUE,by="Cls")

xtable(errorTable)
print(xtable(errorTable), file="error_tab.tex")

#################################################################################
#2) Tables count of points for Training and Prediction By Climate zone AND Country
prediction_data$Cls<-substr(prediction_data$Cls,1,1)
unique(prediction_data$Cls)
prediction_data[Cls=="A", Cls:= "Tropical"]
prediction_data[Cls=="B", Cls:= "Dry"]
prediction_data[Cls=="C", Cls:= "Temperate"]
prediction_data[Cls=="D", Cls:= "Continental"]
prediction_data[Cls=="E", Cls:= "Polar"]

tabZone<-merge(training_data[,list("Training Data"=.N), by="Cls"],
prediction_data[,list("Prediction Data"=.N), by="Cls"],all = TRUE)
tabZone<-tabZone[order(`Training Data`)]
setnames(tabZone,"Cls","Climate Zone")
#latex tables
print(xtable(tabZone), file="count_zone_tab.tex")
print(xtable(training_data[,list("Training Data"=.N), by="city"]), file="count_city_train_tab.tex")
print(xtable(prediction_data[,list("Prediction Data"=.N), by="city"][city!="N/A"]), file="count_city_pred_tab.tex")


#################################################################################
#3) Compare GVI with NDVI-based analysis of CHANGE (consider that NDVI has 12 columns, need to aggregate) -> both within and between cities

#+ The GVI prediction model demonstrates good fit over one time period, but its use 
#+ as a measure of vegetation change does not seem to be validated. Please provide a
#+ comparison between changes in GVI between the 2016-2022 period and changes to another
#+ objective vegetation measure, for example the NDVI, over the same time period, both
#+ within and between cities. 

#aggregate Ndvi row mean
ndvi_vars<-grep("nd_", names(prediction_data),value = TRUE)
prediction_data[, mean_ndivi:= rowMeans(.SD),.SDcols = ndvi_vars]
cor(prediction_data[,.(out_b,mean_ndivi)])

prediction_data[,.(id,year,city,out_b,mean_ndivi)]


#City Level
cols<-c("out_b","mean_ndivi")
meanCity<-prediction_data[, lapply(.SD, mean), by=c("year","city"),.SDcols = cols]
#City Level
cols<-c("out_b","mean_ndivi")
meanCountry<-prediction_data[, lapply(.SD, mean), by=c("year","country"),.SDcols = cols]

l <- list(prediction_data[,list("Sample Correlation"=cor(out_b,mean_ndivi)),by=c("year")],
meanCity[,list("City Correlation"=cor(out_b,mean_ndivi)),by=c("year")],
meanCountry[,list("Country Correlation"=cor(out_b,mean_ndivi)),by=c("year")])

corr_tab<-purrr::reduce(.x = l, merge, by = c('year'), all = T)
print(xtable(corr_tab), file="corr_tab.tex")

# prediction_data[, z_out_b :=scale(out_b)]
# prediction_data[, z_mean_ndivi :=scale(mean_ndivi)]
# prediction_data[,deltaIndex:=z_out_b-z_mean_ndivi]
# prediction_data[,mean(deltaIndex), by="year"]
# prediction_data[,lapply(.SD,mean), by="year",.SDcols = c("z_out_b","z_mean_ndivi")]
# prediction_data[,cor(z_out_b,z_mean_ndivi), by="year"]
# 
# 
# get_p_value <- function(var1, var2) {
#   round(t.test(var1, var2)$p.value,4)
# }
# p_values <- prediction_data[, .(p_value = get_p_value(z_out_b, z_mean_ndivi)), by = "year"]
# summ(deltaModel<-lm(deltaIndex~ + C(year),data=prediction_data),digits=4,robust=TRUE)
# 
# 
# 
# 
# summ(gviModel<-lm(log(out_b)~year,data=meanCity),digits=4,robust=TRUE)
# summ(ndviModel<-lm(log(mean_ndivi)~year,data=meanCity),digits=4,robust=TRUE)
# 
# 
# # Other model panel for NDVI
# pdata <- pdata.frame(meanCity, index = c("city","year"))
# anyNA(pdata)
# model_fe_ndvi <- plm(log(out_b) ~ year, data = pdata, model = "within")
# summary(model_fe_ndvi,vcov = vcovHC(model_fe_ndvi), type = "HC0")
# median(model_fe_ndvi$coefficients)
# 
# 
# 
# plot(density(meanCity[,cor(out_b,mean_ndivi)^2,by="city"]$V1))
# summary(meanCity[,cor(out_b,mean_ndivi)^2,by="city"]$V1)
# meanCity[, z_out_b :=scale(out_b), by="city"]
# meanCity[, z_mean_ndivi :=scale(mean_ndivi), by="city"]
# meanCity[, difSD :=z_out_b-z_mean_ndivi]
# summary(meanCity)
# plot(density(meanCity[,cor(out_b,mean_ndivi)^2,by="city"]$V1))





