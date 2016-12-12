const ItemRegistry = require('../item-registry').ItemRegistry
let items = new ItemRegistry()
module.exports.items = items

/* - Item Data - */

items.register('iron-ore', {
  name: 'Iron Ore',
  description: 'Freshly mined, raw iron ore.',
  mass: 6,
})

items.register('iron-bar', {
  name: 'Iron Bar',
  description: 'A bar of iron.',
  mass: 4,
})

items.register('leather', {
  name: 'Leather',
  description: 'Tanned hide.',
  mass: 1,
})

items.register('iron-dagger', {
  name: 'Iron Dagger',
  description: 'A sharp iron dagger.',
  mass: 5,
})
