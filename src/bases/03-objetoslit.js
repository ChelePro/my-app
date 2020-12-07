const perosna={
    nombre:'jose',
    apellido:'lopez',
    edad: 24,
    
};

const perosna2={...perosna}
perosna2.nombre='peter';

console.log(perosna2);
console.log(perosna);