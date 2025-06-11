# check missing items per gvs layer, per year
# run merger
# run predictor on my computer

###########

https://code.earthengine.google.com/tasks


> table(gvs2names)
gvs2names
2016 2017 2018 2019 2020 2021 2022 2023 
365  365  364  365  365  365  361  369 

setdiff(1:372, as.numeric(gsub("_2022.csv", "", gsub("G:/Il mio Drive/cities_sampled_new_lc_2022_", "", (gvs2$name[grepl("2022", gvs2$name)])))))
setdiff(1:372, as.numeric(gsub("_2021.csv", "", gsub("G:/Il mio Drive/cities_sampled_new_lc_2021_", "", (gvs2$name[grepl("2021", gvs2$name)])))))
setdiff(1:372, as.numeric(gsub("_2020.csv", "", gsub("G:/Il mio Drive/cities_sampled_new_lc_2020_", "", (gvs2$name[grepl("2020", gvs2$name)])))))
setdiff(1:372, as.numeric(gsub("_2019.csv", "", gsub("G:/Il mio Drive/cities_sampled_new_lc_2019_", "", (gvs2$name[grepl("2019", gvs2$name)])))))
setdiff(1:372, as.numeric(gsub("_2018.csv", "", gsub("G:/Il mio Drive/cities_sampled_new_lc_2018_", "", (gvs2$name[grepl("2018", gvs2$name)])))))
setdiff(1:372, as.numeric(gsub("_2017.csv", "", gsub("G:/Il mio Drive/cities_sampled_newlc_2017_", "", (gvs2$name[grepl("2017", gvs2$name)])))))
setdiff(1:372, as.numeric(gsub("_2016.csv", "", gsub("G:/Il mio Drive/cities_sampled_newlc_2016_", "", (gvs2$name[grepl("2016", gvs2$name)])))))

#########

> table(gvsnames)
gvsnames
2016 2017 2018 2019 2020 2021 2022 2023 
369  369  364  308  289  369  369  369 

###

setdiff(1:372, as.numeric(gsub("_2020.csv", "", gsub("G:/Il mio Drive/cities_sampled_points_new_2020_", "", (gvs$name[grepl("2020", gvs$name)])))))
setdiff(1:372, as.numeric(gsub("_2019.csv", "", gsub("G:/Il mio Drive/cities_sampled_points_new_2019_", "", (gvs$name[grepl("2019", gvs$name)])))))
setdiff(1:372, as.numeric(gsub("_2018.csv", "", gsub("G:/Il mio Drive/cities_sampled_points_new_2018_", "", (gvs$name[grepl("2018", gvs$name)])))))

> setdiff(1:372, as.numeric(gsub("_2020.csv", "", gsub("G:/Il mio Drive/cities_sampled_points_new_2020_", "", (gvs$name[grepl("2020", gvs$name)])))))
[1]  92  93  94  95 
> setdiff(1:372, as.numeric(gsub("_2019.csv", "", gsub("G:/Il mio Drive/cities_sampled_points_new_2019_", "", (gvs$name[grepl("2019", gvs$name)])))))
[1]   3   4   5   9 
> setdiff(1:372, as.numeric(gsub("_2018.csv", "", gsub("G:/Il mio Drive/cities_sampled_points_new_2018_", "", (gvs$name[grepl("2018", gvs$name)])))))
[1]  88  89  90  91 
