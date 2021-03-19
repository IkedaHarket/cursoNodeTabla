const { describe } = require('yargs');
const colors = require('colors');

const argv = require('yargs')
                .options({
                    'b':{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe: "Es la base de la tabla de multiplicar"
                            },
                    'l':{
                        alias:'listar',
                        type: 'boolean',
                        default: false,
                        describe:"Muestra la tabla en consola"
                            },
                    'h':{
                        alias:'hasta',
                        type: 'number',
                        default: 10,
                        describe:"Hasta que numero sera la tabla"
                            },        
                })
                .check((argv,options) =>{
                    if(isNaN(argv.b)) throw 'La base debe ser un numero'.red;
                    if(isNaN(argv.h)) throw 'El largo de la tabla debe ser numerico'.red;
                    return true;
                })
                .argv;

module.exports = argv;