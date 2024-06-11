setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening")

setwd("./urban_green_space_mapping_and_tracking")

##########

# model training

file.edit("workflow/merge_and_prepare_data_all_cities.R")

file.edit("workflow/string_generator_training.R")

# data preparation in GEE happening here, "greenview_export.js" script #

file.edit("workflow/prepare_training_data.R")

file.edit("workflow/city_greenness_window_and_obs_distribution.R")

file.edit("workflow/modelScript.R")

##########

# prediction

file.edit("workflow/process_roads.R")

file.edit("workflow/string_generator_prediction.R")

# data preparation in GEE happening here, "greenview_cities_extrapolate.js" script #

file.edit("workflow/cities_predict.R")

##########

# results and figures 

file.edit("workflow/make_main_figures.R")

file.edit("workflow/summary_table.R")

