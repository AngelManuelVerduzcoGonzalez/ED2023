class Jugador {
    constructor(numero) {
        this.numero = numero
        this.position = 0
    }

    avanzar() {
        let casillas
        let dado = Math.ceil(Math.random() * 6)
        if(dado == 1){
            casillas = 3
        } else if(dado == 2 || dado == 3) {
            casillas = 1
        } else {
            casillas = 2
        }

        return casillas
    }
}

let jugador1 = new Jugador(12)
let jugador2 = new Jugador(55)

function carrera(jugador1, jugador2) {
    let corredor1 = jugador1
    let corredor2 = jugador2
    let avance1 = 0
    let avance2 = 0
    do {
        avance1 += jugador1.avanzar();
        avance2 += jugador2.avanzar();
        console.log("Jugador " + corredor1.numero + ": " + avance1)
        console.log("Jugador "+ corredor2.numero + ": " + avance2)
    } while (avance1 < 100 && avance2 < 100)

    if(avance1 >= 100 && avance2 >= 100){
        console.log("Fue un empate")
    } else if(avance1 >= 100 & avance2 < 100){
        console.log("Ganó el jugador " + corredor1.numero)
    } else {
        console.log("Ganó el jugador " + corredor2.numero)
    }
}

carrera(jugador1, jugador2);


