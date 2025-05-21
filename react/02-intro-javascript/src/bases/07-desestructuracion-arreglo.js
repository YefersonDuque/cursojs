/* eslint-disable react-hooks/rules-of-hooks */
//Desestructuracipon de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
//Para llamar al arreglo en la posición 0, solo se pone un nombre x. Si es en ptra posición primero va ',' la cantidad de veces que se queira mover al otro arreglo
const [, , p1] = personajes;

console.log(p1);

const retornaArreglo = () => (['ABC', 123]);

const [letra, numero] = retornaArreglo();

console.log(letra, numero)

//TAREA: 
//1. El primer valor se llamará nombre 
//2. El segundo setNombre
const useState = (valor) => {
    return [valor, () => { console.log("Hola") }];
}

const [nombre, setNombre] = useState('yo');
console.log(nombre)
setNombre();