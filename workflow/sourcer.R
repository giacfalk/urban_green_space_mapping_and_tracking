# Tracking green space along streets of world cities
# Giacomo Falchetta and Ahmed T. Hammad 

setwd("C:/Users/Utente/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")

##########
# prediction

file.edit("workflow/revised_scripts_provide/process_roads.R")

file.edit("workflow/revised_scripts_provide/string_generator_prediction.R")

# data preparation in GEE happening here, "greenview_cities_extrapolate.js" script #

file.edit("workflow/revised_scripts_provide/cities_predict_multiyear.R")

file.edit("workflow/revised_scripts_provide/cluster_points_along_roads.R")

