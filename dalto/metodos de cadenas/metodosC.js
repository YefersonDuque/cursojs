//..........CONCAT....Junta 2 o más cadenas y crea una nueva...
document.writeln("---concat---<br>");
let cadena = " Cadena de prueba prueba ";
let cadena2 = "cadena"

resultado = cadena.concat(" hola");

document.writeln(resultado + "<br>");

//........STARTSWITH....Si una cadena empieza como otra cadena muestra true si no false
document.writeln("<br><br>---starsWith---<br>");

resultado2 = cadena.startsWith(cadena2);

document.writeln(resultado2 + "<br>");

//........ENDSTSWITH....Si una cadena termina como otra cadena muestra true si no false
document.writeln("<br><br>---endsWith---<br>");

resultado2 = cadena.endsWith(cadena2);

document.writeln(resultado2 + "<br>");

//.....INCLUDE....si una cadena puede ecnontrarse dentro de otra cadena encuentra true, si no false
document.writeln("<br><br>---include---<br>");

resultado3 = cadena.includes(cadena2);

resultado = cadena.includes("prueba");

document.writeln(resultado3 + "<br>");

document.writeln(resultado + "<br>");

//......INDEXOF....Devuelve la primer posición en la que esta palabra dentro de la cadena. Si no hay ninguna muestra -1
document.writeln("<br><br>---indexOf---<br>");

resultado = cadena.indexOf("de");

document.writeln(resultado + "<br>");
document.writeln(cadena[2] + "<br>");//Y dentro de esta indica la posición que quiere encontrar. 

//......LASTINDEXOF...Devuelve la última posición en la que esta palabra dentro de la cadena. Si no hay ninguna muestra -1
document.writeln("<br><br>---lastIndexOf---<br>");

resultado = cadena.lastIndexOf("prueba");

document.writeln(resultado + "<br>");
document.writeln(cadena[17] + cadena[18] + cadena[19] + "<br>");

//.......PADSTART...Rellena la cadena hasta la cantidad iniciada con la letra indicada al inicio
document.writeln("<br><br>---padStart---<br>");

resultado = cadena.padStart(30, "e");

document.writeln(resultado + "<br>");

//.......PADEND...Rellena la cadena hasta la cantidad iniciada con la letra indicada al final
document.writeln("<br><br>---padEnd---<br>");

resultado = cadena.padEnd(30, "e");

document.writeln(resultado + "<br>");

//.......REPEAT...Repite la cadena las veces que indique
document.writeln("<br><br>---repeat---<br>");

resultado = cadena.repeat(3);

document.writeln(resultado + "<br>");

//.....SPLIT...Divide la cadena como le pidamos..
document.writeln("<br><br>---split---<br>");

resultado = cadena.split(" ");

document.writeln(resultado[2]);

//....SUBSTRING....Nos devuelve lo que seleccionamos
document.writeln("<br><br>---subsTring---<br>");

resultado = cadena.substring(0, 24);

document.writeln(resultado);

//....TOLOWERCASE...Convierte una cadena a minuscula
document.writeln("<br><br>---tolowerCase---<br>");

resultado = cadena.toLocaleLowerCase();

document.writeln(resultado);

//....TOUPPERCASE...Convierte una cadena a mayusculas
document.writeln("<br><br>---toUpperCase---<br>");

resultado = cadena.toUpperCase();

document.writeln(resultado);

//....TOSTRING....Conveirte la cadena en string
document.writeln("<br><br>---toString---<br>")

let cadena1 = 1234;

let resultado4 = cadena1.toString();

document.writeln(resultado4);

//...TRIM...Elimina los espacios innecesarios en blanco
document.writeln("<br><br>---trim---<br>");
let cadena0 = " Cadena   de prueba prueba ";

resultado = cadena0.trim();

document.writeln(resultado);

//...TRIMEND...Elimina los espacios innecesarios al final
document.writeln("<br><br>---trimEnd---<br>");
let cadena01 = " Cadena   de prueba prueba ";

resultado = cadena01.trimEnd();

document.writeln(resultado);

//...TRIM...Elimina los espacios innecesarios al principio
document.writeln("<br><br>---trimStart---<br>");
let cadena02 = " Cadena   de prueba prueba ";

resultado = cadena02.trimStart();

document.writeln(resultado);

//...VALUEOF...
document.writeln("<br><br><br>/---INICIO MÉTODOS ARRAY---\\<br>");
document.writeln("<br><br><br>/---MÉTODOS TRANSFORMADORES---\\<br>");

//...POP...Elimina el último elemento del array y lo muestra.

document.writeln("<br><br>---pop---<br>");
let nombres = ["Pedro", "Yefer", "Jenny", "Pablo"];

let res = nombres.pop();

document.writeln(res + "<br>");
document.writeln(nombres);


//...SHIFT...Elimina el primer elemento del array y lo muestra.

document.writeln("<br><br>---shift---<br>");

res = nombres.shift();

document.writeln(res + "<br>");
document.writeln(nombres);

//...UNSHIFT...agrega uno o más elemento al inicio del array.

document.writeln("<br><br>---unshift---<br>");

res = nombres.unshift();

document.writeln(res + "<br>");
document.writeln(nombres);


//....PUSH...Agrega uno o más elemento al final del arreglo
document.writeln("<br><br>---push---<br>")

res = nombres.push("Mery", "Jen");

document.writeln(res + "<br>");

document.writeln(nombres);

//....REVERSE...Agrega uno o  elemento al final del arreglo
document.writeln("<br><br>---reverse---<br>")

document.writeln(nombres + "<br>");//Antes de reverse

res = nombres.reverse();

document.writeln(res);//Después de reverse

//...SORT...Ordena el arreglo de forma alfabeticamente

document.writeln("<br><br>---sort---<br>");

document.writeln(nombres + "<br>");//Antes de organizar

res = nombres.sort();

document.writeln(res);

//...SPLICE...Elimina los elementos desde - hasta donde le indique. Y también agrega nuevos elementos.
document.writeln("<br><br>---splice---<br>");

let nombres1 = ["Pedro", "Yefer", "Jenny", "Pablo"];

document.writeln(nombres1 + "<br>");//Antes de eliminar

res = nombres1.splice(2, 0, "yefi");//el pirmer número es la desde que posición se va a eliminar o agregar y el segundo la cantidad a eliminar. y puede agregar un nombre donde elimino.
document.writeln(res + "<br>");//Elemento modificado
document.writeln(nombres1);//Después de eliminar los seleccionados.

//... METODOS ACCESORES ...
document.writeln("<br><br><br>--- MÉTODOS ACCESORES ---");
//...JOIN... los convierte en un arreglo y se puede separar por algo... 
document.writeln("<br><br>--- join ---<br>");

document.writeln(nombres + "<br>");

let resu = nombres.join(" - ");

document.writeln(resu);

//....SLICE....Limita los elementos que se muestran 
document.writeln("<br><br>--- slice ---<br>");

document.writeln(nombres + "<br>")

resul = nombres.slice(0, 2);//Si pone solo 0 se muestran todos los elementos del arreglo

document.writeln(resul);

//....MÉTODOS DE REPETICIÓN....
document.writeln("<br><br>--- MÉTODOS DE REPETICIÓN ---<br>");

//------------FILTER-BUCLE----------//Recorre el bucle y filtra todo lo que tiene el arreglo

document.writeln("<br><br>--- filter ---<br>");
let numeros = ["Manzana", "Pera", "Guayaba", "Limon", "Sandia"];

numeros.filter(numero => document.writeln(numero + "<br>"));
document.writeln("<br>Filter con condición que tenga mas de 5 caracteres<br>");
rest = numeros.filter(numero => numero.length > 5);//Muestra los resultados de los elementos que tengan más de 5 caracteres

document.writeln(rest + "<br>");


//------------FOREACH-BUCLE----------//Foreach funciona similar al filter, solo que en filter se puede filtrar de más maneras y en foreach solo muestra los elementos que tiene el arreglo.

document.writeln("<br><br>--- foreach ---<br>");
let numeross = ["Manzana", "Pera", "Guayaba", "Limon", "Sandia"];

numeross.forEach(numero => document.writeln(numero + "<br>"));





