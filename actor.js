const registry = require('./registry/registry')

class Actor {
  constructor(name = '') {
    this.name = name
    this.coins = 0
    this.inventory = {}
  }

  addCoins(amount) {
    this.coins += amount
  }

  removeCoins(amount) {
    //todo: limits
    this.coins -= amount
  }

  addItem(itemName, quantity = 1) {
    if (registry.items.check(itemName)) {
      if (this.inventory[itemName]) {
        this.inventory[itemName] += quantity
      } else {
        this.inventory[itemName] = quantity
      }
    } else {
      throw Error('Inavlid item.')
    }
  }

  removeItem(itemName, quantity = 1) {
    let itemSlot = this.inventory[itemName]
    if (itemSlot && registry.items.check(itemName)) {
      if (itemSlot == quantity) {
        delete this.inventory[itemName]
      } else if (itemSlot < quantity) {
        throw Error('You don\'t have enough [' + itemName + ']')
      } else {
        this.inventory[itemName] -= quantity
      }
    } else {
      throw Error('You don\'t have any [' + itemName + '].')
    }
  }

  craftItem(itemName, quantity = 1) {
    let recipe = registry.recipes.query(itemName)
    // todo: check for catalyst
    // todo: check for available materials before removing items
    if (registry.items.check(itemName)) {
      for (let item in recipe.input) {
        this.removeItem(item, recipe.input[item] * quantity)
      }
      this.addItem(itemName, quantity)
    }
  }
}

module.exports.Actor = Actor
