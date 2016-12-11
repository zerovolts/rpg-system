class Shell {
  constructor(actor = new Actor()) {
    this.actor = actor
  }

  start() {
    const stdin = process.openStdin()
    process.stdout.write('> ')
    stdin.addListener('data', data => {
      let tokens = data.toString().trim().split(' ')
      if (commands[tokens[0]]) {
        commands[tokens.shift()](this.actor, tokens)
      } else {
        console.log('Invalid input.')
      }
      process.stdout.write('> ')
    })
  }
}

const commands = {
  show: function(actor, args) {
    switch (args[0]) {
      case 'name':
        console.log(actor.name)
        break
      case 'inv':
        console.log('Inventory')
        console.log('---------')
        for (let item in actor.inventory) {
          console.log(item + ' : ' + actor.inventory[item])
        }
        break
    }
  },
  craft: function(actor, args) {
    const itemName = args[0]
    actor.craftItem(itemName, args[1])
    console.log('Crafted [' + itemName + ']')
  },
  help: function(actor, args) {
    console.log('help - displays this help message')
    console.log('show - displays information about the argument')
    console.log('craft - crafts a given item')
  },
  mine: function(actor, args) {
    actor.addItem('iron-ore')
  }
}

module.exports.Shell = Shell
