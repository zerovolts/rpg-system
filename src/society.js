class Society {
  constructor() {
    this.idCounter = 0
    this.actors = {}
  }

  generateID() {
    return this.idCounter++
  }

  register(actorList) {
    if (Array.isArray(actorList)) {
      for (let actor of actorList) {
        this.actors[this.generateID()] = actor
      }
    } else {
      this.actors[this.generateID()] = actorList
    }
  }

  query(actorID) {
    return this.actors[actorID]
  }
}

module.exports.Society = Society
