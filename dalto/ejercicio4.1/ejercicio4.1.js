const obtenerInformacion = (materia) => {
    let materias = {
        fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
        programacion: ["Dalto", "Pedro", "Juan", "Pepito"],
        logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
    }
    if (materias[materia] != undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);
    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.writeln(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        los alumnos son: <b style="color:blue"> ${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+info);
        }
    }
    return `<b style="color:blue">${alumno}</b> esta en <b>${cantidadTotal} clases</b> <br>
    Está cursando las clases: <b style="color:green">${clasesPresentes}</b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.writeln(cantidadDeClases("Cofla"));
document.writeln(cantidadDeClases("Juan")); 
document.writeln(cantidadDeClases("Pedro"));