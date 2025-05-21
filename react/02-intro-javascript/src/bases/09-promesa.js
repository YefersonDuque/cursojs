import { getHeroeById } from '../bases/08-import-export.js'

// const promesa =  new Promise((resolve, reject)=>{
//     setTimeout ( () => {
//         const heroe = getHeroeById(1);
//         resolve(heroe);
//         reject('No se pudo encontrar del heroe');
//     }, 2000)
// });

// promesa.then((heroe)=>{
//     console.log('Heroe', heroe)
// }).catch(err => console.warn(err))

//Tarea: 
// 1.Agregar el catch 
// 2.Validar si el id es undefined y enviar un mensaje
const getHerowByIdArync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe); //Lo devuelve si es correcto
            } else {
                reject('No se pudo encontrar el heroe con ese id'); //Devuelve si hay error
            }
        }, 2000)
    });
}

getHerowByIdArync(1).then(console.log).catch(console.error);