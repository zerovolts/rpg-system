const registry = require('./registry/registry')
const Actor = require('./actor').Actor
const Shell = require('./shell').Shell
const Controller = require('./controller').Controller
const Market = require('./market').Market
const Society = require('./society').Society

function main() {
  let actors = Array(8).fill(null).map(_ => new Actor())
  let society = new Society()
  society.register(actors)
  console.log(society.query(0))

  let actor = actors[0]
  module.exports.actor = actor

  actor.addItem('iron-ore', 4)
  actor.addItem('leather', 2)

  actor.craftItem('iron-bar', 2)
  actor.craftItem('iron-dagger')

  let controllers = actors.map(a => new Controller(a))
  for (let controller of controllers) {
    controller.start()
  }

  let shell = new Shell(actor)
  shell.start()

  let market = new Market()
  console.log(actor.inventory)
  market.sell(actor, 'iron-dagger', 1, 24)
  console.log(actor.inventory)
  console.log(market.listings)
}

module.exports.main = main
