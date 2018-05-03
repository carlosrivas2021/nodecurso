'use strict'

var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')


app.use( cookieParser() )

app.use( cookieSession( {secret: "secreto"} ) )

app.get('/', (req, res) => {
    req.session.visitas || (req.session.visitas = 0)
    let n = req.session.visitas++
    res.end(`
        <h1>
            Hola desde express, me has visitado ${n} veces
        </h1>`)
})

app.listen(3000)

console.log('Iniciando express en el puerto 3000');