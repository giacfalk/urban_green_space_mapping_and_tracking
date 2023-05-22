setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/workflow")

source("merge_and_prepare_data_all_cities.R")

source("string_generator.R")

# data preparation in GEE happening here, "greenview_export.js" script #

source("nnListCalc.R")

source("model_training.R")

source("generate_shapefile_for_js_gee_extraction.R")

# data preparation in GEE happening here, "greenview_cities_extrapolate.js" script #

source("predictions_cities.R")

source("valid_figure.R")

source("make_main_figures.R")

setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/workflow")

source("calculate_stats.R")

setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/workflow")

source("summary_table.R")

source("make_figures_si.R")

source("make_dashboard.R")
