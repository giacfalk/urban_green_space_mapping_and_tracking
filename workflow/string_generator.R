
string <- '

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
print("months",months);
var years = ee.List.sequence(2015, 2016);
print("years",years);

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


str <- paste0(string, 1:41, string2, 1:41, str3, collapse="")
writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str.txt")


###


string <- '

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S1_GRD").select(["HH","HV","VV","VH"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
print("months",months);
var years = ee.List.sequence(2015, 2016);
print("years",years);

// Map filtering and reducing across year-month combinations and convert to ImageCollection
var yrMo = ee.ImageCollection.fromImages(
    months.map(function (m) {
      return collection
      .filter(ee.Filter.calendarRange(m, m, "month"))
      .median()
      .set("month",m);
    }));

var reduced = yrMo.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_sa'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:41, string2, 1:41, str3, collapse="")
writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str1b.txt")


###


string <- '

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'

string2 <- '") 

var reduced = era5.map(function(image){
  return image.toDouble().add(0).reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_era'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:41, string2, 1:41, str3, collapse="")
writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str1c.txt")


###


string <- '

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


str <- paste0(string, 1:41, string2, 1:41, str3, collapse="")
writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str2.txt")

###

string <- '


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_'

string2 <- '") 

var reduced = dwImage.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
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


str <- paste0(string, 1:41, string2, 1:41, str3, collapse="")
writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str3.txt")

###############################


string <- '

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
print("months",months);
var years = ee.List.sequence(2016, 2017);
print("years",years);

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
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_points_2016_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:34, string2, 1:34, str3, collapse="")


string <- '

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
print("months",months);
var years = ee.List.sequence(2022, 2023);
print("years",years);

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
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_points_2022_'

str3 <- '",
  fileFormat: "CSV",
});   '


str2 <- paste0(string, 1:34, string2, 1:34, str3, collapse="")

str <- paste0(str, str2, collapse="")

writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str4.txt")

####

string <- '

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

string2 <- '") 

var reduced = dwImage.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_lc_2022_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:34, string2, 1:34, str3, collapse="")


string <- '

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

string2 <- '") 

var reduced = dwImage.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_lc_2016_'


str3 <- '",
  fileFormat: "CSV",
});   '


str2 <- paste0(string, 1:34, string2, 1:34, str3, collapse="")

str <- paste0(str, str2, collapse="")

writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str5.txt")

####


string <- '

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 


var reduced = era5.map(function(image){
  return image.toDouble().add(0).reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_points_era_2016_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, 1:34, string2, 1:34, str3, collapse="")



string <- '

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 


var reduced = era5.map(function(image){
  return image.toDouble().add(0).reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_points_era_2022_'

str3 <- '",
  fileFormat: "CSV",
});   '

str2 <- paste0(string, 1:34, string2, 1:34, str3, collapse="")

str <- paste0(str, str2, collapse="")

writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str6.txt")

###

string <- '

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

string2 <- '") 

var reduced = dwImage.map(function(image){
  return image.reduceRegions({
    collection:ukr , 
    reducer:ee.Reducer.median(), 
    scale: 10
  });
});

var table = reduced.flatten();

var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '

str <- paste0(string, 1:34, string2, 1:34, str3, collapse="")

writeLines(str, "C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/str7.txt")

