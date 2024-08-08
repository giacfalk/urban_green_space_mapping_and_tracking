
##############################################################################

# This Rscript: 

#   1) Make main paper result figures

##############################################################################

rm(list=ls(all=TRUE)) # Removes all previously created variables
gc() 

library(caret)
library(CAST)
library(rworldmap)
library(countrycode)
library(wbstats)
library(rasterVis)
require(rgdal)
require(maptools)
library(ggthemes)
library(ggrepel)
library(sf)
library(tidyverse)
library(raster)
library(dplyr)
pacman::p_load(data.table,panelr,jtools, ggplot2,purrr,xtable,texreg,
               fixest,lmtest,caret,MLmetrics,sandwich)

load("data/validation/after_points_030624.Rdata")

setwd("data/validation/")


# l <- out_ndvi_m %>% filter(out_b<0) %>% st_as_sf(coords=c("x", "y"), crs=4326) %>% dplyr::select(out_b)
# library(mapview)
# mapview(l)
# 
# summary(out_ndvi_m %>% pull(water))
# summary(out_ndvi_m %>% filter(out_b<0) %>% pull(water))

###########################

#out_ndvi_m %>% filter(city=="London") %>% st_as_sf(coords=c("x", "y"), crs=4326) %>% mapview::mapview(zcol="out_b")

# Figure 2 

sf <- read_sf("GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

###

out_ndvi_m$city <- sf_c$UC_NM_MN[as.numeric((sapply(strsplit(out_ndvi_m$id,"_"), `[`, 1)))]

#----------------------------------------
summ(baseModel<-lm(log(out_b)~year,data=out_ndvi_m),digits=4,robust=TRUE)
baseModel<-coeftest(baseModel, vcov = vcovHC(baseModel), type = "HC0")
baseModel
(exp(-5.0936e-03) - 1)*100

#----------------------------------------
# Convert to pdata.frame
# pdata <- pdata.frame(out_ndvi_m, index = c("id","year"))
# model_fe <- plm(log(out_b) ~ year, data = pdata, model = "within")
# summary(model_fe,vcov = vcovHC(model_fe), type = "HC0")
#median(model_fe$coefficients)
#The coefficients indicate how log(GVI) has changed each year compared to the 
#base year (2016). log(GVI) generally decreased from 2016 to 2023,
#with a few fluctuations, such as an increase in 2021 corresponding to post-COVID. 
#----------------------------------------

model_fe_sample_extra1<-feols(log(out_b) ~ year| id , data = out_ndvi_m)

model_fe_sample_extra2<-feols(log(out_b) ~ year| id + city , data = out_ndvi_m)

model_fe_sample_extra3<-feols(log(out_b) ~ factor(year) , data = out_ndvi_m)

model_fe_sample_extra4<-feols(log(out_b) ~ factor(year)| id , data = out_ndvi_m)

model_fe_sample_extra5<-feols(log(out_b) ~ factor(year)| id + city , data = out_ndvi_m)

# FE model with yearly dummies to consider non-linearity
# consistent negative effect w.r.t. 2016
# 2021 (post-covid) is positive

screenreg(list(baseModel,model_fe_sample_extra1,model_fe_sample_extra2, model_fe_sample_extra3, model_fe_sample_extra4,model_fe_sample_extra5),digits = 3,
          custom.model.names =c("Trend (OLS)","Trend - Fixed Effects (Sample)","Trend - Fixed Effects (Sample + city)", "Dummies (OLS)", "Dummies - Fixed Effects (sample)", "Dummies - Fixed Effects (sample + city)"),
          custom.note = "%stars. Robust standard errors in parentheses.",
          include.rsquared = FALSE,
          include.adjrs = FALSE,
          include.nobs = FALSE,
          include.rmse = FALSE)

(exp(mean(coef(model_fe_sample_extra4))) -1)*100 # avg. difference w.r.t. 2016, about 4x times the avg. yearly time trend

texreg(list(baseModel,model_fe_sample_extra1,model_fe_sample_extra2, model_fe_sample_extra3, model_fe_sample_extra4,model_fe_sample_extra5),digits = 3,
       custom.model.names =c("Trend (OLS)","Trend - Fixed Effects (Sample)","Trend - Fixed Effects (Sample + city)", "Dummies (OLS)", "Dummies - Fixed Effects (sample)", "Dummies - Fixed Effects (sample + city)"),
       custom.note = "%stars. Robust standard errors in parentheses.",
       include.rsquared = FALSE,
       caption="",
       include.adjrs = FALSE,
       include.nobs = FALSE,
       include.rmse = FALSE,
       file="reg_tab.tex")
#        dcolumn = TRUE, booktabs = TRUE,use.packages = FALSE,float.pos = "h")


mean(out_ndvi_m$out_b, na.rm=T)

###

## Figure 2/stats: perhaps population weighted stats (in substitution or in addition) ??

grr <- out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T))
grr <- grr %>% group_by(city) %>% dplyr::mutate(out_b_diff = out_b[8]-out_b[1])

grr <- merge(grr, sf_c, by.x="city", by.y="UC_NM_MN")
grr <- st_as_sf(grr)
grr <- st_transform(grr, "ESRI:54009")

####

data(wrld_simpl)
wrld_simpl_sf <- st_as_sf(wrld_simpl)
wrld_simpl_sf <- st_transform(wrld_simpl_sf, "ESRI:54009")
wrld_simpl_sf <- filter(wrld_simpl_sf, NAME!="Antarctica")

load(url("https://github.com/valentinitnelav/RandomScripts/blob/master/NaturalEarth.RData?raw=true"))

PROJ <- "+proj=eck4 +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs" 
NE_graticules.prj <- spTransform(NE_graticules, CRSobj = PROJ)

#grr <- filter(grr, !is.na(grr$out_b_diff))

grr_m <- grr %>% group_by(city) %>% dplyr::mutate(out_b_mean = mean(out_b, na.rm=T))

ggplot()+
  theme_void()+
  geom_sf(data=wrld_simpl_sf, fill="#fafafa", colour="black", lwd=0.25)+
  stat_sf_coordinates(data=st_centroid(grr_m[grr_m$year==2023,]), colour="white", size=3.5)+
  stat_sf_coordinates(data=st_centroid(grr_m[grr_m$year==2023,]), aes(colour=out_b_mean), size=2.8)+
  scale_colour_viridis_c(name="")+
  theme(legend.position = "bottom", legend.direction = "horizontal",  plot.margin = unit(c(t=0, r=2, b=0, l=0), unit="cm"), legend.key.width = unit(1.25, "cm"))+
  xlab("")+
  ylab("")+
  ggtitle("Predicted city-level mean GVI, average 2016-2023")+
  theme(plot.title = element_text(hjust = 0.5))

ggsave("Figure2.png", scale=2, height = 4, width = 8)
ggsave("Figure2.pdf", scale=2, height = 4, width = 8)

####################

# Figure 3

grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"
grrregio = grr %>% st_set_geometry(NULL) %>%  group_by(city, GRGN_L1,GRGN_L2, year) %>% dplyr::summarise(out_b=median(out_b, na.rm=T))

# calculate trends in the means 

library(broom)

fitted_models <- out_ndvi_m %>% nest(data = -city) %>% mutate(model = map(data, ~feols(log(out_b)~year | id, data = .)), tidied = map(model, tidy)) %>% unnest(tidied)
fitted_models <- filter(fitted_models, term=="year") %>% dplyr::select(city, estimate, std.error, p.value)

##

sum(fitted_models$p.value<0.01)/nrow(fitted_models)*100

###

grr <- merge(grr, fitted_models, by.x="city")
grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"

out_ndvi_m$GRGN_L1 <- sf_c$GRGN_L1[match(out_ndvi_m$city, sf_c$UC_NM_MN)]


###

cis <- grr
cis <- dplyr::select(cis, city, year, out_b)
cis$geometry<-NULL
cis <- ungroup(cis) %>% filter(city!="N/A")

cis <- pivot_wider(cis, id_cols = c(1), names_from = c(2), values_from = c(3))

cis2 <- grr
cis2 <- dplyr::select(cis2, city, year, p.value, estimate)
cis2$geometry<-NULL
cis2 <- ungroup(cis2) %>% filter(city!="N/A")
cis2 <- cis2 %>% group_by(city) %>% dplyr::summarise(estimate=mean(round(estimate, 3)*100), p.value=mean(p.value, 3))

cis <- merge(cis, cis2, "city")

colnames(cis) <- c("City", "GVI, 2016", "GVI, 2017", "GVI, 2018", "GVI, 2019", "GVI, 2020", "GVI, 2021", "GVI, 2022", "GVI, 2023", "Estimated avg. % change / yr.", "p-value of change trend")

library(xtable)

sink(paste0(getwd(), "/tab_all.tex"))
tableSb <- xtable(cis)
print(tableSb, include.rownames=F, tabular.environment="longtable", floating=FALSE)
sink()

###

grrregio_pval <- out_ndvi_m %>% nest(data = -GRGN_L1) %>% mutate(model = map(data, ~feols(log(out_b)~year | id + city, data = .)), tidied = map(model, tidy)) %>% unnest(tidied)
grrregio_pval <- filter(grrregio_pval, term=="year") %>% dplyr::select(GRGN_L1, estimate, std.error, p.value)

grr$geometry <- NULL

grrregio <- merge(grrregio, grrregio_pval, "GRGN_L1")

grrregio = grrregio %>% group_by(GRGN_L1) %>% dplyr::mutate(ordvar=median(out_b, na.rm=T), pval=median(p.value, na.rm=T))
grrregiolab = grrregio %>% group_by(GRGN_L1) %>% dplyr::summarise(out_b=median(out_b, na.rm=T), ordvar=median(ordvar, na.rm=T), pval=round(median(pval, na.rm=T), 2))

#remotes::install_github('rpkgs/gg.layers')
library(gg.layers)

grrregio$GRGN_L1[grrregio$GRGN_L1=="Latin America and the Caribbean"] <- "Lat. Amer. & Caribb."
grrregiolab$GRGN_L1[grrregiolab$GRGN_L1=="Latin America and the Caribbean"] <- "Lat. Amer. & Caribb."

fig2a <- ggplot()+
  theme_classic()+
  geom_boxplot2(data= grrregio, aes(y=out_b, x=reorder(GRGN_L1, -ordvar), fill=as.factor(year)), width.errorbar = 0.15)+
  geom_text(data = grrregiolab, aes(y=5, x=reorder(GRGN_L1, -ordvar), label=ifelse(pval==0, "p<0.01", paste0("p=", pval))))+
  xlab("")+
  ylab("GVI macro-region range of city-level medians")+
  scale_fill_brewer(name="Year", palette = "Greens")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")+
  guides(fill=guide_legend(nrow=1,byrow=TRUE))

###

grr <- out_ndvi_m

#unique(grr$city[grr$pval<0.05])

slice_min_max <- function(df, order_by = value, n = 1) {
  
  order_by = enquo(order_by)
  
  min <- slice_min(df, !!order_by, n = n) %>%
    mutate(type = "min")
  
  max <- slice_max(df, !!order_by, n = n) %>%
    mutate(type = "max")
  
  df <- bind_rows(min, max) %>%
    as_tibble()
  
  return(df)
  
}

grr <- filter(grr, !is.na(city) & city!="N/A")

grr_top_sel <- sf_c %>% ungroup() %>% slice_max(P15, n = 50) %>% pull(UC_NM_MN)

rm(gvs); gc()

grr_top <- filter(grr, city %in% grr_top_sel)

grr_top <- dplyr::select(grr_top, city, year)

grr_top <- merge(grr_top, fitted_models, by.x="city")

grrregio = grr_top %>% group_by(city) %>% dplyr::mutate(ordvar=median(estimate, na.rm=T), pval=median(p.value, na.rm=T))

grrregio_f <- grrregio %>% group_by(city) %>% filter(year==2023) %>% sample_n(1)

#remotes::install_github('rpkgs/gg.layers')
library(gg.layers)

library(scales)

fig2b <- ggplot()+
  theme_classic()+
  geom_hline(yintercept = 0, colour="black", alpha=0.25)+
  geom_errorbar(data= grrregio_f %>% filter(year==2016 | year==2023), aes(ymin=estimate+std.error*2.576, ymax=estimate-std.error*2.576, x=reorder(city, -ordvar)))+
  xlab("")+
  ylab("Avg. % yearly change in city-level GVI, 2016-2023")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")+
  scale_y_continuous(labels = percent)

library(patchwork)
library(ggsci)

(((fig2a + scale_fill_brewer(name="Year", palette="Greens")) + (fig2b)) & theme(legend.position = "bottom")) + plot_layout(ncol=1) + plot_annotation(tag_levels = "A")

ggsave("Figure3.png", height = 10, width = 7.5)
ggsave("Figure3.pdf", height = 10, width = 7.5)

  ######################
# within city analysis
# cluster polygons

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking")
fls <- list.files(pattern="clusters_")
fls <- fls[grepl("gpkg", fls)]

sf <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") %>% dplyr::select(UC_NM_MN, P15, GRGN_L1) %>% st_set_geometry(NULL) # Cities database

ox_diagram_o <- list()

for (i in fls){
  print(match(i, fls))
  
  ox_diagram <- read_sf(i)
  
  ox_diagram <- merge(ox_diagram, sf, by.x="city", by.y="UC_NM_MN")

    # pop extract
    
    pop = raster("data/GHS_POP_E2015_GLOBE_R2019A_4326_30ss_V1_0.tif")
    ox_diagram$pop = exactextractr::exact_extract(pop, ox_diagram, "sum")
    
    ox_diagram <- ox_diagram %>% dplyr::arrange(out_b)
    ox_diagram <- ox_diagram %>% mutate(pop_c = cumsum(pop)/sum(pop))
    
    ox_diagram_o[[match(i, fls)]] <- ox_diagram
    
  }


for (i in 1:length(ox_diagram_o)){
  ox_diagram_o[[i]] <- st_transform(ox_diagram_o[[i]], 4326)
}


ox_diagram_all <- bind_rows(ox_diagram_o)

ox_diagram_all_sel <- ox_diagram_all[!duplicated(ox_diagram_all$city),] %>% dplyr::group_by(GRGN_L1) %>% dplyr::slice_max(P15, n = 5) %>% pull(city)

ox_diagram_all_sel <- filter(ox_diagram_all, city %in% ox_diagram_all_sel)

ox_diagram_all_sel$GRGN_L1[ox_diagram_all_sel$GRGN_L1=="Latin America and the Caribbean"] <- "Lat. Amer. & Caribb."

ox_diagram_all_sel <- arrange(ox_diagram_all_sel, GRGN_L1)

pp <- ggplot()+
  theme_classic()+
  geom_line(data=ox_diagram_all_sel, aes(y=pop_c, x=out_b, group = city, colour=city), size=0.45)+
  xlab("GVI exposure")+
  facet_wrap(vars(GRGN_L1))+ 
  geom_label_repel(data=ox_diagram_all_sel %>% st_set_geometry(NULL) %>%  group_by(GRGN_L1, city) %>% dplyr::summarise(out_b=median(out_b, na.rm=T), pop_c=median(pop_c, na.rm=T)), aes(x=out_b, y=pop_c, label=city, colour=city), size=2.5)+
  ylab("")+
  scale_y_continuous(labels=scales::label_percent())+
  theme(legend.position = "none", legend.direction = "horizontal", legend.key.size = unit(0.2, "cm"))+
  guides(colour=guide_legend(nrow=3,byrow=TRUE))+
  xlim(c(0, 35))


ox_diagram_regional <- ox_diagram_all %>% group_by(GRGN_L1) %>% dplyr::arrange(out_b) %>% mutate(pop_c = cumsum(pop)/sum(pop))

#ox_diagram_regional_lab <- ox_diagram_all %>% group_by(GRGN_L1) %>% dplyr::summarise(out_b=mean(out_b, na.rm=T), pop_c=mean(pop_c, na.rm=T))

ox_diagram_regional$GRGN_L1[ox_diagram_regional$GRGN_L1=="Latin America and the Caribbean"] <- "Lat. Amer. & Caribb."

p_r <- ggplot(data=ox_diagram_regional, aes(y=pop_c, x=out_b, group = GRGN_L1, colour=GRGN_L1))+
  theme_classic()+
  geom_line(size=0.75)+
  #geom_label_repel(data=ox_diagram_regional_lab, aes(y=pop_c, x=out_b, label=GRGN_L1))+
  ylab("Cumulative fraction of the population")+
  xlab("GVI exposure")+
  ylab("Cum. frac. of population")+
  scale_y_continuous(labels=scales::label_percent())+
  theme(legend.position = "bottom", legend.direction = "horizontal", legend.key.size = unit(0.2, "cm"))+
  guides(colour=guide_legend(nrow=4,byrow=TRUE))+
  xlim(c(0, 35))

library(patchwork)
library(ggpubr)

palette <-   get_palette("npg",  30)

set.seed(2023)

lower_pane_fig_4 <- ((p_r + ggsci::scale_colour_npg(name="")) + (pp + scale_colour_manual(values = sample(palette))) + plot_annotation(tag_levels = list("A", "B")) + plot_layout(widths = c(0.8, 1.35)))

ggsave("Figure4_lower.pdf", lower_pane_fig_4, scale=1.5, height = 3.5, width = 6)

########

sf <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg")

for (c in unique(paste0(ox_diagram_all_sel$city, "_", ox_diagram_all_sel$GRGN_L1))){
  
  print(c)
  
  aa <- ox_diagram_all_sel %>% dplyr::filter(city==unlist(strsplit(c, "_"))[1] & GRGN_L1==unlist(strsplit(c, "_"))[2])
  
  ctry <- aa$GRGN_L1
  
  library(ggspatial)
  
  ggplot()+
    annotation_map_tile(zoom = 12)+
    theme_classic()+
    geom_sf(data=sf %>% filter(UC_NM_MN==c), colour="black", fill="transparent", )+
    geom_sf(data=aa, aes(fill=out_b))+
    scale_fill_distiller(name="GVI", palette = "Greens", direction = 1)+
    ggtitle(paste0(unlist(strsplit(c, "_"))[1]))
  
  ggsave(paste0(unlist(strsplit(c, "_"))[1], ".png"), height = 5, width = 5, scale=1.2)
  
}

#

c <- "Johannesburg_Africa"

aa <- ox_diagram_all_sel %>% dplyr::filter(city==unlist(strsplit(c, "_"))[1] & GRGN_L1==unlist(strsplit(c, "_"))[2])

ctry <- aa$GRGN_L1

Johannesburg_Africa <- ggplot()+
  annotation_map_tile(zoom = 12)+
  theme_classic()+
  geom_sf(data=sf %>% filter(UC_NM_MN==c), colour="black", fill="transparent", )+
  geom_sf(data=aa, aes(fill=out_b))+
  scale_fill_distiller(name="GVI", palette = "Greens", direction = 1)+
  ggtitle(paste0("C                              ", unlist(strsplit(c, "_"))[1]))
  
ggsave("Figure4_example.pdf", Johannesburg_Africa, height = 5, width = 5, scale=1.2)


library(patchwork)

lower_pane_fig_4 +Johannesburg_Africa

###############

library(acid)
library(matrixStats)

ox_diagram_all <- ox_diagram_all %>%  st_set_geometry(NULL) %>% ungroup()

gg <- ox_diagram_all %>%  group_by(city) %>% dplyr::summarise(gini=as.numeric(acid::weighted.gini(x=out_b, w=pop_c)), gvi=matrixStats::weightedMedian(x=out_b, w=pop_c, na.rm=T)) 

gg <- gg %>% ungroup() %>% group_by(city) %>% dplyr::summarise(gini=mean(gini), gvi=mean(gvi))

gg <- arrange(gg, desc(gini))

library(xtable)

sink(paste0(getwd(), "/gini_table.tex"))
tableSb <- xtable(gg, caption = "Gini indexes of GVI exposure to the residential population, 2016-2023 average", label = "tab:gini")
print(tableSb, include.rownames=F, tabular.environment="longtable", floating=FALSE)
sink()


###################################
###################################
###################################
###################################
# calculate statistics

out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T)) %>% ungroup() %>% group_by(year) %>%   dplyr::summarise(out_b = mean(out_b, na.rm=T))

#

mean(out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T)) %>% ungroup() %>% group_by(year) %>%   dplyr::summarise(out_b = mean(out_b, na.rm=T)) %>% pull(out_b))

# greenest and least green cities

sf <- read_sf("GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

grr <- merge(grr, sf_c, by.x="city", by.y="UC_NM_MN")
grr$geometry <- NULL

View(grr %>% group_by(city, GRGN_L1, P15) %>% summarise(out_b=mean(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>%  slice_max(P15, n=10)%>% arrange(desc(out_b)) %>% slice(1))

View(grr %>% group_by(city, GRGN_L1, P15) %>% summarise(out_b=mean(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>%  slice_max(P15, n=10)%>% arrange(out_b) %>% slice(1))


#

out_ndvi_m %>% filter(year==2023) %>%  group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% arrange(desc(out_b))

out_ndvi_m %>% filter(year==2023) %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(median = median(out_b, na.rm=T), min = min(out_b, na.rm=T), max = max(out_b, na.rm=T))

#########

grr %>% filter(year==2023) %>%  group_by(city, GRGN_L2) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L2) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% arrange(desc(out_b))

#########

# out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% summarise(t.test(.$out_b[.$year==2023], .$out_b[.$year==2016])$estimate)

# out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% summarise(t.test(.$out_b[.$year==2023], .$out_b[.$year==2016])$p.value)


# absolute value decline in GVI
out_ndvi_m %>% filter(year==2023) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(median = median(out_b, na.rm=T)) - out_ndvi_m %>% filter(year==2016) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(median = median(out_b, na.rm=T))

# percentage decline in GVI
((out_ndvi_m %>% filter(year==2023) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(mean = mean(out_b, na.rm=T)) / out_ndvi_m %>% filter(year==2016) %>% group_by(city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% dplyr::summarise(mean = mean(out_b, na.rm=T))) - 1) * 100

###############################

out_ndvi_mm <- merge(out_ndvi_m, sf_c, by.x="city", by.y="UC_NM_MN")

# absolute value decline in GVI
reg_2023 <- out_ndvi_mm %>% filter(year==2023) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>%  dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2016 <- out_ndvi_mm %>% filter(year==2016) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>% dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2023$delta <- reg_2023$median - reg_2016$median

reg_2023

# percentage decline in GVI
reg_2023 <- out_ndvi_mm %>% filter(year==2023) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>%  dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2016 <- out_ndvi_mm %>% filter(year==2016) %>% group_by(GRGN_L1, city) %>% dplyr::summarise(out_b = median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L1) %>% dplyr::summarise(median = mean(out_b, na.rm=T))

reg_2023$delta <- ((reg_2023$median / reg_2016$median) - 1)*100

reg_2023

###

# figures for Figure 1 (framework)

setwd("data/validation/")

load("data/validation/after_points_090524.Rdata")

sf <- read_sf("GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf <- filter(sf, !(GRGN_L2 %in% c("Polynesia", "Melanesia", "Caribbean")))
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

grr <- merge(out_ndvi_m, sf_c, by.x="city", by.y="UC_NM_MN")

grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"

library(ggsci)

grr$city_n <- as.numeric(as.factor(grr$city))

ggplot(grr)+
  theme_classic()+
  geom_boxplot2(aes(y=out_b, x=city, fill=as.factor(year)))+
  ggtitle("Distribution of predicted GVI")+
  facet_wrap(vars(GRGN_L2), scales = "free_x")+
  xlab("")+
  ylab("GVI range")+
  scale_fill_discrete(name="Year")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")

ggsave("Figure_2_SI.png", scale=1.65)

# map for figure 1

ggplot()+
  theme_classic()+
  geom_path(data = NE_graticules.prj, 
            aes(long, lat, group = group), 
            linetype = "dotted", colour = "black", size = .1)+
  geom_sf(data=wrld_simpl_sf, fill="lightgrey", colour="black", lwd=0.1)+
  geom_sf(data=st_transform(sf_c, "ESRI:54009"), fill=NA, colour="black", lwd=0.75, size=2.5)+
  stat_sf_coordinates(data=st_centroid(st_transform(sf_c, "ESRI:54009")), size=3.5)+
  theme(legend.position = "bottom", legend.direction = "horizontal",  plot.margin = unit(c(t=0, r=2, b=0, l=0), unit="cm"))+
  xlab("")+
  ylab("")

ggsave("map_gvi_predict_cities.png", scale=5, height = 3, width = 3)


###

setwd("C:/Users/falchetta/OneDrive - IIASA/Current papers/greening")

setwd("./urban_green_space_mapping_and_tracking")

library(caret)
library(CAST)
library(rworldmap)
library(countrycode)
library(wbstats)
library(rasterVis)
require(rgdal)
require(maptools)
library(ggthemes)
library(ggrepel)
library(sf)
library(tidyverse)
library(raster)

load("data/validation/after_gee_multispectral_gee_170524.Rdata")

out_ndvi_m_bk <- out_ndvi_m

load("data/validation/after_gee_multispectral_gee.Rdata")

###

library(data.table)

out_ndvi_m <- sample_n(out_ndvi_m, 10000)
out_ndvi_m_bk <- filter(out_ndvi_m_bk, panoID%in%out_ndvi_m$panoID)
out_ndvi_m_bk <- out_ndvi_m_bk[!duplicated(out_ndvi_m_bk$panoID),]

out_ndvi_m <- merge(out_ndvi_m, out_ndvi_m_bk, "panoID")

#####
## compare training data

plot(out_ndvi_m$B1_1.x, out_ndvi_m$B1_1.y)
plot(out_ndvi_m$v_component_of_wind_10m_7.y, out_ndvi_m$v_component_of_wind_10m_7.x)

###

library(tidyverse)
library(scattermore)

setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening")

setwd("./urban_green_space_mapping_and_tracking")

load("workflow/data_cities/after_points_step1_090524.Rdata")

ndvi <- gvs
ndvi <- bind_rows(ndvi)

load("data/validation/after_points_090524.Rdata")

mm <- merge(out_ndvi_m, ndvi, by=c("merger", "year"))

### 
# aggregate at the city level

sf <- read_sf("data/validation/GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

###

mm$city <- sf_c$UC_NM_MN[as.numeric((sapply(strsplit(mm$id.x,"_"), `[`, 1)))]

###
library(matrixStats)

mm$nd <- rowMaxs(as.matrix(as.data.frame(mm[,grep("nd_", colnames(mm))[1:12]])), na.rm=T)

grr <- mm %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T), nd = median(nd, na.rm=T))

# compare values in the two years

library(ggpmisc)

ggplot(grr, aes(x=out_b/100, y=nd))+
  geom_point()+
  geom_smooth(method = "lm")+
  stat_poly_line() +
  stat_poly_eq(use_label(c("eq", "R2")))+
  facet_wrap(vars(year))

# compare change in values across the two years

mm$nd <- rowMeans(as.matrix(as.data.frame(mm[,grep("nd_", colnames(mm))[1:12]])), na.rm=T)

out_ndvi_m_delta <- mm
out_ndvi_m_delta <- out_ndvi_m_delta %>% group_by(city, merger) %>% dplyr::mutate(out_b_d = out_b[2]/out_b[1] - 1, nd = nd[2]/nd[1] - 1)
out_ndvi_m_delta <- out_ndvi_m_delta %>% group_by(city) %>% dplyr::summarise(out_b_d = median(out_b_d, na.rm=T), nd = median(nd, na.rm=T))

ggplot(out_ndvi_m_delta, aes(x=out_b_d, y=nd))+
  geom_point()+
  geom_smooth(method = "lm")+
  stat_poly_line() +
  stat_poly_eq(use_label(c("eq", "R2")))

###

summary(out_ndvi_m_delta$out_b_d)
summary(out_ndvi_m_delta$nd)

