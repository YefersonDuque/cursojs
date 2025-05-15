document.writeln("Operadores de comparación<br>")
//---------------OPERADORES DE COMPARACIÓN-------------
//Operador de igualdad
let num1 = 2;
let num2 = 3;

document.writeln((num1 == num2)+"<br>");

//Operador de comparación
let num = 2;
let num0 = 3

//También se pueden comparar los string
let texto = "Texto"
let texto1 = "Texto1"
document.writeln((texto != texto1)+"<br>");

//Operador de que sea exactamente identico y el mismo valor
let num11 = 2;
let num22 = 2;

document.writeln((num11 === num22)+"<br>");

//Operador de que no sea exactamente identico y el mismo valor. Si no es igual, dará true porque se cumple la condición
let num12 = 2;
let num21 = 3;

document.writeln((num12 !== num21)+"<br>");

//Operador de mayor, menor, mayor o iugal, etc... Al poner dos '>=', si cumple una de las dos es true

let num3 = 2;
let num4 = 3;

document.writeln((num3 < num4)+"<br>");

//-----------------------OPERADORES LÓGICOS----------------
document.writeln("<br><br><br>Operadores lógicos")

let valor = true;
let valor1 = true;

let resultado = valor && valor1; //Si las dos son iguales o las dos es true, devuelve true
let resultado1 = valor || valor1;//Si una de las dos es true, devuelve true
let resultado2 = !valor;//Si es verdadero, lo pasa a falso y viceversa... y solo funcione con valores lógicos (true-false)

document.writeln("<br>" + resultado);
document.writeln("<br>" + resultado1);
document.writeln("<br>" + resultado2);