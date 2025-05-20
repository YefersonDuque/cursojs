let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos practicos";
let homework = "30 minutos trabajo en casa";
let descando = "10 minutos de descanso";

console.log("TAREAS");

for (let i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("Semana 1")
    }
    console.groupCollapsed("dia " + (i + 1));
    console.log(trabajo);
    console.log(descando);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd();
console.groupEnd();
