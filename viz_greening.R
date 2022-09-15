
ggplot()+
  geom_sf(data=world)+
  geom_point(data=filter(sf, P15>1e6), aes(x=X, y=Y, colour=...6/AREA), size=4)+
  geom_text(data=filter(sf, P15>1e6), aes(x=X, y=Y, label=abs(round(...6/AREA, 1))), nudge_y = .5)+
  theme_classic()+
  coord_sf(ylim=c(34, 70), xlim=c(-10, 90))+
  scale_color_viridis_c(name="", label=scales::label_percent())+
  ggtitle("Share of city area with built-up pixels containing green space")

  ggplot()+
  geom_sf(data=world)+
  geom_point(data=filter(sf, P15>1e6), aes(x=X, y=Y, colour=...6/AREA), size=4)+
  geom_text(data=filter(sf, P15>1e6), aes(x=X, y=Y, label=abs(round(...6/AREA, 1))), nudge_y = .5)+
  theme_classic()+
  coord_sf(ylim=c(-37, 34), xlim=c(-10, 90))+
  scale_color_viridis_c(name="", label=scales::label_percent())+
  ggtitle("Share of built-up pixels containing green space")

ggplot()+
  geom_sf(data=world)+
  geom_point(data=filter(sf, P15>1e6), aes(x=X, y=Y, colour=...6/AREA), size=4)+
  geom_text(data=filter(sf, P15>1e6), aes(x=X, y=Y, label=abs(round(...6/AREA, 1))), nudge_y = .5)+
  theme_classic()+
  coord_sf(ylim=c(10, 60), xlim=c(-130, - 50))+
  scale_color_viridis_c(name="", label=scales::label_percent())+
  ggtitle("Share of built-up pixels containing green space")

#

ggplot()+
  geom_sf(data=world)+
  geom_point(data=filter(sf, P15>1e6), aes(x=X, y=Y, colour=...9/AREA), size=4)+
  geom_text(data=filter(sf, P15>1e6), aes(x=X, y=Y, label=abs(round(...9/AREA, 1))), nudge_y = .5)+
  theme_classic()+
  coord_sf(ylim=c(34, 70), xlim=c(-10, 90))+
  scale_color_viridis_c(name="", label=scales::label_percent())+
  ggtitle("Share of city area covered by parks")

#

ggplot()+
  geom_sf(data=world)+
  geom_point(data=filter(sf, P15>1e6), aes(x=X, y=Y, colour=posneg), size=4)+
  geom_text(data=filter(sf, P15>1e6), aes(x=X, y=Y, label=abs(round(...7, 1))), nudge_y = .5)+
  theme_classic()+
  coord_sf(ylim=c(34, 70), xlim=c(-10, 90))+
  scale_colour_discrete("Change in area of built-up pixels containing green space (km2) - 2014:2020")

ggplot()+
  geom_sf(data=world)+
  geom_point(data=filter(sf, P15>1e6), aes(x=X, y=Y, colour=posneg), size=4)+
  geom_text(data=filter(sf, P15>1e6), aes(x=X, y=Y, label=abs(round(...7, 1))), nudge_y = .5)+
  theme_classic()+
  coord_sf(ylim=c(-37, 34), xlim=c(-10, 90))+
  scale_colour_discrete("Change in area of built-up pixels containing green space (km2) - 2014:2020")

# produce charts

sf_c <- st_join(sf, world, st_within)
sf_c$geometry <- NULL
sf_c <- sf_c %>% group_by(iso_a3) %>% mutate(weights=P15/sum(P15)) %>% ungroup()
sf_c <- sf_c %>% group_by(iso_a3) %>% summarise(wsum=sum(weights*(...6/AREA))) %>% ungroup()
ppp_gdp_capita <- wbstats::wb(country="all", indicator = "NY.GDP.PCAP.PP.CD", mrv=1)
sf_c <- merge(sf_c, ppp_gdp_capita, by.x="iso_a3", by.y="iso3c")
sf_c$region <- countrycode::countrycode(sf_c$iso_a3, "iso3c", "region")

ggplot(data=sf_c)+
  geom_point(aes(x=log(value), y=log(wsum), colour=region))+
  facet_wrap(vars(region))+
  geom_smooth(aes(x=log(value), y=log(wsum)), method = "lm")

ggplot(data=filter(sf, P15>1e6 & (...165>5 | ...165< -5)))+
  geom_col(aes(x=reorder(UC_NM_MN, ...165), y=...165, fill=posneg))+
  theme(axis.text.x = element_text(angle = 90), legend.position = "none")+
  ylab("Change in green urban area (km2) 2014-2020")+
  xlab("Cities with pop. > 1 million and change in green urban area > ±5 km2")

ggplot(data=filter(sf, P15>1e6 & GRGN_L1=="Europe"))+
  geom_col(aes(x=reorder(UC_NM_MN, ...165), y=...165, fill=posneg))+
  theme(axis.text.x = element_text(angle = 90), legend.position = "none")+
  ylab("Change in green urban area (km2) 2014-2020")+
  xlab("European cities with pop. > 1 million")

ggplot(data=filter(sf, P15>1e6 & GRGN_L1=="Northern America"))+
  geom_col(aes(x=reorder(UC_NM_MN, ...165), y=...165, fill=posneg))+
  theme(axis.text.x = element_text(angle = 90), legend.position = "none")+
  ylab("Change in green urban area (km2) 2014-2020")+
  xlab("North American cities with pop. > 1 million")

ggplot(data=filter(sf, P15>1e6 & GRGN_L1=="Africa"))+
  geom_col(aes(x=reorder(UC_NM_MN, ...165), y=...165, fill=posneg))+
  theme(axis.text.x = element_text(angle = 90), legend.position = "none")+
  ylab("Change in green urban area (km2) 2014-2020")+
  xlab("African cities with pop. > 1 million")
