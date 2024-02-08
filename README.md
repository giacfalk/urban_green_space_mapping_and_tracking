# Replication code and data for: Tracking green space along streets of world cities
By Giacomo Falchetta and Ahmed T. Hammad
Manuscript under peer review, preprint: https://doi.org/10.21203/rs.3.rs-3916891/v1

To replicate the analysis:

- Download input data from https://doi.org/10.5281/zenodo.10633788
- *Optional steps* (processed output data are already available in the Zenodo repository):
     - Run [lines 1-7] of workflow/sourcer.R
     - Run the .js scripts in Google Earth Engine (training_data_sentinel_gee.js, training_data_era5_gee.js, training_data_lc_gee.js, training_data_pop_gee.js, prediction_data_gee.js) and complete the export to Drive tasks to generate the output .csv files
- Run workflow/sourcer.R [lines 9-37] to train the ML model and make predictions (including figures and tables replication)

_______________

To make on-demand urban green space GVI estimation for user-inputed coordinate points:
- Configure the [rgee package](https://github.com/r-spatial/rgee) on your local computer
- Update your Google Earth Engine-enabled email in [line 7] of the script workflow/on_demand_gvi_estimator.R
- Define your custom set of coordinate points in [line 41] of the script workflow/sourcer.R
- Run workflow/sourcer.R [line 42] to make on-demand urban green space GVI estimation and visualize results
