string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2017-01-01", "2018-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2017, 2018);
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
  description: "cities_sampled_points_2017_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2017", str3, collapse="")
writeLines(str, "data/validation/str_2017.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2017-01-01", "2018-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2017-01-01", "2018-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_era_2017_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2017", str3, collapse="")
writeLines(str, "data/validation/str1c_2017.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2017-01-01", "2018-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


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
  description: "cities_sampled_lc_2017_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2017", str3, collapse="")
writeLines(str, "data/validation/str2_2017.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2017")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2017", str3, collapse="")
writeLines(str, "data/validation/str3_2017.txt")

##

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2018-01-01", "2019-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2018, 2019);
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
  description: "cities_sampled_points_2018_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2018", str3, collapse="")
writeLines(str, "data/validation/str_2018.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2018-01-01", "2019-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2018-01-01", "2019-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_era_2018_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2018", str3, collapse="")
writeLines(str, "data/validation/str1c_2018.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2018-01-01", "2019-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


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
  description: "cities_sampled_lc_2018_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2018", str3, collapse="")
writeLines(str, "data/validation/str2_2018.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2018")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2018", str3, collapse="")
writeLines(str, "data/validation/str3_2018.txt")

##

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2019-01-01", "2020-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2019, 2020);
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
  description: "cities_sampled_points_2019_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2019", str3, collapse="")
writeLines(str, "data/validation/str_2019.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2019-01-01", "2020-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2019-01-01", "2020-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_era_2019_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2019", str3, collapse="")
writeLines(str, "data/validation/str1c_2019.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2019-01-01", "2020-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


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
  description: "cities_sampled_lc_2019_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2019", str3, collapse="")
writeLines(str, "data/validation/str2_2019.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2019")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2019", str3, collapse="")
writeLines(str, "data/validation/str3_2019.txt")

##

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2020-01-01", "2021-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2020, 2021);
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
  description: "cities_sampled_points_2020_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2020", str3, collapse="")
writeLines(str, "data/validation/str_2020.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2020-01-01", "2021-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_era_2020_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2020", str3, collapse="")
writeLines(str, "data/validation/str1c_2020.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2020-01-01", "2021-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


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
  description: "cities_sampled_lc_2020_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2020", str3, collapse="")
writeLines(str, "data/validation/str2_2020.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2020")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2020", str3, collapse="")
writeLines(str, "data/validation/str3_2020.txt")

##

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2021-01-01", "2022-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2021, 2022);
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
  description: "cities_sampled_points_2021_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2021", str3, collapse="")
writeLines(str, "data/validation/str_2021.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2021-01-01", "2022-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2021-01-01", "2022-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_era_2021_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2021", str3, collapse="")
writeLines(str, "data/validation/str1c_2021.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2021-01-01", "2022-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


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
  description: "cities_sampled_lc_2021_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2021", str3, collapse="")
writeLines(str, "data/validation/str2_2021.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2021", str3, collapse="")
writeLines(str, "data/validation/str3_2021.txt")

##

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2023-01-01", "2024-01-01"));

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2").filter(COL_FILTER)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


string2 <- '") 

//Use a function to iterate through months and calculate average NDVI
var months = ee.List.sequence(1, 12);
//print("months",months);
var years = ee.List.sequence(2023, 2024);
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
  description: "cities_sampled_points_2023_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2023", str3, collapse="")
writeLines(str, "data/validation/str_2023.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2023-01-01", "2024-01-01"));

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2023-01-01", "2024-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_era_2023_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2023", str3, collapse="")
writeLines(str, "data/validation/str1c_2023.txt")


###


string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2023-01-01", "2024-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = ee.ImageCollection(dwCol.median())

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'


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
  description: "cities_sampled_lc_2023_'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2023", str3, collapse="")
writeLines(str, "data/validation/str2_2023.txt")

###

string <- '

var comuni = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_' 

string_b <- '").geometry().bounds()

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2023")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_'

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
  description: "cities_sampled_points_pop'

str3 <- '",
  fileFormat: "CSV",
});   '


str <- paste0(string, (1:191)[-68], string_b, (1:191)[-68], string2, (1:191)[-68], "_2023", str3, collapse="")
writeLines(str, "data/validation/str3_2023.txt")

