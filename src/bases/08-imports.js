//import { heroes } from './data/heroes'

import { heroes } from '../data/heroes';


export const getHeroeByid=(id) => {
    return  heroes.find((heroe) => heroe.id===id);
}
//console.log( getHeroeByid(2) );


// const getHeroesByowner=(owner)=>{
//      heroes.filter((heroe) => heroe.owner===owner);
// }
// console.log( getHeroesByowner ('Marver'));