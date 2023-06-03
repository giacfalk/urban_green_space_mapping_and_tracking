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

load("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/after_points_new.Rdata")

setwd("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/validation/")


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

grr <- out_ndvi_m %>% group_by(city, year) %>% dplyr::summarise(out_b = median(out_b, na.rm=T))
grr <- grr %>% group_by(city) %>% dplyr::mutate(out_b_diff = out_b[2]-out_b[1])

grr <- merge(grr, sf_c, by.x="city", by.y="UC_NM_MN")
grr <- st_as_sf(grr)
grr <- st_transform(grr, "ESRI:54009")

data(wrld_simpl)
wrld_simpl_sf <- st_as_sf(wrld_simpl)
wrld_simpl_sf <- st_transform(wrld_simpl_sf, "ESRI:54009")
wrld_simpl_sf <- filter(wrld_simpl_sf, NAME!="Antarctica")

load(url("https://github.com/valentinitnelav/RandomScripts/blob/master/NaturalEarth.RData?raw=true"))

PROJ <- "+proj=eck4 +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs" 
NE_graticules.prj <- spTransform(NE_graticules, CRSobj = PROJ)

#grr <- filter(grr, !is.na(grr$out_b_diff))

ggplot()+
  theme_void()+
  geom_sf(data=wrld_simpl_sf, fill="lightgrey", colour="black", lwd=0.25)+
  stat_sf_coordinates(data=st_centroid(grr[grr$year==2022,]), colour="white", size=3.5)+
  stat_sf_coordinates(data=st_centroid(grr[grr$year==2022,]), aes(colour=out_b), size=2.8)+
  scale_colour_viridis_c(name="Predicted GVI in 2022")+
  theme(legend.position = "bottom", legend.direction = "horizontal",  plot.margin = unit(c(t=0, r=2, b=0, l=0), unit="cm"))+
  xlab("")+
  ylab("")

ggsave("Figure2.png", scale=2, height = 5, width = 8)

####################

# Figure 3

grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"


grrregio = grr %>% group_by(city, GRGN_L1, year) %>% dplyr::summarise(out_b=median(out_b, na.rm=T))

#

grr <- out_ndvi_m 
grr <- merge(grr, sf_c, by.x="city", by.y="UC_NM_MN")
grr$geom <- NULL
grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"

#
grrregio_pval = grr %>%  group_by(GRGN_L1) %>% dplyr::summarise(pval=t.test(out_b[year==2016], out_b[year==2022])$p.value) 

grrregio <- merge(grrregio, grrregio_pval, "GRGN_L1")

grrregio = grrregio %>% group_by(GRGN_L1) %>% dplyr::mutate(ordvar=median(out_b[year==2016], na.rm=T), pval=median(pval, na.rm=T))

grrregiolab = grrregio %>% group_by(GRGN_L1) %>% dplyr::summarise(out_b=median(out_b, na.rm=T), ordvar=median(ordvar, na.rm=T), pval=round(median(pval, na.rm=T), 2))

#remotes::install_github('rpkgs/gg.layers')
library(gg.layers)

grrregio$GRGN_L1[grrregio$GRGN_L1=="Latin America and the Caribbean"] <- "Lat. Amer. & Caribb."
grrregiolab$GRGN_L1[grrregiolab$GRGN_L1=="Latin America and the Caribbean"] <- "Lat. Amer. & Caribb."

fig2a <- ggplot()+
  theme_classic()+
  geom_boxplot2(data= grrregio, aes(y=out_b, x=reorder(GRGN_L1, -ordvar), fill=as.factor(year)), width.errorbar = 0.15)+
  geom_text(data = grrregiolab, aes(y=10, x=reorder(GRGN_L1, -ordvar), label=ifelse(pval==0, "p<0.01", paste0("p=", pval))))+
  xlab("")+
  ylab("GVI macro-region range of city-level medians")+
  scale_fill_discrete(name="Year")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")


###

grr <- merge(out_ndvi_m, sf_c, by.x="city", by.y="UC_NM_MN")

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

grr_top_sel <- grr %>% filter(year==2022) %>% dplyr::group_by(GRGN_L2, city) %>% dplyr::summarise(out_b=median(out_b, na.rm=T)) %>% ungroup() %>% group_by(GRGN_L2) %>%  slice_min_max(out_b, n = 1) %>% pull(city)

grr_top <- filter(grr, city %in% grr_top_sel)

grr_top <- grr_top %>% 
  group_by(city) %>% 
  filter(length(unique(year)) >= 2)

grrregio = grr_top %>%  group_by(city) %>% dplyr::mutate(pval=t.test(out_b[year==2016], out_b[year==2022])$p.value)

grrregio = grrregio %>% group_by(city) %>% dplyr::mutate(ordvar=median(out_b[year==2022], na.rm=T), pval=median(pval, na.rm=T))

grrregiolab = grrregio %>% group_by(city) %>% dplyr::summarise(out_b=median(out_b, na.rm=T), ordvar=median(ordvar, na.rm=T), pval=round(median(pval, na.rm=T), 2))

#remotes::install_github('rpkgs/gg.layers')
library(gg.layers)

fig2b <- ggplot()+
  theme_classic()+
  geom_boxplot2(data= grrregio, aes(y=out_b, x=reorder(city, -ordvar), fill=as.factor(year)), width.errorbar = 0.1)+
  xlab("")+
  ylab("GVI city-level range")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")

library(patchwork)
library(ggsci)

(((fig2a + ggsci::scale_fill_npg(name="Year")) + (fig2b + ggsci::scale_fill_npg(name="Year"))) & theme(legend.position = "bottom")) + plot_layout(ncol=1, guides = "collect") + plot_annotation(tag_levels = "A")

ggsave("Figure3.png", height = 10, width = 7.5)

######################
# within city analysis
# voronoi polygons

sf::sf_use_s2(F)

ox_diagram_o <- list()

for (i in unique(gvs[[1]]$city)){
  print(i)
  cents <- gvs[[1]]
  cents <- filter(cents, city==i)
  cents <-   cents %>% distinct(x, y, .keep_all = TRUE)
  
  if (nrow(cents)<2){
    
    ox_diagram_o[[i]] <- NA
    
  } else {
    
    library(ggvoronoi)
    
    ox_diagram <- voronoi_polygon(cents,x="x",y="y")
    ox_diagram <- st_as_sf(ox_diagram)
    st_crs(ox_diagram) <- 4326
    ox_diagram <- st_transform(ox_diagram, 4326)
    ox_diagram <- st_make_valid(ox_diagram)
    ox_diagram <- st_intersection(ox_diagram, sf_c[sf_c$UC_NM_MN==ox_diagram$city[1],])
    
    # pop extract
    
    pop = raster("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/GHS_POP_E2015_GLOBE_R2019A_4326_30ss_V1_0.tif")
    ox_diagram$pop = exactextractr::exact_extract(pop, ox_diagram, "sum")
    
    ox_diagram <- ox_diagram %>% dplyr::arrange(out_b)
    ox_diagram <- ox_diagram %>% mutate(pop_c = cumsum(pop)/sum(pop))
    
    ox_diagram_o[[i]] <- ox_diagram
    
  }}

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
  guides(colour=guide_legend(nrow=3,byrow=TRUE))


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
  guides(colour=guide_legend(nrow=4,byrow=TRUE))

library(patchwork)
library(ggpubr)

palette <-   get_palette("npg",  30)

set.seed(2023)

lower_pane_fig_4 = (p_r + ggsci::scale_colour_npg(name="")) + (pp + scale_colour_manual(values = sample(palette))) + plot_annotation(tag_levels = list("A", "B")) + plot_layout(widths = c(0.8, 1.35))

ggsave("Figure4_lower.png", lower_pane_fig_4, scale=1.5, height = 3.5, width = 6)


####################

cents <- gvs[[1]]
cents <- filter(cents, city=="Rome")
cents <-   cents %>% distinct(x, y, .keep_all = TRUE)

if (nrow(cents)<2){
  
  ox_diagram_o[[i]] <- NA
  
} else {
  
  library(ggvoronoi)
  
  ox_diagram <- voronoi_polygon(cents,x="x",y="y")
  ox_diagram <- st_as_sf(ox_diagram)
  st_crs(ox_diagram) <- 4326
  ox_diagram <- st_transform(ox_diagram, 4326)
  ox_diagram <- st_intersection(ox_diagram, sf_c[sf_c$UC_NM_MN==ox_diagram$city[1],])
  
  # pop extract
  
  pop = raster("C:/Users/Falchetta/OneDrive - IIASA/Current papers/greening/urban_green_space_mapping_and_tracking/data/GHS_POP_E2015_GLOBE_R2019A_4326_30ss_V1_0.tif")
  ox_diagram$pop = exactextractr::exact_extract(pop, ox_diagram, "sum")
  
  ox_diagram <- ox_diagram %>% dplyr::arrange(out_b)
  ox_diagram <- ox_diagram %>% mutate(pop_c = cumsum(pop)/sum(pop))
  
}

gvi_rome_a <- ggplot(ox_diagram)+
  theme_void()+
  geom_sf(aes(fill=pop))+
  scale_fill_distiller(palette = "Reds", name="Pop.", direction = 1)

gvi_rome_b <- ggplot(ox_diagram)+
  theme_void()+
  geom_sf(aes(fill=out_b))+
  scale_fill_distiller(palette = "Greens", name="GVI", direction = 1)

upper_pane_fig_4 = gvi_rome_a + gvi_rome_b + plot_layout(ncol=2)

ggsave("Figure4_upper.png", upper_pane_fig_4, scale=2, height = 3.5, width = 6)

###############

ox_diagram_all <- bind_rows(ox_diagram_o)

library(acid)
library(matrixStats)

gg <- (ox_diagram_all %>%  st_set_geometry(NULL) %>% ungroup() %>% group_by(city, year) %>% dplyr::summarise(gini=as.numeric(acid::weighted.gini(x=out_b, w=pop_c)), gvi=matrixStats::weightedMedian(x=out_b, w=pop_c, na.rm=T)))

gg <- gg %>% ungroup() %>% group_by(city) %>% dplyr::summarise(gini=mean(gini), gvi=mean(gvi))

gg <- arrange(gg, desc(gini))

library(xtable)

sink(paste0(getwd(), "/gini_table.tex"))
tableSb <- xtable(gg, caption = "Gini indexes of GVI exposure", label = "tab:gini")
print(tableSb, include.rownames=F, tabular.environment="longtable", floating=FALSE)
sink()
