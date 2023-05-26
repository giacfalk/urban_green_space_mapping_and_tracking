

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 

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
  description: "cities_sampled_points_2016_1",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 

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
  description: "cities_sampled_points_2016_2",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 

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
  description: "cities_sampled_points_2016_3",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 

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
  description: "cities_sampled_points_2016_4",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 

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
  description: "cities_sampled_points_2016_5",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 

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
  description: "cities_sampled_points_2016_6",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 

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
  description: "cities_sampled_points_2016_7",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 

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
  description: "cities_sampled_points_2016_8",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 

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
  description: "cities_sampled_points_2016_9",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 

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
  description: "cities_sampled_points_2016_10",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 

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
  description: "cities_sampled_points_2016_11",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 

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
  description: "cities_sampled_points_2016_12",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 

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
  description: "cities_sampled_points_2016_13",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 

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
  description: "cities_sampled_points_2016_14",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 

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
  description: "cities_sampled_points_2016_15",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 

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
  description: "cities_sampled_points_2016_16",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 

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
  description: "cities_sampled_points_2016_17",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 

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
  description: "cities_sampled_points_2016_18",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 

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
  description: "cities_sampled_points_2016_19",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 

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
  description: "cities_sampled_points_2016_20",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 

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
  description: "cities_sampled_points_2016_21",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 

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
  description: "cities_sampled_points_2016_22",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 

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
  description: "cities_sampled_points_2016_23",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 

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
  description: "cities_sampled_points_2016_24",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 

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
  description: "cities_sampled_points_2016_25",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 

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
  description: "cities_sampled_points_2016_26",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 

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
  description: "cities_sampled_points_2016_27",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 

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
  description: "cities_sampled_points_2016_28",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 

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
  description: "cities_sampled_points_2016_29",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 

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
  description: "cities_sampled_points_2016_30",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 

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
  description: "cities_sampled_points_2016_31",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 

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
  description: "cities_sampled_points_2016_32",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 

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
  description: "cities_sampled_points_2016_33",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 

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
  description: "cities_sampled_points_2016_34",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 

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
  description: "cities_sampled_points_2022_1",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 

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
  description: "cities_sampled_points_2022_2",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 

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
  description: "cities_sampled_points_2022_3",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 

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
  description: "cities_sampled_points_2022_4",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 

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
  description: "cities_sampled_points_2022_5",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 

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
  description: "cities_sampled_points_2022_6",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 

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
  description: "cities_sampled_points_2022_7",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 

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
  description: "cities_sampled_points_2022_8",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 

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
  description: "cities_sampled_points_2022_9",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 

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
  description: "cities_sampled_points_2022_10",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 

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
  description: "cities_sampled_points_2022_11",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 

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
  description: "cities_sampled_points_2022_12",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 

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
  description: "cities_sampled_points_2022_13",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 

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
  description: "cities_sampled_points_2022_14",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 

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
  description: "cities_sampled_points_2022_15",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 

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
  description: "cities_sampled_points_2022_16",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 

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
  description: "cities_sampled_points_2022_17",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 

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
  description: "cities_sampled_points_2022_18",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 

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
  description: "cities_sampled_points_2022_19",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 

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
  description: "cities_sampled_points_2022_20",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 

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
  description: "cities_sampled_points_2022_21",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 

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
  description: "cities_sampled_points_2022_22",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 

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
  description: "cities_sampled_points_2022_23",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 

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
  description: "cities_sampled_points_2022_24",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 

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
  description: "cities_sampled_points_2022_25",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 

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
  description: "cities_sampled_points_2022_26",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 

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
  description: "cities_sampled_points_2022_27",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 

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
  description: "cities_sampled_points_2022_28",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 

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
  description: "cities_sampled_points_2022_29",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 

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
  description: "cities_sampled_points_2022_30",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 

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
  description: "cities_sampled_points_2022_31",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 

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
  description: "cities_sampled_points_2022_32",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 

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
  description: "cities_sampled_points_2022_33",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 

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
  description: "cities_sampled_points_2022_34",
  fileFormat: "CSV",
});   



var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 

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
  description: "cities_sampled_lc_2022_1",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 

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
  description: "cities_sampled_lc_2022_2",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 

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
  description: "cities_sampled_lc_2022_3",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 

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
  description: "cities_sampled_lc_2022_4",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 

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
  description: "cities_sampled_lc_2022_5",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 

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
  description: "cities_sampled_lc_2022_6",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 

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
  description: "cities_sampled_lc_2022_7",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 

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
  description: "cities_sampled_lc_2022_8",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 

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
  description: "cities_sampled_lc_2022_9",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 

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
  description: "cities_sampled_lc_2022_10",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 

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
  description: "cities_sampled_lc_2022_11",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 

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
  description: "cities_sampled_lc_2022_12",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 

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
  description: "cities_sampled_lc_2022_13",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 

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
  description: "cities_sampled_lc_2022_14",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 

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
  description: "cities_sampled_lc_2022_15",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 

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
  description: "cities_sampled_lc_2022_16",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 

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
  description: "cities_sampled_lc_2022_17",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 

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
  description: "cities_sampled_lc_2022_18",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 

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
  description: "cities_sampled_lc_2022_19",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 

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
  description: "cities_sampled_lc_2022_20",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 

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
  description: "cities_sampled_lc_2022_21",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 

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
  description: "cities_sampled_lc_2022_22",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 

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
  description: "cities_sampled_lc_2022_23",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 

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
  description: "cities_sampled_lc_2022_24",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 

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
  description: "cities_sampled_lc_2022_25",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 

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
  description: "cities_sampled_lc_2022_26",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 

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
  description: "cities_sampled_lc_2022_27",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 

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
  description: "cities_sampled_lc_2022_28",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 

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
  description: "cities_sampled_lc_2022_29",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 

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
  description: "cities_sampled_lc_2022_30",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 

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
  description: "cities_sampled_lc_2022_31",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 

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
  description: "cities_sampled_lc_2022_32",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 

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
  description: "cities_sampled_lc_2022_33",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2022-01-01", "2022-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 

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
  description: "cities_sampled_lc_2022_34",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 

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
  description: "cities_sampled_lc_2016_1",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 

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
  description: "cities_sampled_lc_2016_2",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 

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
  description: "cities_sampled_lc_2016_3",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 

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
  description: "cities_sampled_lc_2016_4",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 

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
  description: "cities_sampled_lc_2016_5",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 

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
  description: "cities_sampled_lc_2016_6",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 

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
  description: "cities_sampled_lc_2016_7",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 

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
  description: "cities_sampled_lc_2016_8",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 

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
  description: "cities_sampled_lc_2016_9",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 

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
  description: "cities_sampled_lc_2016_10",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 

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
  description: "cities_sampled_lc_2016_11",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 

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
  description: "cities_sampled_lc_2016_12",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 

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
  description: "cities_sampled_lc_2016_13",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 

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
  description: "cities_sampled_lc_2016_14",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 

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
  description: "cities_sampled_lc_2016_15",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 

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
  description: "cities_sampled_lc_2016_16",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 

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
  description: "cities_sampled_lc_2016_17",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 

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
  description: "cities_sampled_lc_2016_18",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 

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
  description: "cities_sampled_lc_2016_19",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 

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
  description: "cities_sampled_lc_2016_20",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 

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
  description: "cities_sampled_lc_2016_21",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 

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
  description: "cities_sampled_lc_2016_22",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 

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
  description: "cities_sampled_lc_2016_23",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 

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
  description: "cities_sampled_lc_2016_24",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 

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
  description: "cities_sampled_lc_2016_25",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 

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
  description: "cities_sampled_lc_2016_26",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 

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
  description: "cities_sampled_lc_2016_27",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 

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
  description: "cities_sampled_lc_2016_28",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 

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
  description: "cities_sampled_lc_2016_29",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 

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
  description: "cities_sampled_lc_2016_30",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 

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
  description: "cities_sampled_lc_2016_31",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 

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
  description: "cities_sampled_lc_2016_32",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 

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
  description: "cities_sampled_lc_2016_33",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2016-09-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.median()
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 

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
  description: "cities_sampled_lc_2016_34",
  fileFormat: "CSV",
});   



//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 


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
  description: "cities_sampled_points_era_2016_1",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 


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
  description: "cities_sampled_points_era_2016_2",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 


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
  description: "cities_sampled_points_era_2016_3",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 


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
  description: "cities_sampled_points_era_2016_4",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 


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
  description: "cities_sampled_points_era_2016_5",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 


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
  description: "cities_sampled_points_era_2016_6",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 


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
  description: "cities_sampled_points_era_2016_7",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 


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
  description: "cities_sampled_points_era_2016_8",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 


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
  description: "cities_sampled_points_era_2016_9",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 


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
  description: "cities_sampled_points_era_2016_10",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 


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
  description: "cities_sampled_points_era_2016_11",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 


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
  description: "cities_sampled_points_era_2016_12",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 


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
  description: "cities_sampled_points_era_2016_13",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 


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
  description: "cities_sampled_points_era_2016_14",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 


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
  description: "cities_sampled_points_era_2016_15",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 


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
  description: "cities_sampled_points_era_2016_16",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 


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
  description: "cities_sampled_points_era_2016_17",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 


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
  description: "cities_sampled_points_era_2016_18",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 


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
  description: "cities_sampled_points_era_2016_19",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 


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
  description: "cities_sampled_points_era_2016_20",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 


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
  description: "cities_sampled_points_era_2016_21",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 


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
  description: "cities_sampled_points_era_2016_22",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 


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
  description: "cities_sampled_points_era_2016_23",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 


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
  description: "cities_sampled_points_era_2016_24",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 


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
  description: "cities_sampled_points_era_2016_25",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 


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
  description: "cities_sampled_points_era_2016_26",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 


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
  description: "cities_sampled_points_era_2016_27",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 


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
  description: "cities_sampled_points_era_2016_28",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 


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
  description: "cities_sampled_points_era_2016_29",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 


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
  description: "cities_sampled_points_era_2016_30",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 


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
  description: "cities_sampled_points_era_2016_31",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 


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
  description: "cities_sampled_points_era_2016_32",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 


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
  description: "cities_sampled_points_era_2016_33",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2016-01-01", "2017-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 


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
  description: "cities_sampled_points_era_2016_34",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 


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
  description: "cities_sampled_points_era_2022_1",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 


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
  description: "cities_sampled_points_era_2022_2",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 


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
  description: "cities_sampled_points_era_2022_3",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 


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
  description: "cities_sampled_points_era_2022_4",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 


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
  description: "cities_sampled_points_era_2022_5",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 


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
  description: "cities_sampled_points_era_2022_6",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 


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
  description: "cities_sampled_points_era_2022_7",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 


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
  description: "cities_sampled_points_era_2022_8",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 


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
  description: "cities_sampled_points_era_2022_9",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 


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
  description: "cities_sampled_points_era_2022_10",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 


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
  description: "cities_sampled_points_era_2022_11",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 


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
  description: "cities_sampled_points_era_2022_12",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 


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
  description: "cities_sampled_points_era_2022_13",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 


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
  description: "cities_sampled_points_era_2022_14",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 


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
  description: "cities_sampled_points_era_2022_15",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 


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
  description: "cities_sampled_points_era_2022_16",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 


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
  description: "cities_sampled_points_era_2022_17",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 


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
  description: "cities_sampled_points_era_2022_18",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 


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
  description: "cities_sampled_points_era_2022_19",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 


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
  description: "cities_sampled_points_era_2022_20",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 


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
  description: "cities_sampled_points_era_2022_21",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 


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
  description: "cities_sampled_points_era_2022_22",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 


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
  description: "cities_sampled_points_era_2022_23",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 


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
  description: "cities_sampled_points_era_2022_24",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 


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
  description: "cities_sampled_points_era_2022_25",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 


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
  description: "cities_sampled_points_era_2022_26",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 


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
  description: "cities_sampled_points_era_2022_27",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 


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
  description: "cities_sampled_points_era_2022_28",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 


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
  description: "cities_sampled_points_era_2022_29",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 


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
  description: "cities_sampled_points_era_2022_30",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 


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
  description: "cities_sampled_points_era_2022_31",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 


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
  description: "cities_sampled_points_era_2022_32",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 


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
  description: "cities_sampled_points_era_2022_33",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var era5 = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR") .filter(ee.Filter.date("2020-01-01", "2021-01-01")).select(["temperature_2m", "total_precipitation_sum", "surface_pressure", "u_component_of_wind_10m", "v_component_of_wind_10m"])


//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 


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
  description: "cities_sampled_points_era_2022_34",
  fileFormat: "CSV",
});   



var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_1") 

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
  description: "cities_sampled_points_pop1",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_2") 

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
  description: "cities_sampled_points_pop2",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_3") 

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
  description: "cities_sampled_points_pop3",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_4") 

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
  description: "cities_sampled_points_pop4",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_5") 

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
  description: "cities_sampled_points_pop5",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_6") 

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
  description: "cities_sampled_points_pop6",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_7") 

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
  description: "cities_sampled_points_pop7",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_8") 

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
  description: "cities_sampled_points_pop8",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_9") 

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
  description: "cities_sampled_points_pop9",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_10") 

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
  description: "cities_sampled_points_pop10",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_11") 

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
  description: "cities_sampled_points_pop11",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_12") 

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
  description: "cities_sampled_points_pop12",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_13") 

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
  description: "cities_sampled_points_pop13",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_14") 

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
  description: "cities_sampled_points_pop14",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_15") 

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
  description: "cities_sampled_points_pop15",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_16") 

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
  description: "cities_sampled_points_pop16",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_17") 

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
  description: "cities_sampled_points_pop17",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_18") 

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
  description: "cities_sampled_points_pop18",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_19") 

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
  description: "cities_sampled_points_pop19",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_20") 

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
  description: "cities_sampled_points_pop20",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_21") 

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
  description: "cities_sampled_points_pop21",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_22") 

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
  description: "cities_sampled_points_pop22",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_23") 

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
  description: "cities_sampled_points_pop23",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_24") 

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
  description: "cities_sampled_points_pop24",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_25") 

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
  description: "cities_sampled_points_pop25",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_26") 

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
  description: "cities_sampled_points_pop26",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_27") 

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
  description: "cities_sampled_points_pop27",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_28") 

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
  description: "cities_sampled_points_pop28",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_29") 

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
  description: "cities_sampled_points_pop29",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_30") 

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
  description: "cities_sampled_points_pop30",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_31") 

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
  description: "cities_sampled_points_pop31",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_32") 

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
  description: "cities_sampled_points_pop32",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_33") 

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
  description: "cities_sampled_points_pop33",
  fileFormat: "CSV",
});   

var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")
var dwImage = ee.ImageCollection(dwImage)

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/cities_sampled_points_34") 

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
  description: "cities_sampled_points_pop34",
  fileFormat: "CSV",
});   

