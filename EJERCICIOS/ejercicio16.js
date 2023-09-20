let vec = [5,12,4,23,8,14,20,6,30,15,11,10,3,9,17];

console.log(vec)
let comparaciones = 0
function burbuja(vec) {
    for(let nc = vec.length-1; nc > 0; nc--) { //NÚMERO DE COMPARACIONES QUE SE VAN A REALIZAR
        for(let i = 0; i < nc; i++) {
            if(vec[i] > vec[i+1]) {
                let aux = vec[i]
                vec[i] = vec[i+1]
                vec[i+1] =  aux
            }
            comparaciones++
        } 
    }
    

    return vec
}

console.log(burbuja(vec))
console.log(`Comparaciones realizadas: ${comparaciones}`)