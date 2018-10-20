# NOTE! THIS CARD MUST BE IMPORTED AS A MODULE!

```yaml
resources:
  - url: /local/card-modder.js
    type: module
```


```yaml
      - type: custom:card-modder
        card:
          type: entities
          entities:
            - light.taklampa_kontoret
            - light.taklampa_l_hall
            - media_player.fk_hall_media
        style:
          "--paper-card-background-color": "red"
          "--paper-item-icon-color": "yellow"
          "color": "blue"
          "background": "url(http://placekitten.com/100/100)"
          height: 500px
```
