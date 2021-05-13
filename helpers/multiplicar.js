
const fs = require ('fs');



const tablaMultiplicar = async(base)=>{

    try {

        console.log("====================");
        console.log("  Tabla del", base);
        console.log("====================");
    
        salida ="";
        for (let i = 1; i <= 10; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        };
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return (`tabla del ${base} creada con exito`);
        
    } catch (err) {

        throw err;
        
    }

};

module.exports = {
    tablaMultiplicar
};
