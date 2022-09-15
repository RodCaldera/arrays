alert("Bienvenid@ al Sistema de Control Escolar. Ingresa la información del Alumno y Calcula sus Calificaciones")

//Crear objeto para almacenar información de un alumno.
let nuevoAlumno=prompt("¿Deseas crear un nuevo alumno? 1=Sí, 0=No") 
function alumno(nombre, apellido, grupo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.grupo=grupo;
}

if(nuevoAlumno=1){
    const alumno1 = new alumno({nombre: prompt("Ingresa tu nombre"), apellido: prompt("Ingresa tu apellido"), grupo: prompt("Ingresa tu grupo")});
} 


//Cálculo de Calificación del Alumno en 3 secciones.
const actividades= []
let actividadesRealizadas=prompt("Ingresa el número de actividades realizadas en clase")

//LLenado de Calificaciones al array
for (let numeroActividades=1; numeroActividades <= actividadesRealizadas; numeroActividades++) {
    let calificacionActividad= parseInt(prompt("Ingresa la calificación de la actividad " + numeroActividades));   
    actividades.push(calificacionActividad)
}
let sumaActividades=0
for(let i=0; i<actividades.length; i++) {
    sumaActividades += actividades[i]; 
}

function promedio (a, b){
    return a / b;
} 

let promedioActividades = promedio(sumaActividades, actividadesRealizadas)

alert ("El Total de tus actividades es " + sumaActividades)
alert ("Tu promedio de actividades es " + promedioActividades)

const proyectos= []
let proyectosRealizados=prompt("Ingresa el número de proyectos realizados en clase")

//LLenado de Calificaciones al array
for (let numeroProyectos=1; numeroProyectos <= proyectosRealizados; numeroProyectos++) {
    let calificacionProyecto= parseInt(prompt("Ingresa la calificación del proyecto " + numeroProyectos));   
    actividades.push(calificacionProyecto);
}

let sumaProyectos=0
for(let i=0; i<proyectos.length; i++) {
    sumaProyectos += proyectos[i]; 
}

function promedio (a, b){
    return a / b;
} 

let promedioProyectos = promedio(sumaProyectos, proyectosRealizados)

alert ("El Total de tus proyectos es " + sumaProyectos)
alert ("Tu promedio de proyectos es " + promedioProyectos)

let calificacionExamen= parseInt(prompt("Ingresa la calificación del examen"))

let calificacionFinal = promedioProyectos*0.5 + promedioProyectos*0.3 + calificacionExamen*0.2
alert ("Tu calificación final es " + calificacionFinal)

