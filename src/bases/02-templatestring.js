const nombre="jose";
const apellido="lopez";

//template string
const nombreCompleto= `${ nombre } ${ apellido }`;

console.log( nombreCompleto );

function getSaludo(nombre){
    return ' hola ' + nombre ;
}
console.log(`este es un mensaje: ${getSaludo(nombre)}`);