const fs = require('fs');
const colors = require('colors');

const getTabla = (n,longitud) =>{
    let consola = "";
    let salida = "";

    let res = [];
    for(let i = 0; i < longitud ; i++){
        res[i] = n*(i+1);
    }
    res.map((el , index ) =>{
        if((index < (longitud - 1))){
            salida += `${n} ${'x'} ${index+1} ${'='} ${el}\n`;
            consola += `${n} ${'x'.red} ${index+1} ${'='.red} ${el}\n`;
        }else{
            salida += `${n} ${'x'} ${index+1} ${'='} ${el}`;
            consola += `${n} ${'x'.red} ${index+1} ${'='.red} ${el}`;
        }

    })
    return {salida,consola};
}

const crearArchivo = async (tabla = 5, longitud = 10,listar) =>{

    try {
        let {salida,consola} = await getTabla(tabla,longitud);
        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida)
        if(listar) console.log(consola);
        return `tabla-${tabla}.txt`;
    } catch (error) {
        throw error;
    }

    // console.log(`tabla-${tabla}.txt Creada`);
}

module.exports = {
    crearArchivo
}