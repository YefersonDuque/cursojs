function saludar() {
    respuesta = prompt("Cómo estás? ");
    if (respuesta == "bien")
        alert("Me alegro")
    else
        alert("Que mal")
}

saludar();

//.........PRACTICA OPERACIONES - FUNCION FLECHA..........//

    const operacion = (num1, num2) => { //Al poner las variables en la función (aquí), es como si se declararn por fuera con let 
    num1 = Number(prompt("Ingrese el primer número: "));//Se le pone number antes del prompt para que lo tome como un entero
    num2 = Number(prompt("Ingrese el segundo núemro: "));
    let opcion = prompt("1: suma, 2:resta, 3:multiplicar, 4:dividir");
    if (opcion == 1) {
        alert(`El resultado de la suma entre el número ${num1} y ${num2} es: ${num1 + num2}`);
    }
    else if (opcion == 2) {
        alert(`El resultado de la resta entre el número ${num1} y ${num2} es: ${num1 - num2}`);
    }
    else if (opcion == 3) {
        alert(`El resultado de la multiplicación entre el número ${num1} y ${num2} es: ${num1 * num2}`);
    }
    else if (opcion == 4) {
        alert(`El resultado de la división entre el número ${num1} y ${num2} es: ${num1 / num2}`);

    }
}

alert("Vamos a realizar una operación.");
operacion();

//-----------SALUDAR----------//

function saludar0(nom){
    let frase = `Hola ${nom}, cómo estás?`
    document.writeln(frase);
}

saludar0("Yef");

//..........SALUDAR EN FUNCTION FLECHA..........//

const saludar2 = nombre => { //Para la función flecha no se pone function, en lugar se pone la flecha y actua de igual manera '=>' y Si solo es un parametro no necesita '()'
    let frase = `Hola ${nombre}, cómo estás?`
    document.writeln(frase);
};

saludar2("Yef");

//..........SALUDAR EN FUNCTION FLECHA SIMPLIFICADO..........//

let nombre = "Yef";

let frase = `Hola ${nombre}, cómo estás?`; //Se crea esta global

const saludar1 = () => document.writeln(frase);

saludar1();

//...........................

const saludarr = (nombre) => {
    document.writeln("Hola, cómo estas? " + nombre)
}
saludarr("ye")

