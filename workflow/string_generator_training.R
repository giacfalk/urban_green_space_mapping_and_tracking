

##############################################################################

# This Rscript: 

#   1) Generate Javascript scripts for Google Earth Engine to extract training data

##############################################################################


rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/gv_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2016, 2017);
//print("years",years);

var addNDVI = function(image) {
  return image.addBands(image.normalizedDifference(["B8", "B4"]))}

// Map filtering and reducing across year-month combinations and convert to ImageCollection
var yrMo = ee.ImageCollection.fromImages(
    months.map(function (m) {
      return collection
      .filter(ee.Filter.calendarRange(m, m, "month"))
      .map(addNDVI)
      .median()
      .set("month",m);
    }));

var reduced = yrMo.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    tileScale: 4,
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:41, string_b, 1:41, string2, 1:41, "_2016", str3, collapse="")
writeLines(str, "data/validation/str_1.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/gv_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'

string2 <- '") 

var reduced = era5.map(function(image){
  return image.toDouble().add(0).reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    tileScale: 4,
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_era_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:41, string_b, 1:41, string2, 1:41, "_2016", str3, collapse="")
writeLines(str, "data/validation/str_2.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/gv_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'


string2 <- '") 

var reduced = dwImage.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    tileScale: 4,
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:41, string_b, 1:41, string2, 1:41, "_2016", str3, collapse="")
writeLines(str, "data/validation/str_3.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/gv_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'

string2 <- '") 

var reduced = dwImage.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(),
    tileScale: 4,
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:41, string_b, 1:41, string2, 1:41, "_2016", str3, collapse="")
writeLines(str, "data/validation/str_4.txt")
