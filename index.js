const registry = require('./registry/registry')
const Actor = require('./actor').Actor
const Shell = require('./shell').Shell

let actor = new Actor('Hex')
module.exports.actor = actor

actor.addItem('iron-ore', 4)
actor.addItem('leather', 2)

actor.craftItem('iron-bar', 2)
actor.craftItem('iron-dagger')

let shell = new Shell(actor)
shell.start()
