class Dado {
    lanzar() {
        let numero = Math.ceil(Math.random()*6);
        return ("El número es: " + numero)
    }
}

let lanzamientos = Number(prompt("Ingresa cuantas veces quieres tirar el dado"))
let dado1 = new Dado;


for(let i = 0; i < lanzamientos; i++) {
    console.log(dado1.lanzar())
}