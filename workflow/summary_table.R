# calculate statistics

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

load("data/validation/after_points_new.Rdata")

setwd("data/validation/")

statone <- function(predictions){
  
  mean_gi <- median(predictions)
  se_gi <- sd(predictions)/sqrt(length(predictions))
  ci_gi <- c(mean_gi - (se_gi * 1.96), mean_gi +(se_gi * 1.96))
  
  return(ci_gi)
  
}

ggg <- merge(gvs[[1]], gvs[[2]], by=c("x", "y"))
ggg <- dplyr::select(ggg, out_b.x, out_b.y, city.x)

cis_a_out <- list()
cis_b_out <- list()
change_t_out <- list()

for (city in unique(ggg$city.x)){
  
  cis_b <- statone(ggg$out_b.x[ggg$city.x==city])
  cis_a <- statone(ggg$out_b.y[ggg$city.x==city])
  
  if (sum(is.na(cis_b))>0 | sum(is.na(cis_b))>0){
    
    change_t_out[[city]] <- NA
    
  } else {
    
    cis_a <- as.data.frame(matrix(t(unlist(cis_a)), ncol=2, byrow = T))
    cis_a$year = 2016
    cis_a$city <- city
    
    cis_b <- as.data.frame(matrix(t(unlist(cis_b)), ncol=2, byrow = T))
    cis_b$year = 2022
    cis_b$city <- city
    
    cis_a_out[[city]] <- cis_a
    cis_b_out[[city]] <- cis_b
    
    change_t <- t.test(ggg$out_b.x[ggg$city.x==city], ggg$out_b.y[ggg$city.x==city])$p.value
    
    change_t_out[[city]] <- change_t
    
  }}

out <- bind_rows(cis_a_out)
out2 <- bind_rows(cis_b_out)
change_t_out <- t(bind_rows(change_t_out))

#is change statistically significant?

colnames(out)[1:2] <- c("gvi_ci_lower_2016", "gvi_ci_upper_2016")
out$year <- NULL

colnames(out2)[1:2] <- c("gvi_ci_lower_2022", "gvi_ci_upper_2022")
out2$year <- NULL

cis <- merge(out, out2, by="city")

change_t_out <- as.data.frame(change_t_out)
change_t_out$city <- rownames(change_t_out)
rownames(change_t_out) <- NULL
colnames(change_t_out)[1] <- "p_value"

cis <- merge(cis, change_t_out, by="city")

cis$mean_2016 <- (cis$gvi_ci_lower_2016 + cis$gvi_ci_upper_2016)/2
cis$mean_2022 <- (cis$gvi_ci_lower_2022 + cis$gvi_ci_upper_2022)/2
cis$delta <- cis$mean_2022 - cis$mean_2016
cis$delta_pct <- (cis$mean_2022 / cis$mean_2016) - 1
cis$sig <- ifelse(cis$p_value<0.05, 1, 0)

# check change in stat. sign. cities
View(cis %>% filter(sig==1) %>% arrange(desc(delta_pct)))

# in how many cities is change stat sign?
nrow(cis %>% filter(sig==1)) / nrow(cis)

#ggplot(cis)+
#   theme_classic()+
#   geom_errorbar(aes(ymin=V1, ymax=V2, x=city, colour=as.factor(year)), position = "dodge")+
#   geom_text(x = Inf, y = -Inf, hjust=1, vjust=-0.25, aes(label=ifelse(is.na(p_value), "", paste0("p = ", round(p_value,2))))) +
#   ggtitle("95% C.I. of mean urban greenness")+
#   facet_wrap(vars(GRGN_L2), scales = "free")+
#   theme(axis.title.x=element_blank(),
#         axis.text.x=element_blank(),
#         axis.ticks.x=element_blank())+
#   scale_color_discrete(name="Year")+
#   theme(legend.position = "bottom", legend.direction = "horizontal")
# 
# ggsave("3.png", scale=1.25)

#compare across cities

library(modelsummary)

cis <- mutate_if(cis, is.numeric, round, 2)

cis$mean_2016 <- paste0(cis$mean_2016, "\n (", cis$gvi_ci_lower_2016, "-", cis$gvi_ci_upper_2016 , ")")
cis$mean_2022 <- paste0(cis$mean_2022, "\n (", cis$gvi_ci_lower_2022, "-", cis$gvi_ci_upper_2022 , ")")

cis <- dplyr::select(cis, city, mean_2016, mean_2022, delta, delta_pct, p_value)

#

cis <- arrange(cis, city)

colnames(cis) <- c("City", "GVI, 2016 (median and 95% C.I.)", "GVI, 2022 (median and 95% C.I.)", "GVI, 2022-2016 med. diff.", "GVI, 2022-2016 %  med. diff.", "p-value of med. diff.")

cis$`GVI, 2022-2016 %  med. diff.` <- cis$`GVI, 2022-2016 %  med. diff.` * 100

library(xtable)

sink(paste0(getwd(), "/tab_all.tex"))
tableSb <- xtable(cis)
print(tableSb, include.rownames=F, tabular.environment="longtable", floating=FALSE)
sink()
