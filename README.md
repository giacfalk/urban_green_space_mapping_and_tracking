# Replication code and data for: Tracking green space along streets of world cities

By Giacomo Falchetta and Ahmed T. Hammad 

Manuscript under peer review, preprint: https://doi.org/10.21203/rs.3.rs-3916891/v1

To replicate the analysis:

- Download input data from https://doi.org/10.5281/zenodo.12504988
- *Optional steps* (processed output data are already available in the Zenodo repository):
     - Adjust your working directory
     - Run [lines 4-11] of workflow/sourcer.R
     - Run the Javascript scripts written by the string_generator_training.R and string_generator_prediction.R files in Google Earth Engine and complete the export to Drive tasks to generate the output .csv files
- Run workflow/sourcer.R [lines 15-46] to train the ML model and make predictions (including figures and tables replication)
