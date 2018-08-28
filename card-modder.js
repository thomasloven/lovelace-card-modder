class CardModder extends Polymer.Element {

  setConfig(config) {
    this._config = config;

    let tag = config.card.type;
    if(tag.startsWith("custom:"))
      tag = tag.substr(7);
    else
      tag = `hui-${tag}-card`;

    this.card = document.createElement(tag);
    this.card.setConfig(config.card);
    this.appendChild(this.card);
  }

  connectedCallback() {
    let target = this.card;
    if(this.card.shadowRoot && this.card.shadowRoot.querySelector("ha-card")) {
      target = this.card.shadowRoot.querySelector("ha-card");
    } else if (this.card.firstChild && this.card.firstChild.shadowRoot && this.card.firstChild.shadowRoot.querySelector("ha-card")) {
      target = this.card.firstChild.shadowRoot.querySelector("ha-card");
    }
    for(var k in this._config.style) {
      target.style.setProperty(k, this._config.style[k]);
    }
  }

  set hass(hass) {
    this.card.hass = hass;
  }

  getCardSize() {
    return this.card.getCardSize();
  }
}

customElements.define('card-modder', CardModder);
