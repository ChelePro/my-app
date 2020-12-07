//promesas
import {getHeroeByid} from './bases/08-imports'
import { heroes } from './data/heroes';




// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const p1= getHeroeByid(2);
//         resolve(p1);
//     },2000)
// });

// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// })
// .catch(err=> console.log(err));

const getHeroeByIdAsync = (id) => {
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const p1= getHeroeByid(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar');
            }
        },2000)
    });
    
}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)
    