class Jugador {
    constructor(){
        this.position = 0
    }

    lanzarDado(dado) {
        return dado.lanzar();
    }

    checarCasilla() {
        
    }
}

class Dado {
    lanzar() {
        let numero = Math.ceil(Math.random()*6);
        return numero
    }
}

class Tablero {
    constructor() {
        this.casillas = [null, ]
    }
}

let jugador1 = new Jugador()
let jugador2 = new Jugador()
let dado = new Dado()
let tablero = new Tablero()

do{
    jugador1.position += dado.lanzar()
    jugador2.position += dado.lanzar()

    if(tablero.serpientes.includes(jugador1.position)) {
        jugador1.position = tablero.retroceder[tablero.retroceder.indexOf(jugador1.position)]
    }
    if(tablero.escaleras.includes(jugador1.position)) {
        jugador1.position = tablero.aumentar[tablero.aumentar.indexOf(jugador1.position)]
    }
    if(tablero.serpientes.includes(jugador2.position)) {
        jugador2.position = tablero.retroceder[tablero.retroceder.indexOf(jugador2.position)]
    }
    if(tablero.escaleras.includes(jugador2.position)) {
        jugador2.position = tablero.aumentar[tablero.aumentar.indexOf(jugador2.position)]
    }
    console.log("La posición del jugador 1 es:" + jugador1.position)
    console.log("La posición del jugador 2 es:" + jugador2.position)
} while (jugador1.position < tablero.casillas && jugador2.position < tablero.casillas )

if(jugador1.position > 100) {
    console.log("Jugador 1 ganó")
} else {
    console.log("Jugador 2 ganó")
}

