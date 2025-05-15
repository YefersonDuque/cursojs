//---------ARREGLOS--------//
let frutas = ["Manzana","Banano","pera"];

document.writeln(frutas[2]+"<br>");
document.writeln(".............................................<br><br>")
//---------ARREGLOS ASOCIATIVOS---------//

let pc = {
    nombre:"pc",
    procesador: "Intel Core i7",
    ram:"16GB",
    espacio:"1TB"
};
document.writeln(pc["ram"]+"<br><br>")
//De esta otra manera también se pueden mostrar los mensajes
document.writeln(`El nombre es ${pc.nombre}, el procesador es ${pc.procesador}`)
