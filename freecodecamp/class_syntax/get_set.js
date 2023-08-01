class book {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor (temp) {
            this._temp = 5.0/9.0 * (temp - 32);
        }

        get temperature() {
            return this._temp;
        }

        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const thermostat = makeClass();
const thermos = new thermostat(76);
// Usa a função get
let temp = thermos.temperature; // não usamos parênteses pois é um nome de uma propriedade (ou variável)
console.log(temp);

// Usa a função set
thermos.tempearture = 26;
temp = thermos.tempearture;
console.log(temp);