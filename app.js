
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./yargs/config');
const colors = require('colors');


crearArchivo(argv.b,argv.h,argv.l)
    .then(nomArchivo => console.log(`${nomArchivo.cyan} Creado`))
    .catch(err => console.log(err))





