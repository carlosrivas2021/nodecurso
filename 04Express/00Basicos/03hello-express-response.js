'use strict'

var express = require('express')
var app = express()

app.get('/', (req, res) => {
    //res.end('<h1>Hola con express</h1>')
    res.send('<h1>Hola con express</h1>')
})
app.get('/bextlan', (req, res) => {
    //res.send('<h1>Bienvenid@s a Bextlán... Lugar de bits, vectores y pixeles</h1>')
    res.redirect(301, 'https://google.com')
})

app.get('/json', (req, res) => {
    //res.end('<h1>Hola con express</h1>')
    res.json({
        name: "Carlos",
        age: 28,
        twitter: "@carlosrivas2021"
    })
})

app.get('/render', (req, res) => {
    res.render(`${__dirname}/assets/index.html`)
})

app.listen(3000)

console.log('Iniciando express en el puerto 3000');