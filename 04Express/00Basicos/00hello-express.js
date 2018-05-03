'use strict'

var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hola con express</h1>')
})

app.listen(3000)

console.log('Iniciando express en el puerto 3000');