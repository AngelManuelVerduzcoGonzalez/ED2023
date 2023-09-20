class Punto {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    mostrarPunto() {
        console.log(`(${this.x}, ${this.y})`)
    }

    calcularDistancia(punto) {
        let newX = punto.x - this.x
        let newY = punto.y - this.y

        let distancia = ((newX**2) + (newY**2))**(1/2)

        console.log(distancia.toFixed(4))
    }
}

let punto = new Punto(4,7)
let punto2 = new Punto(2,1)

punto.mostrarPunto()
punto2.mostrarPunto()

punto.calcularDistancia(punto2)