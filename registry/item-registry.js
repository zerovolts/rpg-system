class ItemRegistry {
  constructor() {
    this.items = {}
    this.names = []
  }

  register(name, item) {
    this.items[name] = item
    this.names.push(name)
  }

  query(name) {
    let item = null
    if (Number.isInteger(name)) {
      item = this.items[this.names[name]]
    } else {
      item = this.items[name]
    }

    if (item) {
      return item
    } else {
      throw Error('Could not find item.')
    }
  }

  check(name) {
    return !!this.items[name]
  }
}

module.exports.ItemRegistry = ItemRegistry
