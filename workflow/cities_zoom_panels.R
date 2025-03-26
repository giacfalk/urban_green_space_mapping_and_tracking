out_ndvi_m_summ <- out_ndvi_m %>% group_by(city, x, y) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T))
out_ndvi_m_summ <- filter(out_ndvi_m_summ, city=="Addis Ababa") %>% st_as_sf(coords=c("x", "y"), crs=4326)

library(ggspatial)

Addis_Ababa <- ggplot()+

  theme_void()+
  annotation_map_tile(zoom = 12, alpha = 0.5)+
  geom_sf(data=out_ndvi_m_summ , aes(colour=out_b), size=1.5)+
  geom_sf(data=sf_c %>% filter(UC_NM_MN=="Addis Ababa") , colour="black", fill="transparent")+
  scale_colour_viridis_c(name="", limits=c(0, 40))+
  ggtitle("Addis Ababa")

##

out_ndvi_m_summ <- out_ndvi_m %>% group_by(city, x, y) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T))
out_ndvi_m_summ <- filter(out_ndvi_m_summ, city=="Paris") %>% st_as_sf(coords=c("x", "y"), crs=4326)

Paris <- ggplot()+

  theme_void()+
  geom_sf(data=out_ndvi_m_summ , aes(colour=out_b), size=0.5)+
  geom_sf(data=sf_c %>% filter(UC_NM_MN=="Paris") , colour="black", fill="transparent")+
  scale_colour_viridis_c(name="", limits=c(0, 40))+
  ggtitle("Paris")


##

out_ndvi_m_summ <- out_ndvi_m %>% group_by(city, x, y) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T))
out_ndvi_m_summ <- filter(out_ndvi_m_summ, city=="Beijing") %>% st_as_sf(coords=c("x", "y"), crs=4326)

Beijing <- ggplot()+
  
  theme_void()+
  geom_sf(data=out_ndvi_m_summ , aes(colour=out_b), size=0.5)+
  geom_sf(data=sf_c %>% filter(UC_NM_MN=="Beijing") , colour="black", fill="transparent")+
  scale_colour_viridis_c(name="", limits=c(0, 40))+
  ggtitle("Beijing")
  

##

out_ndvi_m_summ <- out_ndvi_m %>% group_by(city, x, y) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T))
out_ndvi_m_summ <- filter(out_ndvi_m_summ, city=="New York") %>% st_as_sf(coords=c("x", "y"), crs=4326)

New_York <- ggplot()+
  
  theme_void()+
  geom_sf(data=out_ndvi_m_summ , aes(colour=out_b), size=0.5)+
  geom_sf(data=sf_c %>% filter(UC_NM_MN=="New York") , colour="black", fill="transparent")+
  scale_colour_viridis_c(name="", limits=c(0, 40))+
  ggtitle("New York")
  

##

out_ndvi_m_summ <- out_ndvi_m %>% group_by(city, x, y) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T))
out_ndvi_m_summ <- filter(out_ndvi_m_summ, city=="São Paulo") %>% st_as_sf(coords=c("x", "y"), crs=4326)

Sao_Paulo <- ggplot()+
  
  theme_void()+
  geom_sf(data=out_ndvi_m_summ , aes(colour=out_b), size=0.5)+
  geom_sf(data=sf_c %>% filter(UC_NM_MN=="São Paulo") , colour="black", fill="transparent")+
  scale_colour_viridis_c(name="", limits=c(0, 40))+
  ggtitle("São Paulo")
  

##

out_ndvi_m_summ <- out_ndvi_m %>% group_by(city, x, y) %>% dplyr::summarise(out_b = mean(out_b, na.rm=T))
out_ndvi_m_summ <- filter(out_ndvi_m_summ, city=="Sydney") %>% st_as_sf(coords=c("x", "y"), crs=4326)

Sydney <- ggplot()+
  
  theme_void()+
  geom_sf(data=out_ndvi_m_summ , aes(colour=out_b), size=0.5)+
  geom_sf(data=sf_c %>% filter(UC_NM_MN=="Sydney") , colour="black", fill="transparent")+
  scale_colour_viridis_c(name="", limits=c(0, 40))+
  ggtitle("Sydney")


library(patchwork)

Addis_Ababa + Paris + Beijing + New_York + Sao_Paulo + Sydney + plot_layout(guides="collect", ncol=3) & theme(legend.position = "bottom", legend.direction="horizontal", legend.key.width = unit(1.25, "cm"), legend.key.height = unit(.1, "cm"))

ggsave("Figure4_all.pdf", height = 4, width = 5, scale=1.5)
ggsave("Figure4_all.png", height = 4, width = 5, scale=1.5)
