class RecipeRegistry {
  constructor() {
    this.recipes = []
    this.inputSearch = {}
    this.outputSearch = {}
  }

  register(recipe) {
    let i = this.recipes.push(recipe) - 1

    let inputs = Object.keys(recipe.input)
    for (let input of inputs) {
      if (!this.inputSearch[input]) {
        this.inputSearch[input] = []
      }
      this.inputSearch[input].push(i)
    }

    this.outputSearch[Object.keys(recipe.output)[0]] = i
  }

  query(itemName) {
    return this.recipes[this.outputSearch[itemName]]
  }

  queryPotential(item) {
    return this.inputSearch[item].map(i => this.recipes[i])
  }
}

module.exports.RecipeRegistry = RecipeRegistry
