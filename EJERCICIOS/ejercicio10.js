class Liebre {
    constructor() {
        this.position = 0
    }

    avanzar() {
        let dado = Math.ceil(Math.random()*20)
        if(dado == 1 || dado == 2 || dado == 3 || dado == 4) {
            this.position += 9
        } else if(dado == 5 || dado == 6) {
            this.position -= 12
        } else if(dado == 7 || dado == 8 || dado == 9 || dado == 10 || dado == 11 || dado == 12 || dado == 13) {
            this.position += 1
        } else if(dado == 14 || dado == 15 || dado == 16){
            this.position -= 2
        }
    }
}

class Tortuga {
    constructor() {
        this.position = 0
    }

    avanzar() {
        let dado = Math.ceil(Math.random()*20)
        if(dado == 1 || dado == 2 || dado == 3 || dado == 4 || dado == 5 ) {
            this.position -= 6
        } else if(dado == 6 || dado == 7 || dado == 8 || dado == 9  || dado == 10 || dado == 11) {
            this.position += 1
        } else {
            this.position += 3
        }
    }
}

let tortuga = new Tortuga()
let liebre = new Liebre()

do {
    liebre.avanzar()
    tortuga.avanzar()
    console.log("La liebre esta en la posición: " + liebre.position)
    console.log("La tortuga esta en la posición: " + tortuga.position)
} while(liebre.position < 100 && tortuga.position < 100)

if(tortuga.position >= 100 && liebre.position >= 100) {
    console.log("La carrera fue un empate")
} else if(liebre.position >= 100 && tortuga.position < 100) {
    console.log("Ganó la liebre")
} else {
    console.log("Ganó la tortuga")
}