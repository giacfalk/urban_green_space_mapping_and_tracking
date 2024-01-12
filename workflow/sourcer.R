setwd("./urban_green_space_mapping_and_tracking")

source("workflow/merge_and_prepare_data_all_cities.R")

source("workflow/string_generator.R")

# data preparation in GEE happening here, "greenview_export.js" script #

source("workflow/nnListCalc.R")

source("workflow/modelScript.R")

source("workflow/generate_shapefile_for_js_gee_extraction.R")
  
source("workflow/process_roads.R")

source("workflow/cluster_points_along_roads.R")

# data preparation in GEE happening here, "greenview_cities_extrapolate.js" script #

source("workflow/predictions_cities.R")

source("workflow/valid_figure.R")

source("workflow/make_main_figures.R")

setwd("workflow")

source("workflow/calculate_stats.R")

setwd("workflow")

source("workflow/summary_table.R")

source("workflow/make_figures_si.R")

####

p_s <- data.frame(X=c(0), Y=(51.483))
source("workflow/on_demand_gvi_estimator.R")
