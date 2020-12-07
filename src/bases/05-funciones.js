// const saludar = function saludo(nombre){
//     return `hola, ${ nombre }`;

// }
const saludar2 = (nombre)=>{
    return `hola, ${ nombre }`;

}

console.log(saludar2) 

const getUser=()=>({
    
        id:'qwerr',
        username:'asdf'
    
});

console.log(getUser);
//tranformar a funcion flecha
// tiene que retornar u pbjeto implicito
// pruebas

//////////////////////////////////
 const getUsuarioActivo=(nombre)=>({
        uid:'ABCDEF',
        username:nombre
});

const usuarioActivo = getUsuarioActivo('Jose');
console.log(usuarioActivo);