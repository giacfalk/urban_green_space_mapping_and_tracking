# Replication code and data for: Global urban green space is shrinking
By Giacomo Falchetta and Ahmed T. Hammad

To replicate the analysis:

- Download input data from https://doi.org/10.5281/zenodo.8001677
- *Optional steps* (processed output data are already available in the Zenodo repository):
     - Run [lines 1-5] of workflow/sourcer.R
     - Run the .js scripts in Google Earth Engine (training_data_sentinel_gee.js, training_data_era5_gee.js, training_data_lc_gee.js, training_data_pop_gee.js, prediction_data_gee.js) and complete the export to Drive tasks to generate the output .csv files
- Run workflow/sourcer.R [lines 9-31] to train the ML model and make predictions (including figures and tables replication)

To make on-demand urban green space GVI estimation for user-inputed coordinate points:
- Configure the [rgee package](https://github.com/r-spatial/rgee) on your local computer
- Update your Google Earth Engine-enabled email in [line 7] of the script workflow/on_demand_gvi_estimator.R
- Define your custom set of coordinate points in [line 35] of the script workflow/sourcer.R
- Run workflow/sourcer.R [line 36] to make on-demand urban green space GVI estimation and visualize results

Manuscript under peer review.
