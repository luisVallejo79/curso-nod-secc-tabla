const {tablaMultiplicar} = require('./helpers/multiplicar');

console.clear();

/* base = 8; */


console.log(process.argv);

const [, , arg3 = 'base = 9'] = process.argv; //arg3 = 'base = 9 valor argunmento por defecto

/* console.log(arg3); */

const[, base] = arg3.split('=');

console.log(base);

tablaMultiplicar(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err =>console.log(err));

