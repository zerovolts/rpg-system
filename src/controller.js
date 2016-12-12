
class Controller {
  constructor(actor) {
    this.actor = actor
    //console.log(this.actor)
  }

  update() {
    //console.log(this.actor)
    this.actor.addItem('iron-ore')
    //console.log(this.actor.name + ': ' + this.actor.inventory['iron-ore'])
  }

  start() {
    setInterval(this.update.bind(this), Math.floor(Math.random() * 5000) + 5000)
  }
}

module.exports.Controller = Controller
