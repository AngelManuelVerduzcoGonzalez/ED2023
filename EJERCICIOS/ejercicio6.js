for(let i=1; i < 1000; i++) {
    if(perfecto(i) == true) {
        console.log(i)
    }
}

function perfecto(num) {
    if(num == sumaDivisores(num)){
        return true
    } else {
        return false
    }
}

function sumaDivisores(num) {
    let suma = 0
    for(let i=1; i < num; i++) {
        if(num % i == 0) {
            suma += i
        }
    }
    return suma
}



