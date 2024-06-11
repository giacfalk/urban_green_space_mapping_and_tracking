library(gridExtra)

xs <- split(ox_diagram_all,f = ox_diagram_all$GRGN_L2)
p1 <- ggplot(xs$`Australia/New Zealand`, aes(y=pop_c, x=out_b, group = city, colour=city))+
  theme_classic()+
  facet_wrap(vars(GRGN_L2), ncol=1)+
  geom_line(size=0.75)+
  ylab("Cumulative fraction of the population")+
  xlab("GVI exposure")+
  ylab("")+
  xlab("")+
  scale_y_continuous(labels=scales::label_percent())+
  theme(legend.position = "bottom", legend.direction = "horizontal", legend.key.size = unit(0.2, "cm"),
        legend.box.margin=margin(-25,0,0,-0))+
  guides(colour=guide_legend(nrow=3,byrow=TRUE))+
  scale_colour_discrete(name="")

p2 <- p1 %+% xs$Caribbean
p3 <- p1 %+% xs$`Central America`
p4 <- p1 %+% xs$`Eastern Asia`
p5 <- p1 %+% xs$`Northern Africa`
p6 <- p1 %+% xs$`Northern America`
p7 <- p1 %+% xs$`Northern Europe`
p8 <- p1 %+% xs$Polynesia
p9 <- p1 %+% xs$`South-Eastern Asia`
p10 <- p1 %+% xs$`South America`
p11 <- p1 %+% xs$`Southern Europe`
p12 <- p1 %+% xs$`Western Africa`
p13 <- p1 %+% xs$`Western Europe`

library(cowplot)

pp <- plot_grid(p1,p2,p3, p4, p5, p6, p7, p9, p10, p11, p12, p13, ncol = 3, rel_widths = rep(1,12), rel_heights = rep(1,12))
