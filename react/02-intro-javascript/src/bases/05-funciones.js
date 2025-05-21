//Funciones anteriores
function saludo(nombre) {
    return `Saludo a ${nombre}`
}

//Funciones modernas
const saludar = (nombre) => {
    return `Hola ${nombre}`
}

// Se puede usar la función flecha de esta maenra si solo recibe un return, más simplificado.
const saludar1 = (nombre) => `Hola ${nombre}`;

// De esta manera si se usa una funcion para mostrar un objeto
const getUser = () => ({ id: "1234", name: "pepe" });

console.log(saludar("Yefer"));
console.log(saludo("Yefito"));
console.log(saludar1("Yefry"));
console.log(getUser());

//TAREA: 
// 1. Transformar a funsión flecha.
// 2. Tiene que retornar un objeto implicito.
// 3. Pruebas.

// function getUsuarioActivo(nombre){
//     return {
//         id: 1232, 
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({ id: 1232, username: nombre });

const usuarioActivo = getUsuarioActivo("Andres");
console.log(usuarioActivo);