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

    if(this.$) this._cardMod();
  }

  ready() {
    super.ready();
    if(this._config) this._cardMod();
  }

  _cardMod() {
    this.appendChild(this.card);

    let target = this.card;
    if(this.card.shadowRoot && this.card.shadowRoot.querySelector("ha-card")) {
      target = this.card.shadowRoot.querySelector("ha-card");
    } else if(this.card.querySelector("ha-card")) {
      target = this.card.querySelector("ha-card");
    } else if(this.card.firstChild && this.card.firstChild.shadowRoot && this.card.firstChild.shadowRoot.querySelector("ha-card")) {
      target = this.card.firstChild.shadowRoot.querySelector("ha-card");
    }

    for(var k in this._config.style) {
      target.style.setProperty(k, this._config.style[k]);
    }
  }

  set hass(hass) {
    if(this.card) this.card.hass = hass;
  }

  getCardSize() {
    return this.card.getCardSize();
  }
}

customElements.define('card-modder', CardModder);
