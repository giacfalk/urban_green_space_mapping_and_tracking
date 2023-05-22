
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

cis <- bind_rows(out, out2)
cis$p_value <- c(na.omit(change_t_out), rep(NA, length(na.omit(change_t_out))))

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

cis$lol <- (cis$V1+cis$V2)/2
cis$lol <- round(cis$lol, 2)
cis$V1 <- round(cis$V1, 2)
cis$V2 <- round(cis$V2, 2)

cis$year <- as.factor(cis$year)

cis <- cis %>% group_by(city) %>% mutate(diff=lol[2]-lol[1])

cis$lol <- paste0(cis$lol, "\n (", cis$V1, "-", cis$V2 , ")")
cis$lol <- as.factor(cis$lol)

###

cis_w <- pivot_wider(cis, values_from = "lol", names_from = "year")

cis_w[c(1:114), 7] <- cis_w[c(115:228), 7] 
cis_w <- cis_w[c(1:114),] 

cis_w <- arrange(cis_w, city)

cis_w <- cis_w[,c(3,6,7,5,4)]

colnames(cis_w) <- c("City", "GVI, 2016 (mean)", "GVI, 2022 (mean)", "GVI, 2022-2016 difference", "p-value")

library(xtable)

cis_w$`GVI, 2022-2016 difference` <- as.character(round(cis_w$`GVI, 2022-2016 difference`, 2))
cis_w$`p-value` <-  as.character(round(cis_w$`p-value`, 2))

sink(paste0(getwd(), "/tab_all.tex"))
tableSb <- xtable(cis_w)
print(tableSb, include.rownames=F, tabular.environment="longtable", floating=FALSE)
sink()
