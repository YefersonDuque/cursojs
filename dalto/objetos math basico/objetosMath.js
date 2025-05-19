
//------ MÉTODOS MATH ----------

//.... sqrt
document.writeln("<br><br>---MÉTODOS MATH----<br>");
document.writeln("<br>>>>>>>>>>> SQRT <<<<<<<<<< Devuelve la raíz cuadrada <br>");

let numero = Math.sqrt(25);

document.writeln(numero);

//.... sbrt
document.writeln("<br><br>>>>>>>>>>> CBRT <<<<<<<<<< Devuelve la raíz cubica <br>");

numero = Math.cbrt(25);

document.writeln(numero);

//....max
document.writeln("<br><br>>>>>>>>>>> MAX <<<<<<<<<< Devuelve el número mayor <br>");

numero = Math.max(1,4,2,5,6,14,24,63);

document.writeln(numero);


//....min
document.writeln("<br><br>>>>>>>>>>> MIN <<<<<<<<<< Devuelve el número menor <br>");

numero = Math.min(1,4,2,5,6,14,24,63);

document.writeln(numero);

//....random
document.writeln("<br><br>>>>>>>>>>> RANDOM <<<<<<<<<< Devuelve un número aleatorio entre 0 y 1 <br>");

numero = Math.random();//Así es de 0 a 1.

document.writeln(numero+"<br>");
//.................................
let numero12 = Math.random()*100;//Se redondea de esta manera o la de abajo
numero12= Math.round(numero12);

document.writeln(numero12+"<br>");
//.................................

let numero1 = Math.random()*100;//Este de 0 a 100.
numero1 = numero1.toString();
num= numero1[0] + numero1[1];
if(numero1[1]=="."){
    num = numero1[0];
}
document.writeln(num);

//.... round
document.writeln("<br><br>>>>>>>>>>> ROUND <<<<<<<<<< Redondea un número entero más cercano.<br>");

numero = Math.round(1.6);

document.writeln(numero);

//.... fround
document.writeln("<br><br>>>>>>>>>>> FROUND <<<<<<<<<< Redondea el número flotante <br>");

numero = Math.fround(4.5899);
document.writeln(numero);

//.... floor .... muestra el número menor al decimal = 4.9, 4.6, 4.1 : todos estos devuelven 4
document.writeln("<br><br>>>>>>>>>>> FLOOR <<<<<<<<<< Devuelve el mayor entero '<' o '=' a un número <br>");

numero = Math.floor(4.9);
document.writeln(numero);

//.... trunc .... muestra el número menor al decimal = 4.9, 4.6, 4.1 : todos estos devuelven 4
document.writeln("<br><br>>>>>>>>>>> TRUNC <<<<<<<<<< Devuelve la parte entera del número eliminando los fraccionarios. <br>");

numero = Math.trunc(9.19);
document.writeln(numero);

//....PROPIEDADES
document.writeln("<br><br><br>---PROPIEDADES----<br>");

//.... PI
document.writeln("<br><br>>>>>>>>>>> PI <<<<<<<<<< Radio de la circunferencia de un circulo respecto a su diametro... <br>");

numero = Math.PI;

document.writeln(numero);

//.... SQRT1_2
document.writeln("<br><br>>>>>>>>>>> SQRT1_2 <<<<<<<<<< Raiz cuadrada de 1/2 .<br>");

numero = Math.SQRT1_2;

document.writeln(numero);

//.... SQRT2
document.writeln("<br><br>>>>>>>>>>> SQRT2 <<<<<<<<<< Raiz cuadrada de 2 .<br>");

numero = Math.SQRT2;

document.writeln(numero);

//.... E
document.writeln("<br><br>>>>>>>>>>> E <<<<<<<<<< Constante de Euler, la base de los logaritmos naturales.<br>");

numero = Math.E;

document.writeln(numero);

//.... LN2
document.writeln("<br><br>>>>>>>>>>> LN2 <<<<<<<<<< Logaritmo natural de 2 .<br>");

numero = Math.LN2;

document.writeln(numero);

//.... LN10
document.writeln("<br><br>>>>>>>>>>> LN10 <<<<<<<<<< Logaritmo natural de 10 .<br>");

numero = Math.LN10;

document.writeln(numero);

//.... LOG2E
document.writeln("<br><br>>>>>>>>>>> LOG2E <<<<<<<<<< Logaritmo natural de E con base 2 .<br>");

numero = Math.LOG2E;

document.writeln(numero);

//.... LOG10E
document.writeln("<br><br>>>>>>>>>>> LOG10E <<<<<<<<<< Logaritmo natural de E con base 10 .<br>");

numero = Math.LOG10E;

document.writeln(numero);