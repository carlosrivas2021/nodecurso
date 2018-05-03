'use strict'

var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.end('<h1>Hola con express :)</h1>')
})
app.get('/user/:id/:name-:age', (req, res) => {
    res.end(`<h1>${req.params.name}, bienvenid@ a Express :) tu ID es ${req.params.id} y tienes ${req.params.age} a&ntilde;os</h1>`)
})

app.get('/search', (req,res)=>{
    res.end(`
        <h1>
            Bienvenido a Express, los resultados de tu busqueda son: 
            <mark>${(req.query.s) ? req.query.s: 'nada'}</mark>
        </h1>
    `)
})

app.listen(3000)

console.log('Iniciando express en el puerto 3000');