const arreglo = [1,2,3,4];

let arreglo2 =[...arreglo, 5]; //El poperador splet '...', trae los datos que tenga el arreglo o lo que se este llamando

const arreglo3 = arreglo2.map(function(numero){ //Metodo map
    return numero;
}); 

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);