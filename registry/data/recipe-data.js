const RecipeRegistry = require('../recipe-registry').RecipeRegistry
let recipes = new RecipeRegistry()
module.exports.recipes = recipes

/* - Recipe Data - */

recipes.register({
  output: {'iron-bar': 1},
  input: {'iron-ore': 1},
  catalyst: ['furnace']
})

recipes.register({
  output: {'iron-sword': 1},
  input: {'iron-bar': 3, 'leather': 2},
  catalyst: ['anvil']
})

recipes.register({
  output: {'iron-dagger': 1},
  input: {'iron-bar': 2, 'leather': 1},
  catalyst: ['anvil']
})
