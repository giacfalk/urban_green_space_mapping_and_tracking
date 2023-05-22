library(leaflet)
library(viridisLite)

# get domain of numeric data
(domain <- range(out_ndvi_m$out_b))

# make palette
pal <- colorNumeric(palette = viridis(100), domain = domain)

mappone = out_ndvi_m %>% filter(year=="2022") %>%  st_as_sf(coords=c("x", "y"), crs=4326) %>% 
  leaflet(height=2000, width=2000) %>% setView(9.188540, 45.464664, zoom = 13) %>%
  addTiles() %>%
  addCircleMarkers(
    options = markerOptions(col = ~pal(out_b)), color = ~pal(out_b), fillOpacity = 1, stroke = F, group = "Quake Points") %>%
  addLegend("bottomright", pal = pal, values = ~out_b,
            title = "GVI (2022)",
            labFormat = labelFormat(prefix = ""),
            opacity = 1
  ) %>%                        
  groupOptions("Quake Points", zoomLevels = 11:20) 


htmltools::save_html(html = mappone, file = "prova_web.html")
