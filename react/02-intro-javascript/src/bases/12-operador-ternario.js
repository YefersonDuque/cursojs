const activo = true;

// Condicional
// let mensaje='';

// if(!activo){
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }

//...................Operador condicional ternario
// const mensaje = (!activo)? 'Activo':'inactivo';

//...................Si solo es una que va a hacer algo cuando sea true y no se necesita la opcion de false: 
// const mensaje = (activo)? 'Activo':null;

//...................O también: 
const mensaje = activo && 'Activo';

console.log(mensaje);
