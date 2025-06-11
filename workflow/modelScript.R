
##############################################################################

# This Rscript: 

#   1) Train the ML model

##############################################################################

rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

if (!require("pacman")) install.packages("pacman")
pacman::p_load(h2o, data.table,ggplot2,ggpubr,mltools,caret,nngeo,parallel,
               earth,ranger)


out_ndvi_m <- readRDS("data/validation/after_gee_multispectral_gee.rds")

setDT(out_ndvi_m)
names(out_ndvi_m)

out_ndvi_m<-out_ndvi_m[!country%in%c("CA","AU"),]
#rm(sf)
#summary(out_ndvi_m)
# B1 60 meters	Aerosols
# B2 10 meters	Blue
# B3 10 meters	Green
# B4 10 meters	Red
# B5 20 meters	Red Edge 1
# B6 20 meters	Red Edge 2
# B7 20 meters	Red Edge 3
# B8 10 NIR
# B8A	20 meters	Red Edge 4
# B9 60 meters	Water vapor
# B10	60 meters	Cirrus
# B11	20 meters	SWIR 1
# B12	20 meters	SWIR 2
# QA10 10 meters	Always empty
# QA20 20 meters	Always empty
# QA60 60 meters	Cloud mask
toRemove<-grep(c("QA|nd_[0-9]"),names(out_ndvi_m),value = T)
out_ndvi_m[, (toRemove):=NULL]
#summary(out_ndvi_m)
#dim(na.omit(out_ndvi_m))
#1609671     176
#-----remove ID, dates etc
toRemove<-c("FID.x","FID.y","PntNum","city","panoDate","panoID")
out_ndvi_m[, (toRemove):=NULL]
#-----Dealing with the missing
naVArs<-data.frame("missing"=sapply(out_ndvi_m, function(x) sum(is.na(x))))
naVArs$varName<-rownames(naVArs)
setDT(naVArs)
naVArs[missing>0,]
naCols<-function(x){prop.table(table(is.na(x)))[2]}
#View(out_ndvi_m[, lapply(.SD,naCols), by ='country'])
#AU CA
out_ndvi_m$country<-NULL
names(out_ndvi_m)
#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /
#+ ISSUES:
#+ 1) too many vars
#+ 2) missing data (?) 
#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /#/ /
out_ndvi_m<-na.omit(out_ndvi_m)

#Now create Sampling var
out_ndvi_m$x_bin <- cut(out_ndvi_m$x, quantile(out_ndvi_m$x, seq(0, 1, 0.1)), labels=F)
out_ndvi_m$y_bin <- cut(out_ndvi_m$y, quantile(out_ndvi_m$y, seq(0, 1, 0.1)), labels=F)
out_ndvi_m$sampling_var <- as.factor(paste(out_ndvi_m$x_bin, out_ndvi_m$y_bin, sep="_")) 

out_ndvi_m$x_bin<-NULL
out_ndvi_m$y_bin<-NULL

highRes<-unlist(lapply(c("B2_","B3_","B4_","B8_"),function(x) grep(x,names(out_ndvi_m),value = T)))
era5<-unlist(lapply(c("mean_","surface_","total_"),function(x) grep(x,names(out_ndvi_m),value = T)))

#allhRes<-grep(c("B[0-9]"),names(out_ndvi_m),value = T)
toKeep<-c(highRes,era5,"GreenView","x","y","sampling_var",
          "bare","built","crops","flooded_vegetation",
          "grass","shrub_and_scrub","snow_and_ice","trees","water",
          "gdp_capita","population")
out_ndvi_m<-out_ndvi_m[,..toKeep]
###############################################################################
### Transformations ###
###############################################################################
#Cartesian to Polar
#Transform the coordinates into polar coordinates
cart2polar <- function(x, y) {
  data.frame(r = sqrt(x^2 + y^2), theta = atan2(y, x))
}
hep<-cart2polar(out_ndvi_m$x,out_ndvi_m$y)
out_ndvi_m<-cbind(out_ndvi_m,hep)

# featureType="mean"
# 
# if(featureType=="trigo"){
# #trigonometry_features
# out_ndvi_m[,paste0("tan_",highRes):=lapply(.SD,tan), .SDcols=highRes]
# out_ndvi_m[,paste0("sin_",highRes):=lapply(.SD,sin), .SDcols=highRes]
# out_ndvi_m[,paste0("cos_",highRes):=lapply(.SD,cos), .SDcols=highRes]
# }else if(featureType=="mean"){
#   lapply(c("B2_","B3_","B4_","B8_","mean_2m_","surface_","total_"),function(x){
#     bands<-grep(x,names(out_ndvi_m),value = T)
#     out_ndvi_m[,paste0("mean_",x):=rowMeans(.SD), .SDcols=bands]
#    
#     out_ndvi_m[, (bands):=NULL]
#     out_ndvi_m
#     
#     })

# bandsNames<-c("B1_","B2_","B3_","B4_","B5_","B6_",
#               "B7_","B8_","B8A_","B9_","B10_","B11_","B12_")	
#   lapply(bandsNames,function(x){
#     bands<-grep(x,names(out_ndvi_m),value = T)
#     out_ndvi_m[,paste0("mean_",x):=rowMeans(.SD), .SDcols=bands]
#     out_ndvi_m[, (bands):=NULL]
#     out_ndvi_m
#     
#   })

#}

###############################################################################

#clean all keep only DT
names(out_ndvi_m)
rm(list=setdiff(ls(), c("out_ndvi_m")))
###############################################################################
###  NN calc ###
# x = data.frame(
#   lon = out_ndvi_m$x,
#   lat = out_ndvi_m$y
# )
# 
# x = sf::st_as_sf(x, coords = c("lon", "lat"), crs = 4326)
# x = st_transform(x, 3395)
# 
# start = Sys.time()
# result1 <-st_nn(x, x, k = 10,maxdist=5000, progress = T)
# end <- Sys.time()
# end - start
# 
# x = st_transform(x, 4326)
# 
# out_ndvi_m$medTrees<-unlist(lapply(result1,function(x){
#   nn<-x[-1]
#   out_ndvi_m[nn,median(trees)]
# }))
# 
# rm(list=setdiff(ls(), "result1"))


load("data/validation/nnList.RData")
gc()
# c(trees,bare,water,B2_9,B8_9,B4_7,B4_9,B2_10,B8_7,r,B2_2,mean_2m_air_temperature_9,
#   grass,population,B8_8,total_precipitation_2,B8_10)
nnFeatures<-c("trees","bare","water","grass","population")


# allResnn<-lapply(result1,function(x){
#   nn<-x[-1]
#   #out_ndvi_m[nn,list(median(trees),median(bare),median(water),median(grass),median(population))]
#   out_ndvi_m[nn,lapply(.SD,median),.SDcols=nnFeatures]
#   
#   })
# allResnn<-rbindlist(allResnn)
# names(allResnn)<-paste0("nn_",names(allResnn))


out_ndvi_m$medTrees<-unlist(lapply(result1,function(x){
  nn<-x[-1]
  out_ndvi_m[nn,median(trees)]
}))

out_ndvi_m$medBare<-unlist(lapply(result1,function(x){
  nn<-x[-1]
  out_ndvi_m[nn,median(bare)]
}))

out_ndvi_m$medGrass<-unlist(lapply(result1,function(x){
  nn<-x[-1]
  out_ndvi_m[nn,median(grass)]
}))

out_ndvi_m$medPop<-unlist(lapply(result1,function(x){
  nn<-x[-1]
  out_ndvi_m[nn,median(population)]
}))


fwrite(out_ndvi_m,"data/validation/allData.csv")

#######################
out_ndvi_m<-fread("data/validation/allData.csv")
set.seed(12334)
gc()
dim(out_ndvi_m)

library(splitstackshape)
global_ac_train <- stratified(out_ndvi_m, c("sampling_var","water"), 0.75, bothSets = T)
global_ac_test <- as.data.frame(global_ac_train[[2]])
global_ac_train <- as.data.frame(global_ac_train[[1]])
#
rm(out_ndvi_m)
gc()

indices <- CAST::CreateSpacetimeFolds(global_ac_train,spacevar = "sampling_var", # requires pre-calculated "clusters!" (e.g. define transects based on coords http://rstudio-pubs-static.s3.amazonaws.com/465397_57be566aff364c309e2e3a5e9ce8f7e1.html)
                                      k=10)
global_ac_train$spFold<-rep(seq_along(indices$indexOut), sapply(indices$indexOut, length))
global_ac_train$sampling_var <- NULL
global_ac_test$sampling_var <- NULL

fwrite(global_ac_train,"data/validation/trainData.csv")
fwrite(global_ac_test,"data/validation/testData.csv")


##########AUTO ML XGB #####################################################################
library(h2o)
library(data.table)
rm(list=ls()) 
global_ac_train<-fread("data/validation/trainData.csv")
global_ac_test<-fread("data/validation/testData.csv")
summary(global_ac_train$GreenView)
summary(global_ac_test$GreenView)
plot(density(global_ac_train$GreenView))
plot(density(global_ac_test$GreenView))
plot(density(c(global_ac_train$GreenView,global_ac_test$GreenView)))
#logged
summary(log(1+global_ac_train$GreenView))
summary(log(1+global_ac_test$GreenView))

global_ac_train$GreenView<-log(1+global_ac_train$GreenView)

source("https://raw.githubusercontent.com/athammad/helpers/main/R/helperFuncs.R")
getMachineInfo()
# model <- lm(GreenView ~ . -spFold, data = global_ac_train)
# olsrr::ols_step_both_aic(model,details = TRUE)

names(global_ac_train)
#global_ac_train$spFold<-NULL
gc()
mlmetricsH2o<-function(model,training=NULL,testing=NULL){
  #train
  trainr<-list(
    trainRes<-exp(as.vector(predict(model,training))),
    actual<-as.vector(exp(training[,"GreenView"])),
    r2=caret::R2(trainRes,actual),
    rmspe=MLmetrics::RMSPE(trainRes ,actual),
    mape=MLmetrics::MAPE(trainRes ,actual))
  
  names(trainr)[1]<-"trainRes"
  #Test
  testr<-list(
    testRes<-exp(as.vector(predict(model,testing))),
    actual<-as.vector(testing[,"GreenView"]),
    r2=caret::R2(testRes,actual),
    rmspe=MLmetrics::RMSPE(testRes ,actual),
    mape=MLmetrics::MAPE(testRes ,actual))
  
  names(testr)[1]<-"testRes"
  #----------------------------------#
  Mylist<-list(trainr,testr)
  names(Mylist)<-c("trainr","testr")
  return(Mylist)
  
}
# Start the H2O cluster (locally)
h2o.init()


# Import a sample binary outcome train/test set into H2O
train <-as.h2o(global_ac_train)
test <-as.h2o(global_ac_test)
global_ac_train$dataset<-"train"
global_ac_test$dataset<-"test"
# Identify predictors and response
y <- "GreenView"
x <- setdiff(names(train), c("GreenView","spFold"))

#x2<-topVars #trees,bare,water,y,B2_9,B8_9,B4_7,B4_9,B2_10,theta,B8_7,r,B2_2,mean_2m_air_temperature_9,x,grass,population,B8_8,total_precipitation_2,B8_10
startTime<-Sys.time()
ore<-3600*5
# Run AutoML for 20 XGB models
aml <- h2o.automl(
  max_runtime_secs = ore,
  seed=1,
  distribution="huber",#huber
  x = x, y = y,
  training_frame = train,
  fold_column="spFold",
  #nfolds = 10,
  stopping_metric="RMSE",
  include_algos = c("XGBoost"))
endtTime<-Sys.time()
difftime(endtTime,startTime)

# View the AutoML Leaderboard
lb <- aml@leaderboard
print(lb, n = nrow(lb))  # Print all rows instead of default (6 rows)
aml@leaderboard
aml@leader

bestAuto <- h2o.getModel(aml@leader@model_id)

# Now let's evaluate the model performance on a test set
# so we get an honest estimate of top model performance
bestbestAuto_perf2 <- h2o.performance(model = bestAuto,
                                      newdata = test)
h2o.r2(bestAuto)#train
#0.6915844
h2o.r2(bestbestAuto_perf2)# Test
#0.6616535
varImps<-aml@leader@model$variable_importances
topVars<-varImps[1:20,1]
preds<-predict(aml@leader,test)
caret::R2(exp(as.vector(preds)),global_ac_test$GreenView)
mdensity(cbind.data.frame(exp(as.vector(preds)),global_ac_test$GreenView))
#SAVE THE MODEL
h2o.saveModel(object = bestAuto, path =getwd(),
              force = TRUE, filename="xgbLog5hNNrmseHub")


#RMSE 1 hour
#0.7168713
#0.6804043

#RMSE 1 hour Huber
#0.7210697
#0.6822334

#RMSE 1 hour Huber Log
#0.0.6885485
#0.6667405


#RMSE 1 hour Huber 0.7
#0.0.6885485
#0.666740


#Retrain with the best model train and test
aml<-h2o.loadModel("xgbLog5hNNrmseHub")
m <- h2o.getModel(aml@model_id)

m@allparameters$fold_column<-NULL
m@allparameters$training_frame<-NULL
xgbModel<- do.call(h2o.xgboost, c(m@allparameters,list(training_frame=train)))
m@allparameters$ntrees==xgbModel@allparameters$ntrees
m@allparameters$learn_rate ==xgbModel@allparameters$learn_rate

modelRes<-mlmetricsH2o(xgbModel,training = train,testing = test)
modelRes$trainr$r2
modelRes$testr$r2

global_ac_train$preds<-modelRes$trainr$trainRes
global_ac_test$preds<-modelRes$testr$testRes
global_ac_train$spFold<-NULL
allData<-rbind.data.frame(global_ac_train,global_ac_test)
h2o.saveModel(object = xgbModel, path =getwd(),
              force = TRUE, filename="xgbLog5hNNrmseHubFinal")

#### Retrain on all data

aml<-h2o.loadModel("xgbLog5hNNrmseHub")
xgbModel<- h2o.getModel(aml@model_id)

global_ac_train$spFold<-NULL
xgbModel@allparameters$training_frame<-NULL
xgbModel@allparameters$fold_column<-NULL
global_ac_test$GreenView<-log(1+global_ac_test$GreenView)
trainFinal <-as.h2o(rbind.data.frame(global_ac_train,global_ac_test))
fxgbModel<- do.call(h2o.xgboost, c(xgbModel@allparameters,list(training_frame=trainFinal)))

finalTrainRes<-list(
  trainRes<-exp(as.vector(predict(fxgbModel,trainFinal))),
  actual<-exp(as.vector(trainFinal[,"GreenView"])),
  r2=caret::R2(trainRes,actual),
  rmspe=MLmetrics::RMSPE(trainRes ,actual),
  mape=MLmetrics::MAPE(trainRes ,actual))

modelRes$trainr$r2
modelRes$testr$r2
finalTrainRes$r2
allData$fullPreds<-as.vector(predict(fxgbModel,trainFinal))
h2o.saveModel(object = fxgbModel, path =getwd(),
              force = TRUE, filename="xgbLog5hNNrmseHubFinalALL")

h2o.removeAll()
h2o.shutdown()

#########

library(h2o)
library(data.table)
rm(list=ls()) 
global_ac_train<-fread("data/validation/trainData.csv")
global_ac_test<-fread("data/validation/testData.csv")
summary(global_ac_train$GreenView)
summary(global_ac_test$GreenView)
plot(density(global_ac_train$GreenView))
plot(density(global_ac_test$GreenView))
plot(density(c(global_ac_train$GreenView,global_ac_test$GreenView)))
#logged
summary(log(1+global_ac_train$GreenView))
summary(log(1+global_ac_test$GreenView))

global_ac_train$GreenView<-log(1+global_ac_train$GreenView)
global_ac_test$GreenView<-log(1+global_ac_test$GreenView)

names(global_ac_train)
#global_ac_train$spFold<-NULL
gc()
mlmetricsH2o<-function(model,training=NULL,testing=NULL){
  #train
  trainr<-list(
    trainRes<-exp(as.vector(predict(model,training))),
    actual<-as.vector(exp(training[,"GreenView"])),
    r2=caret::R2(trainRes,actual),
    rmspe=MLmetrics::RMSPE(trainRes ,actual),
    mape=MLmetrics::MAPE(trainRes ,actual))
  
  names(trainr)[1]<-"trainRes"
  #Test
  testr<-list(
    testRes<-exp(as.vector(predict(model,testing))),
    actual<-as.vector(exp(testing[,"GreenView"])),
    r2=caret::R2(testRes,actual),
    rmspe=MLmetrics::RMSPE(testRes ,actual),
    mape=MLmetrics::MAPE(testRes ,actual))
  
  names(testr)[1]<-"testRes"
  #----------------------------------#
  Mylist<-list(trainr,testr)
  names(Mylist)<-c("trainr","testr")
  return(Mylist)
  
}
# Start the H2O cluster (locally)
h2o.init()


# Import a sample binary outcome train/test set into H2O
train <-as.h2o(global_ac_train)
test <-as.h2o(global_ac_test)
global_ac_train$dataset<-"train"
global_ac_test$dataset<-"test"
# Identify predictors and response
y <- "GreenView"
x <- setdiff(names(train), c("GreenView","spFold"))

#Retrain with the best model train and test
aml<-h2o.loadModel("xgbLog5hNNrmseHub")
xgbModel<- h2o.getModel(aml@model_id)

modelRes<-mlmetricsH2o(xgbModel,training = train,testing = test)
modelRes$trainr$r2
modelRes$testr$r2
summary(modelRes$trainr$trainRes)
summary(modelRes$testr$testRes)
#----------------------
global_ac_train$spFold<-NULL
summary(global_ac_train$GreenView)
summary(global_ac_test$GreenView)
trainFinal <-as.h2o(rbind.data.frame(global_ac_train,global_ac_test))
global_ac_test$dataset<-NULL


aml<-h2o.loadModel("xgbLog5hNNrmseHubFinalALL")
fxgbModel<- h2o.getModel(aml@model_id)


finalTrainRes<-list(
  trainRes<-exp(as.vector(predict(fxgbModel,trainFinal))),
  actual<-exp(as.vector(trainFinal[,"GreenView"])),
  r2=caret::R2(trainRes,actual),
  rmspe=MLmetrics::RMSPE(trainRes ,actual),
  mape=MLmetrics::MAPE(trainRes ,actual))

modelRes$trainr$r2
modelRes$testr$r2
finalTrainRes$r2
global_ac_test$dataset<-"test"
allData<-rbind.data.frame(global_ac_train,global_ac_test)
allData$preds<-c(modelRes$trainr$trainRes,modelRes$testr$testRes)
allData$fullPreds<-as.vector(exp(predict(fxgbModel,trainFinal)))
allData$GreenView<-exp(allData$GreenView)
fwrite(allData,"allData.csv")


rm(list=setdiff(ls(), c("allData","modelRes","finalTrainRes")))
h2o.removeAll()
h2o.shutdown()
save.image("data/validation/allRes.Rdata")


names(allData)
plot(density(allData$fullPreds))
summary(allData$fullPreds)
allData[,min(preds),by="dataset"]

plot(density(allData[dataset=="train", preds]))
plot(density(allData[dataset=="test", preds]))
mdensity(allData[dataset=="test", .(GreenView, preds)])
mdensity(allData[dataset=="train", .(GreenView, preds)])
mdensity(allData[, .(exp(GreenView), fullPreds)])

plot(density(allData$GreenView))

############################

rm(list=ls()) 

library(stargazer)
library(data.table)
alldata<-fread("allData.csv")
names(alldata)


varsNames<-c("B2_","B3_","B4_","B8_",
             "mean_2m_air_temperature","surface_pressure","total_precipitation")
lapply(varsNames,function(x){
  bands<-grep(x,names(alldata),value = T)
  alldata[,paste0("smean_",x):=rowMeans(.SD), .SDcols=bands]
  alldata})

mvars<-grep("smean_",names(alldata),value = T)

mvars<-c("GreenView","gdp_capita", "population","trees","bare",
         "grass","water","shrub_and_scrub","flooded_vegetation","built",
         "snow_and_ice","crops",
         mvars)
#Percentage for probs
percVals<-c("trees","bare",
            "grass","water","shrub_and_scrub","flooded_vegetation","built","snow_and_ice","crops")
alldata[, (percVals) := lapply(.SD, function(x) x * 100), .SDcols = percVals]
#Kelvin to celsius
alldata$smean_mean_2m_air_temperature<-alldata$smean_mean_2m_air_temperature-273.15

summary(alldata[,..mvars])
namedVars<-c("Green View", "GDP per capita", "Population density",                   
             "Trees (\\%)","Bare (\\%)","Grass (\\%)" ,"Water (\\%)", "Shrub and scrub (\\%)",
             "Flooded vegetation  (\\%)","Built (\\%)","Snow and ice (\\%)","Crops (\\%)", "B2","B3","B4","B8", "2m Air Temperature (C)",
             "Surface Pressure (Pa)","Total Precipitation (m)") 
stargazer(alldata[,..mvars],omit.summary.stat="n", summary.stat = c("mean","median",'sd',"min","max"),
          covariate.labels=namedVars,digits=2)


library(h2o)
h2o.init()

aml<-h2o.loadModel("xgbLog5hNNrmseHub")
xgbModel<- h2o.getModel(aml@model_id)
varImps<-xgbModel@model$variable_importances
topVars<-varImps[1:20,1]
varImps
setDT(varImps)
varImps<-varImps[order(percentage,decreasing = T)]
varImps$percentage<-round(varImps$percentage,3)*100
library(ggplot2)
ggplot(varImps[1:15], aes(x=reorder(variable, percentage), y=percentage,fill=percentage)) + 
  geom_bar(stat="identity")+
  ylab("Importance %") +
  xlab("Variable Name") +
  coord_flip()+
  theme_bw()

############################

varsNames<-c("B2_","B3_","B4_","B8_",
             "mean_2m_air_temperature","surface_pressure","total_precipitation")
multiVars<-unlist(lapply(varsNames,function(x){
  bands<-grep(x,varImps$variable,value = T)
  
  varImps[variable%in%bands,mean(percentage)]
}))
multiVars<-data.frame("variable"=varsNames,"percentage"=multiVars)

varsNames<-c("B2_","B3_","B4_","B8_",
             "mean_2m_air_temperature","surface_pressure","total_precipitation")
NamesmultiVars<-unlist(lapply(varsNames,function(x){
  bands<-grep(x,varImps$variable,value = T)
}))
singleVars<-varImps[!variable%in%NamesmultiVars,.(variable,percentage)]


summaryVars<-rbind(singleVars,multiVars)
setDT(summaryVars)
summaryVars<-summaryVars[order(percentage,decreasing = T)]
ggplot(summaryVars, aes(x=reorder(variable, percentage), y=percentage,fill=percentage)) + 
  geom_bar(stat="identity")+
  ylab("Importance %") +
  xlab("Variables")+
  coord_flip()+
  scale_x_discrete(labels = c("GDP per capita","Surface Pressure (Pa)",
                              "Total Precipitation (m)","B3","Built","Snow and Ice","B4","Crops","Grass","Population density",
                              "2m Air Temperature (C)","B2","Flooded vegetation","NN Grass","Shrub and scrub","NN Population density","B8",
                              "r","x","NN Trees","Theta","y","Water","Bare","NN Bare","Trees"
  ))+
  theme_bw()+theme(legend.position = "none")
ggsave("varImp.png", width = 20, height = 20, units = "cm")

namedVars<-c("Green View", "GDP per capita", "Population density",                   
             "Trees (\\%)","Bare (\\%)","Grass (\\%)" ,"Water (\\%)", "Shrub and scrub (\\%)",
             "Flooded vegetation  (\\%)","Built (\\%)", "B2","B3","B4","B8", "2m Air Temperature (C)",
             "Surface Pressure (Pa)","Total Precipitation (m)")    

#################

load("data/validation/allRes.Rdata")
load("data/validation/after_points_090524.Rdata")

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

