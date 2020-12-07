//desestructuracion

const persona={
    nombre:'jose',
    edad:24,
    clave:'qwerty'

}

const retornaPersona=({clave, nombre, edad, rango='mortal'})=>{
// console.log(nombre, edad,rango);
        return{
            nombreclave:clave,
            anios: edad,
            latlng:{
                lat:12.1231,
                lng:-23.123
            }

        }
}
const {nombreclave,anios,latlng:{lat, lng}}= retornaPersona(persona);
console.log(nombreclave,anios);
console.log(lat, lng);