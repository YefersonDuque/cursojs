let letra = "a ",letra1=" b";

frase = letra.concat(letra1+"<br>"); //Se usa 'concat' para unir dos string

document.writeln(frase);

//Otra forma de concatenar

nombre = "Yeferson";
frase = "Hola " + nombre + ", ¿cómo estás?<br>";
document.writeln(frase);

//Otra forma

nombre1 = "Yeferson";
frase1 = `Hola  ${nombre} ¿cómo estás?`;
document.writeln(frase1);

