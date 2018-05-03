'use strict'

var app = require('./app')
var server = app.listen(app.get('port'), ()=>{
    console.log(`Iniciando Express en el puerto ${app.get('port')}`)
})


console.log('Servidor corriendo en el puerto');
