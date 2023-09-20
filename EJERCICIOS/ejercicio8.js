let calificaciones = [];
let sumaPromedios = 0
let promedio = 0
let calificacionesBajas = []


for(let i = 0; i < 10; i++) {
        calificaciones[i] = Number(prompt("Inserta una calificación"))
}


for(let i = 0; i < calificaciones.length; i++) {
    sumaPromedios += calificaciones[i]
}

promedio = sumaPromedios/10 

console.log(promedio)

for(let i = 0; i < calificaciones.length; i++) {
    if(calificaciones[i] < promedio){
        calificacionesBajas.push(calificaciones[i]) 
    }
}

console.log("Las calificaciones debajo del promedio fueron: " + calificacionesBajas)
