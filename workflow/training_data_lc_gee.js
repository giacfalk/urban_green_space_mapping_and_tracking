

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_1") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_1",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_2") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_2",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_3") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_3",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_4") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_4",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_5") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_5",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_6") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_6",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_7") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_7",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_8") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_8",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_9") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_9",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_10") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_10",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_11") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_11",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_12") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_12",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_13") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_13",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_14") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_14",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_15") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_15",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_16") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_16",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_17") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_17",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_18") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_18",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_19") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_19",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_20") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_20",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_21") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_21",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_22") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_22",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_23") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_23",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_24") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_24",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_25") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_25",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_26") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_26",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_27") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_27",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_28") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_28",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_29") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_29",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_30") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_30",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_31") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_31",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_32") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_32",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_33") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_33",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_34") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_34",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_35") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_35",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_36") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_36",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_37") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_37",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_38") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_38",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_39") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_39",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_40") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_40",
  fileFormat: "CSV",
});   

var COL_FILTER = ee.Filter.and(
  ee.Filter.date("2016-01-01", "2017-01-01"));

var dwCol = ee.ImageCollection("GOOGLE/DYNAMICWORLD/V1").filter(COL_FILTER);
var dwImage = dwCol.mean()

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_41") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.median(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_lc_41",
  fileFormat: "CSV",
});   
