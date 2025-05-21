import { heroes } from '../data/heroes.js';

const getHeroeById = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroeByUd(3));

const getHeroeByOwner = (owner) => heroes.filter((hero) => hero.owner === owner); //Aquí con el filter, filtra todos los que tengan el nombre buscado

// console.log(getHeroeByOwner('DC'))

const getHeroeByName = (name) => heroes.find((hero) => hero.name === name);

// console.log(getHeroeByName('Spiderman'))

export{
    getHeroeByName,
    getHeroeByOwner,
    getHeroeById
}