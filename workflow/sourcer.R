setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening")

setwd("./urban_green_space_mapping_and_tracking")

file.edit("workflow/merge_and_prepare_data_all_cities.R")

file.edit("workflow/string_generator.R")

# data preparation in GEE happening here, "greenview_export.js" script #

file.edit("workflow/nnListCalc.R")

file.edit("workflow/modelScript.R")

file.edit("workflow/generate_shapefile_for_js_gee_extraction.R")
  
file.edit("workflow/process_roads.R")

# data preparation in GEE happening here, "greenview_cities_extrapolate.js" script #

file.edit("workflow/predictions_cities.R")

file.edit("workflow/valid_figure.R")

file.edit("workflow/cluster_points_along_roads.R")

file.edit("workflow/make_main_figures.R")

setwd("workflow")

file.edit("workflow/calculate_stats.R")

setwd("workflow")

file.edit("workflow/summary_table.R")

file.edit("workflow/make_figures_si.R")

####

p_s <- data.frame(X=c(0), Y=(51.483))
file.edit("workflow/on_demand_gvi_estimator.R")
