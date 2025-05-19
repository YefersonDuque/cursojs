//------------SENTENCIA WHILE----------//
document.writeln("<b><br>Sentencia while.<br></b>")

let Number = 0;

while(Number < 5){
    Number++;
    document.writeln(Number);
}

//------------SENTENCIA DO WHILE----------//

document.writeln("<b><br>Sentencia do while.<br></b>")

numero = 0;

do{
    numero++;
    document.writeln(numero);
}
while(numero < 5)

    
//------------BREAK----------//

document.writeln("<b><br>Sentencia while con break.<br></b>")

numerob = 0;

while(numerob<100){
    numerob++;
    document.writeln(numerob);
    if(numerob==10){
        break; //Se aplica un break en la condicion para que se detenga en el momento que le indique.
    };
};
document.writeln("Fin");


//------------SENTENCIA FOR----------//

document.writeln("<b><br>Sentencia for.<br></b>") 

for(let i=10;i>1;i--){ //Inremento ++, decremento --
    if(i==5){
        break; // También se puede usar break para detenerse cuando le indique.
    }
    document.writeln(i)
}

//------------SENTENCIA CONTINUE----------//

document.writeln("<b><br>Sentencia continue.<br></b>") 

for(let i=0;i<10;i++){ //Inremento ++, decremento --
    if(i==5){
        continue; //Con el continue lo que hace es saltarse el número que se indica. También se peude usar break para detenerse cuando le indique.
    }
    document.writeln(i)
}


//------------SENTENCIA FOR IN----------//

document.writeln("<b><br>Sentencia for in.<br></b>")

let animales = ["Gato","Perro","Trex"];

for( let animal in animales){
    document.writeln(animal);//Muestra los índices: 0, 1, 2
    document.writeln(animales[animal]);// Muestra los valores: Gato, Perro, Trex
}


//------------SENTENCIA FOR OF----------//

document.writeln("<b><br>Sentencia for of.<br></b>")

let animales1 = ["Gato","Perro","Trex"];

for(animal of animales1){ // Muestra los valores: Gato, Perro, Trex
    document.writeln(animal)
}

//------------SENTENCIA FOR LABEL----------//

document.writeln("<b><br>Sentencia for label.<br></b>")

let array1 = ["Pedro","Maria","Jose"];
let array2 = ["Juan","Camilo",array1,"Andres"];

forlabel: //Se salta una vuelta de la sentencia y no toma el array1
for (let array in array2){
    if(array == 2){
        for (array of array1){
            continue forlabel;
            document.writeln(array + "<br>")
        }
        }else{
            document.writeln(array2[array] +"<br>")
    }
}


//------------FILTER----------//
