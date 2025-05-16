
// A mi manera
// const entradaFiesta = () => {
//     nombre = prompt("Ingrese su nombre: ");
//     edad = Number(prompt("Ingrese su edad: "));
//     hora = Number(prompt("Ingrese la hora de entrada del 0 al 24, entre las 2 y 5 no paga: "));

//     if(edad < 18  ){
//         alert(`Señor@ ${nombre}, su edad es ${edad}. Por lo tanto no puede entrar.`);
//     }else if(hora > 2 && hora < 5){
//         alert(`Señor@ ${nombre}, esta de suerte. Puede entrar y no paga`)
//     }else 
//     {
//         alert(`Señor@ ${nombre}, puede entrar pero paga.`)
//     }

// }

// entradaFiesta();

// ...........A manera del curso.........
//Las personas mayores de edad que pueden entrar a la fiesta, el primer despues de las 2am entra gratis

// let free = false;
// const validarCliente = (time) => {
//     let edad = prompt("¿Cual es tu edad?");
//     if (edad > 17) {
//         if (time >= 2 && time < 7 && free == false) {
//             alert("Puedes pasar gratis");
//             free = true;
//         } else {
//             alert("Puedes pasar pero pagas la entrada.")
//         }
//     } else {
//         alert("Menor de edad")
//     }
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);


//Tomar asistencia de alumnos
//Repasar... algo complicado de entender y realizar.
let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for(i=0;i<cantidad;i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}
const tomarAsistencia = (nombre, p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i=0;i<30;i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ______Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    ______Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;

    if(30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA</b><br><br>";
    }else{
        resultado+= "<br><br>"
    }
    document.writeln(resultado);    
}
