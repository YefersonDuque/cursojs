const materias = {
    fisica: [90, 6, 3, "fisica"],
    matematicas: [84, 8, 2, "matematicas"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [79, 7, 4, "calculo"],
    programacion: [79, 7, 4, "programacion"],
    biologia: [75, 9, 2, "biologia"],
    db: [98, 9, 1, "db"],
    algebra: [100, 10, 4, "algebra"],
}

const aprobo = () => {
    for (let materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        document.writeln(materias[materia][3]);
        if (asistencias >= 90) {
            document.writeln("%c    Asistencias en orden", "color:green");
        } else {
            document.writeln("%c    Falta de asistencias", "color:red");
        }
        if (promedio >= 7) {
            document.writeln("%c    Promedio en orden", "color:green");
        } else {
            document.writeln("%c    Falta de promedio", "color:red");
        }
        if (trabajos >= 3) {
            document.writeln("%c    Trabajos en orden", "color:green");
        } else {
            document.writeln("%c    Falta de trabajos", "color:red");
        }
    }
}


aprobo();