

class Market {
  constructor() {
    this.listings = {}
  }

  buy(actor, itemName, quantity) {
    let listing = this.listings[itemName][0]

    //listing.name
    actor.removeCoins(listing.price * quantity)
    actor.addItem(itemName, quantity)
  }

  sell(actor, itemName, quantity, price) {
    actor.removeItem(itemName, quantity)
    if(!this.listings[itemName]) {
      this.listings[itemName] = []
    }
    this.listings[itemName].push({
      name: actor.name,
      price: price,
      quantity: quantity
    })
  }
}

module.exports.Market = Market
