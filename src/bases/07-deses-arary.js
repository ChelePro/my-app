//desestructracion de arreglos

const personajes= ['roca','papal','madera','oro'];
const[,,p1]= personajes;
console.log(p1);

const retornaArray=()=>{
    return['ASD',123];
}

const [ letras, numeros]= retornaArray();
console.log(letras,numeros);
// 
// 
const Mensaje=(valor)=>{
    return [valor,()=>{console.log('hola mundo');}]
}
const [nombre,setNombre]=Mensaje('JE');
console.log(nombre);
setNombre();
