let vec = [1,3,5,9,7,8,6,15,22];

function girar(vec) {
    for(let i = 0; i < vec.length/2; i++) {
        let aux = vec[i]
        vec[i] = vec[vec.length-1-i]
        vec[vec.length-1-i] = aux
    }
    return vec
}

console.log(girar(vec))