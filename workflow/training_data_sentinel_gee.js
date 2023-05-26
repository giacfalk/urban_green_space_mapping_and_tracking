

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_1") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_1",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_2") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_2",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_3") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_3",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_4") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_4",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_5") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_5",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_6") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_6",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_7") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_7",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_8") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_8",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_9") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_9",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_10") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_10",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_11") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_11",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_12") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_12",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_13") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_13",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_14") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_14",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_15") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_15",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_16") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_16",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_17") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_17",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_18") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_18",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_19") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_19",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_20") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_20",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_21") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_21",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_22") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_22",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_23") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_23",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_24") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_24",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_25") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_25",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_26") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_26",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_27") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_27",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_28") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_28",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_29") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_29",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_30") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_30",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_31") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_31",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_32") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_32",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_33") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_33",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_34") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_34",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_35") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_35",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_36") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_36",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_37") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_37",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_38") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_38",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_39") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_39",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_40") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_40",
  fileFormat: "CSV",
});   

//get MODIS NDVI
var collection = ee.ImageCollection("COPERNICUS/S2")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_41") 

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

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_41",
  fileFormat: "CSV",
});   
