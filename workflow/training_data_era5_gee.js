

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_1") 

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
  description: "gv_era1",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_2") 

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
  description: "gv_era2",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_3") 

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
  description: "gv_era3",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_4") 

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
  description: "gv_era4",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_5") 

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
  description: "gv_era5",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_6") 

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
  description: "gv_era6",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_7") 

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
  description: "gv_era7",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_8") 

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
  description: "gv_era8",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_9") 

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
  description: "gv_era9",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_10") 

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
  description: "gv_era10",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_11") 

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
  description: "gv_era11",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_12") 

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
  description: "gv_era12",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_13") 

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
  description: "gv_era13",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_14") 

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
  description: "gv_era14",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_15") 

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
  description: "gv_era15",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_16") 

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
  description: "gv_era16",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_17") 

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
  description: "gv_era17",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_18") 

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
  description: "gv_era18",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_19") 

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
  description: "gv_era19",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_20") 

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
  description: "gv_era20",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_21") 

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
  description: "gv_era21",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_22") 

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
  description: "gv_era22",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_23") 

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
  description: "gv_era23",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_24") 

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
  description: "gv_era24",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_25") 

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
  description: "gv_era25",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_26") 

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
  description: "gv_era26",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_27") 

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
  description: "gv_era27",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_28") 

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
  description: "gv_era28",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_29") 

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
  description: "gv_era29",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_30") 

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
  description: "gv_era30",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_31") 

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
  description: "gv_era31",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_32") 

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
  description: "gv_era32",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_33") 

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
  description: "gv_era33",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_34") 

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
  description: "gv_era34",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_35") 

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
  description: "gv_era35",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_36") 

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
  description: "gv_era36",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_37") 

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
  description: "gv_era37",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_38") 

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
  description: "gv_era38",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_39") 

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
  description: "gv_era39",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_40") 

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
  description: "gv_era40",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5/MONTHLY") .filter(ee.Filter.date("2015-01-01", "2016-01-01")).select(["mean_2m_air_temperature", "total_precipitation", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_41") 

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
  description: "gv_era41",
  fileFormat: "CSV",
});   
