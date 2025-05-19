let materias = {
    fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
    programacion: ["Dalto", "Pedro", "Juan", "Pepito"],
    logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
    quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.writeln(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas.`)
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas
            }
        }
        document.writeln(`Felicidades ${alumno}, te has incrito a ${materia} exitosamente!<br>`)
    }
}

document.writeln(materias["fisica"]+"<br>");

inscribir("pablo","fisica");

document.writeln(materias["fisica"]);

