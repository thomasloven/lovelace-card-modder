# card-modder

Allows you to style a home-assistant lovelace card

## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| card | object | **Required** | The card you wish to style
| style | list | none | List of css styles to apply to card
| report_size | number | none | Size to report

# Styling

card-modder can be used to apply CSS styling to any lovelace card.

Any CSS style can be used, and will be applied to the base element of the card
(`<ha-card>`). Most cards use css variables for styling, and to find out which
ones, I recommend either the official ["partial list of variables
used"](https://github.com/home-assistant/home-assistant-polymer/blob/master/src/resources/ha-style.js)
or that you open the card in your browsers object inspector and check out the
styling options manually.

```yaml
- type: custom:card-modder
  style:
    --paper-card-background-color: rgba(0, 100, 0, 0.2)
    --paper-item-icon-color: white
    border-radius: 5px
    color: rgb(0, 0, 100)
  card:
    type: glance
    title: Styled card
    entities:
      - light.bed_light
      - light.ceiling_lights
      - light.kitchen_lights
- type: glance
  title: Unstyled card
  entities:
    - light.bed_light
    - light.ceiling_lights
    - light.kitchen_lights
```
![card-modder-styling](https://user-images.githubusercontent.com/1299821/47842006-b92a9a80-ddbb-11e8-915a-9d54f7e62a5e.png)



# Forcing size

By default lovelace orders cards on the screen in columns. To predict where a card will pop up there are a few rules:

- Each card has a vertical size. The size is specified in units of roughly 50 pixels.
- Cards are placed in the order they are specified in ui-lovelace.yaml
- Cards will be placed in the first available column (from the left) which is
  less than **5** units tall.
- If no column has less than 5 units, the card will be placed in the shortest
  column.

The size of each card varies a bit, generally:
- One row in an entities card is 1 unit tall.
- A card title is one unit tall.
- One row of glance icons is two units tall.
- A `picture-`card is 3 units tall.

You can find the size of each card from the source code
[here](https://github.com/home-assistant/home-assistant-polymer/tree/master/src/panels/lovelace/cards).
Look for the `getCardSize()` function in the card you want.


### The point

Any way... card-modder can be used to set what height a card should report:

```
- type: custom:card-modder
  report_size: 7
  card:
    type: glance
    title: 'report_size: 7'
    entities:
      - light.bed_light
      - light.ceiling_lights
      - light.kitchen_lights
- type: glance
  title: Card 2
  entities:
    ...
- type: glance
  title: Card 3
  entities:
    ...
- type: glance
  title: Card 4
  entities:
    ...
- type: glance
  title: Card 5
  entities:
    ...
```
![card-modder-sizing](https://user-images.githubusercontent.com/1299821/47842030-ce9fc480-ddbb-11e8-9062-02cfc0e8f144.png)
