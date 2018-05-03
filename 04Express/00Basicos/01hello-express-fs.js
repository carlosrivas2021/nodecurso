'use strict'

var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.sendFile( `${__dirname}/assets/index.html` )
})

app.listen(3000)

console.log('Iniciando express en el puerto 3000');