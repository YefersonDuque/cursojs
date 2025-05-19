class Calculadora {
    constructor() {

    }
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp) {
        let numero = num;
        for (let i = 1; i < exp; i++) {
            numero = numero * num;
        }
        return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación deseas realizar?");
let operacion = prompt("1. Suma.  \n 2. Resta. \n 3. División. \n 4. Multiplicación. \n 5. Potenciación. \n 6. Raiz cuadrada. \n 7. Raiz cubica.");

if (operacion == 1) {
    let numero1 = prompt("Primer número para sumar: ");
    let numero2 = prompt("Segundo número para sumar: ");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Primer número para restar: ");
    let numero2 = prompt("Segundo número para restar: ");
    resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer número para dividir: ");
    let numero2 = prompt("Segundo número para dividir: ");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer número para multiplicar: ");
    let numero2 = prompt("Segundo número para multiplicar: ");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("Número a potenciar: ");
    let numero2 = prompt("Exponente: ");
    resultado = calculadora.potenciar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Número para sacar raiz cuadrada: ");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Número para sacar raiz cubica: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else {
    alert("La opción que respondío no es correcta.");
}


