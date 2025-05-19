//..........CONCAT....Junta 2 o más cadenas y crea una nueva...
document.writeln("---concat---<br>");
let cadena = " Cadena de prueba prueba ";
let cadena2 ="cadena"

resultado  = cadena.concat(" hola");

document.writeln(resultado+"<br>");

//........STARTSWITH....Si una cadena empieza como otra cadena muestra true si no false
document.writeln("<br><br>---starsWith---<br>");

resultado2 = cadena.startsWith(cadena2);

document.writeln(resultado2+"<br>");

//........ENDSTSWITH....Si una cadena termina como otra cadena muestra true si no false
document.writeln("<br><br>---endsWith---<br>");

resultado2 = cadena.endsWith(cadena2);

document.writeln(resultado2+"<br>");

//.....INCLUDE....si una cadena puede ecnontrarse dentro de otra cadena encuentra true, si no false
document.writeln("<br><br>---include---<br>");

resultado3 = cadena.includes(cadena2);

resultado = cadena.includes("prueba");

document.writeln(resultado3+"<br>");

document.writeln(resultado+"<br>");

//......INDEXOF....Devuelve la primer posición en la que esta palabra dentro de la cadena. Si no hay ninguna muestra -1
document.writeln("<br><br>---indexOf---<br>");

resultado = cadena.indexOf("de");

document.writeln(resultado+"<br>");
document.writeln(cadena[2]+"<br>");//Y dentro de esta indica la posición que quiere encontrar. 

//......LASTINDEXOF...Devuelve la última posición en la que esta palabra dentro de la cadena. Si no hay ninguna muestra -1
document.writeln("<br><br>---lastIndexOf---<br>");

resultado = cadena.lastIndexOf("prueba");

document.writeln(resultado+"<br>");
document.writeln(cadena[17]+ cadena[18]+cadena[19]+"<br>");

//.......PADSTART...Rellena la cadena hasta la cantidad iniciada con la letra indicada al inicio
document.writeln("<br><br>---padStart---<br>");

resultado = cadena.padStart(30, "e");

document.writeln(resultado+"<br>");

//.......PADEND...Rellena la cadena hasta la cantidad iniciada con la letra indicada al final
document.writeln("<br><br>---padEnd---<br>");

resultado = cadena.padEnd(30, "e");

document.writeln(resultado+"<br>");

//.......REPEAT...Repite la cadena las veces que indique
document.writeln("<br><br>---repeat---<br>");

resultado = cadena.repeat(3);

document.writeln(resultado+"<br>");

//.....SPLIT...Divide la cadena como le pidamos..
document.writeln("<br><br>---split---<br>");

resultado = cadena.split(" ");

document.writeln(resultado[2]);

//....SUBSTRING....Nos devuelve lo que seleccionamos
document.writeln("<br><br>---subsTring---<br>");

resultado = cadena.substring(0,24);

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


