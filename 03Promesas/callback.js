'use strict'

var fs = require('fs'),
    file = './assets/nombres.txt',
    newfile = './assets/nombres-callback.txt'

fs.access(file, fs.F_OK, function (err){
    if(err){
        console.log('El archivo no existe');
    }else{
        console.log('El archivo existe');
        fs.readFile(file,function (err, data){
            if(err){
                console.log('El archivo no se pudo leer');
            }else{
                console.log('El archivo se ha leido exitosamente');
                fs.writeFile(newfile, data, function (err){
                    return (err) ? console.log('El archivo no se pudo copiar') : console.log('El archivo se ha copiado con exito')
                })
            }
        })
    }
})