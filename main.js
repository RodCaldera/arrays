alert("Bienvenid@ al Sistema de Control Escolar. Ingresa la información del Alumno y Calcula sus Calificaciones")

//Arrays de información necesaria para escalar el código
let grupos1=["1°A", "1°B", "1°C"]
let materias1=["Inglés", "Francés", "Matemáticas","Química","Deportes", "Artes","Lectura y Redacción"]
let  alumnos1A=[
    {nombre:"Alumno", apellido:"dePrueba",edad:"18"}
]
let alumno1

//Crear objeto para almacenar información de un alumno. 
class Alumno {
    constructor(nombre,apellido,edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        //this.fechaNacimiento=fecha; 
        this.edad=edad; 
        //this.calificacion=calificacion;
        //this.grupo=grupo; Esto se va a utilizar más adelante 
    }
}

function imprimirAlumno(Alumno){
    let li= document.createElement("li");
    li.innerHTML= Alumno.nombre + " " + Alumno.apellido;
    lista1A.appendChild(li);
    }

let lista1A=document.getElementById("lista1A")
alumnos1A.forEach(imprimirAlumno) 
    
document.getElementById("crearAlumno").addEventListener("click", capturarAlumno) 
    function capturarAlumno (){
        alumno1 = new Alumno({nombre: prompt("Ingresa el nombre"), apellido: prompt("Ingresa el apellido"), /*grupo: prompt("Ingresa tu grupo")*/ edad: prompt("Ingresa la edad")});
        alumnos1A.push(alumno1)
        alert("Creaste un nuevo alumno.")
        alert(" El grupo ahora tiene " + alumnos1A.length + "miembro(s)")
        imprimirAlumno
        }


/*Cálculo de Calificación del Alumno en 3 secciones.
document.getElementsByTagName("li").addEventListener("click", capturarCalificaciones)
function capturarCalificaciones () {
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
        proyectos.push(calificacionProyecto);
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
}
*/
