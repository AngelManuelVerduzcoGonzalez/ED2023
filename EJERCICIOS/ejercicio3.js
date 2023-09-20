let num = Number(prompt("Ingresa un número"));
let resultado = 0
let divisor = 1
let signo = 1

for(let i = 0; i < num; i++, divisor += 2, signo *= -1) {
    resultado += 4/(divisor*signo)
}

console.log(resultado)
