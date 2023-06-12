# figures for Figure 1 (framework)

setwd("data/validation/")

load("data/validation/after_points_new.Rdata")

sf <- read_sf("GHS_STAT_UCDB2015MT_GLOBE_R2019A_V1_2.gpkg") # Cities database
sf <- filter(sf, !(GRGN_L2 %in% c("Polynesia", "Melanesia", "Caribbean")))
sf_c <- sf %>% group_by(GRGN_L2) %>% slice_max(P15, n = 10)

grr <- merge(out_ndvi_m, sf_c, by.x="city", by.y="UC_NM_MN")

grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"

library(ggsci)

grr$city_n <- as.numeric(as.factor(grr$city))

ggplot(grr)+
  theme_classic()+
  geom_boxplot(aes(y=out_b, x=city, fill=as.factor(year)))+
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

###########

grr <- merge(out_ndvi_m, sf_c, by.x="city", by.y="UC_NM_MN")

grr$GRGN_L2[grr$GRGN_L2=="Australia/New Zealand"] = "Oceania"

grr <- filter(grr, year==2022)

grrregio = grr %>% group_by(city, GRGN_L2) %>% dplyr::summarise(out_b=median(out_b, na.rm=T))

grrregio = grrregio %>% group_by(GRGN_L2) %>% dplyr::mutate(ordvar=median(out_b, na.rm=T))

grrregiolab = grrregio %>% group_by(GRGN_L2) %>% dplyr::summarise(out_b=median(out_b, na.rm=T), ordvar=median(ordvar, na.rm=T))

#remotes::install_github('rpkgs/gg.layers')
library(gg.layers)

fig2a <- ggplot()+
  theme_classic()+
  geom_boxplot2(data= grrregio, aes(y=out_b, x=reorder(GRGN_L2, -ordvar)), width.errorbar = 0.15, fill="forestgreen")+
  xlab("")+
  ylab("GVI macro-region range \nof city-level medians")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")


###

grr_top <- grr %>% group_by(GRGN_L2) %>% slice_max(P15, n = 2)

grrregio = grr_top %>% group_by(city) %>% dplyr::mutate(ordvar=median(out_b, na.rm=T))

grrregiolab = grrregio %>% group_by(city) %>% dplyr::summarise(out_b=median(out_b, na.rm=T), ordvar=median(ordvar, na.rm=T))

#remotes::install_github('rpkgs/gg.layers')
library(gg.layers)

fig2b <- ggplot()+
  theme_classic()+
  geom_boxplot2(data= grrregio, aes(y=out_b, x=reorder(city, -ordvar)), width.errorbar = 0.1, fill="forestgreen")+
  xlab("")+
  ylab("GVI city-level range")+
  theme(axis.text.x = element_text(angle = 45, hjust=1), legend.position = "bottom", legend.direction = "horizontal")

library(patchwork)

((fig2a + fig2b) & theme(legend.position = "bottom")) + plot_layout(ncol=1, guides = "collect") + plot_annotation(tag_levels = "A")

ggsave("Figure3_2022_forEGU.png", height = 6, width = 7.5)

##########

grr_rome = filter(grr, city=="Rome")
grr_rome = st_as_sf(grr_rome)
grr_rome_coords <- grr_rome
grr_rome_coords$geom <- NULL
grr_rome_coords <- st_as_sf(grr_rome_coords, coords = c("x", "y"), crs=4326)

ggplot(grr_rome)+
  theme_void()+
  geom_sf(data=grr_rome[1,], fill=NA, colour="black", lwd=0.25)+
  stat_sf_coordinates(data=st_centroid(grr_rome_coords), aes(colour=out_b), size=3.5)+
  scale_colour_distiller(palette = "Greens", direction = 1, name="GVI")

ggsave("rome_greening.png")  

#########

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
  
  pop = raster("data/GHS_POP_E2015_GLOBE_R2019A_4326_30ss_V1_0.tif")
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

library(patchwork)
gvi_rome_a + gvi_rome_b + plot_layout(ncol=1)

ggsave("rome_greening_maps.png")  
