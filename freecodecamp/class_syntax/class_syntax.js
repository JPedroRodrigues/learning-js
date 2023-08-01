// Forma antiga de cronstruir objetos

const SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var Zeus = new SpaceShuttle('Júpiter');
console.log(Zeus);

// Maneira mais recente, utilizando class

class spaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

Ares = new spaceShuttle('Marte');
console.log(Ares); 