# Tracking green space along streets of world cities
# Giacomo Falchetta and Ahmed T. Hammad 

setwd("./urban_green_space_mapping_and_tracking")

##########
# model training

source("workflow/merge_and_prepare_data_all_cities.R")

source("workflow/string_generator_training.R")

# data preparation in GEE happening here, "greenview_export.js" script #

source("workflow/prepare_training_data.R")

source("workflow/city_greenness_window_and_obs_distribution.R")

source("workflow/modelScript.R")

##########
# prediction

source("workflow/process_roads.R")

source("workflow/string_generator_prediction.R")

# data preparation in GEE happening here, "greenview_cities_extrapolate.js" script #

source("workflow/cities_predict_multiyear.R")

source("workflow/cluster_points_along_roads.R")

##########
# results and figures 

source("workflow/make_main_figures.R")

source("workflow/summary_table.R")

##########
# supplementary analysis

source("workflow/random_sample_test.R")

source("workflow/error_analysis_and_si_tables.R")

