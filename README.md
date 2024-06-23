# Replication code and data for: Tracking green space along streets of world cities

By Giacomo Falchetta and Ahmed T. Hammad 

Manuscript under peer review, preprint: https://doi.org/10.21203/rs.3.rs-3916891/v1

To replicate the analysis:

- Download input data from https://doi.org/10.5281/zenodo.12504988
- *Optional steps* (processed output data are already available in the Zenodo repository):
     - Adjust your working directory
     - Run [lines 4-11] of workflow/sourcer.R
     - Run the .js scripts in Google Earth Engine (training_data_sentinel_gee.js, training_data_era5_gee.js, training_data_lc_gee.js, training_data_pop_gee.js, prediction_data_gee.js) and complete the export to Drive tasks to generate the output .csv files
- Run workflow/sourcer.R [lines 15-46] to train the ML model and make predictions (including figures and tables replication)
