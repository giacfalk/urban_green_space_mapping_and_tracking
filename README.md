# Replication code and data for: Tracking green space along streets of world cities

Falchetta, G., & Hammad, A. T. (2025). Tracking green space along streets of world cities. Environmental Research: Infrastructure and Sustainability. https://doi.org/10.1088/2634-4505/add9c4 

To replicate the analysis:

- Download input data from Zenodo: https://doi.org/10.5281/zenodo.13886667
- *Optional data extraction steps* (processed output data are already available in the Zenodo repository):
     - Adjust your working directory
     - Run [lines 4-11] of workflow/sourcer.R
     - Run the Javascript scripts written by the string_generator_training.R and string_generator_prediction.R files in Google Earth Engine (https://code.earthengine.google.com) and complete the export to Drive tasks to generate the output .csv files
- Run workflow/sourcer.R [lines 15-46] to train the ML model and make predictions (including figures and tables replication)

The analysis was implemented in the following environment:
- RStudio 2023.03.0
- R version 4.2.3 (2023-03-15 ucrt)
- Platform: x86_64-w64-mingw32/x64 (64-bit)
- Running under: Windows 10 x64 (build 22631)

