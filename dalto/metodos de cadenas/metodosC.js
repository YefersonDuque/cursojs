//..........CONCAT....Junta 2 o más cadenas y crea una nueva...
let cadena = " cadena de prueba prueba ";
let cadena2 ="cadena"

resultado  = cadena.concat(" hola");

document.writeln(resultado+"<br>");

//........STARTSWITH....Si una cadena empieza como otra cadena muestra true si no false

resultado2 = cadena.startsWith(cadena2);

document.writeln(resultado2+"<br>");

//........ENDSTSWITH....Si una cadena termina como otra cadena muestra true si no false

resultado2 = cadena.endsWith(cadena2);

document.writeln(resultado2+"<br>");

//.....INCLUDE....si una cadena puede ecnontrarse dentro de otra cadena encuentra true, si no false

resultado3 = cadena.includes(cadena2);

resultado = cadena.includes("prueba");

document.writeln(resultado3+"<br>");

document.writeln(resultado+"<br>");

//......INDEXOF....Devuelve la primer posición en la que esta palabra dentro de la cadena. Si no hay ninguna muestra -1

resultado = cadena.indexOf("de");

document.writeln(resultado+"<br>");
document.writeln(cadena[2]+"<br>");//Y dentro de esta indica la posición que quiere encontrar. 

//......LASTINDEXOF...Devuelve la última posición en la que esta palabra dentro de la cadena. Si no hay ninguna muestra -1

resultado = cadena.lastIndexOf("prueba");

document.writeln(resultado+"<br>");
document.writeln(cadena[17]+ cadena[18]+cadena[19]+"<br>");

//.......PADSTART...Rellena la cadena hasta la cantidad iniciada con la letra indicada al inicio

resultado = cadena.padStart(30, "e");

document.writeln(resultado+"<br>");

//.......PADEND...Rellena la cadena hasta la cantidad iniciada con la letra indicada al final

resultado = cadena.padEnd(30, "e");

document.writeln(resultado+"<br>");

//.......REPEAT...Repite la cadena las veces que indique

resultado = cadena.repeat(3);

document.writeln(resultado+"<br>");

