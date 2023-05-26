
var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_1") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_1",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_2") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_2",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_3") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_3",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_4") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_4",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_5") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_5",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_6") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_6",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_7") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_7",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_8") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_8",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_9") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_9",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_10") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_10",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_11") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_11",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_12") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_12",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_13") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_13",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_14") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_14",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_15") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_15",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_16") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_16",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_17") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_17",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_18") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_18",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_19") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_19",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_20") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_20",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_21") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_21",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_22") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_22",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_23") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_23",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_24") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_24",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_25") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_25",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_26") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_26",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_27") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_27",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_28") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_28",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_29") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_29",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_30") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_30",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_31") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_31",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_32") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_32",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_33") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_33",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_34") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_34",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_35") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_35",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_36") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_36",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_37") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_37",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_38") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_38",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_39") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_39",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_40") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_40",
  fileFormat: "CSV",
});   


var dwImage = ee.Image("users/giacomofalchetta/ghs_pop_2022")

//Subset Ukraine feature from countries.
var ukr = ee.FeatureCollection("users/giacomofalchetta/gv_41") 

var table = dwImage.reduceRegions({
  collection: ukr , 
  reducer: ee.Reducer.sum(), 
  scale: 10})

//Export to Google Drive
var table = table.select([".*"],null,false);

Export.table.toDrive({
  collection: table,
  description: "gv_pop_41",
  fileFormat: "CSV",
});   
