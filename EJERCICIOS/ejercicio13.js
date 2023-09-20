class Dado {
    lanzar() {
        let numero = Math.ceil(Math.random()*6);
        return numero
    }
}

let dado = new Dado()
let vec = [0,0,0,0,0,0] 

for(let i = 0; i < 100; i++) {
    let num = dado.lanzar();
    vec[num-1]++
}

for(let i = 0; i < vec.length; i++) {
    console.log(`El dado cayó ${vec[i]} veces en la cara ${i+1}`)
}