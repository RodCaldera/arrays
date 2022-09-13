alert("Bienvenid@ a la calculadora de calificaciones. Calcularemos tu calificación a partir de tus actividades")

//Definición de variables y constantes
const actividades= []
let actividadesRealizadas=prompt("Ingresa el número de actividades realizadas en clase")

//LLenado de Calificaciones al array
for (let numeroActividades=1; numeroActividades <= actividadesRealizadas; numeroActividades++) {
    let calificacionActividad= parseInt(prompt("Ingresa la calificación de la actividad " + numeroActividades));   
    actividades.push(calificacionActividad)
}

let suma=0

for(let i=0; i<actividades.length; i++) {
    suma += actividades[i]; 
}

function promedio (a, b){
    return a / b;
} 

let average = promedio(suma, actividadesRealizadas)

alert ("El Total de tus actividades es " + suma)
alert ("Tu promedio de actividades es " + average)






