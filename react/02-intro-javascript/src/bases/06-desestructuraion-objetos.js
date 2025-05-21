//Desestructuración

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "IRoman"
};

//Aquí le dice en la constante: 
// Treaeme { El valor que quiero mostrar } en la constante = persona
const {nombre, edad} = persona;

console.log(nombre,edad);

const useContext = ({clave, edad}) => {
    return {
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat:13.231,
            lng:-23.42142
        }
    }
}
// a mi manera que tambien funciona.
// const avenger = useContext(persona);

//desestructuración como el curso
// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave,anios, latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, anios,lat,lng);