let num = Number(prompt("Numero"))

function factorial(num) {
    let fact = 1;

    for(let i = 1; i <= num; i++) {
        fact *= i
    }

    return fact

}

let e = 1

for(let i = 1; i <= num; i++) {
    e += 1/factorial(i)
}

console.log(e)