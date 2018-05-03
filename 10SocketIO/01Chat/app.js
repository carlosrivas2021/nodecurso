'use strict'


var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var port = process.env.port || 3000
var publicDir = express.static(`${__dirname}/public`)


app.use(publicDir)
app.get('/',(req, res)=>{
    console.log('entro');
    res.sendFile(`${publicDir}/index.html`)
    
    
})

http.listen(port, ()=>{
    console.log(`Iniciando express y socket.io en el puerto ${port}`);
})

io.on('connection', (socket)=>{
    socket.broadcast.emit('new user', {message: 'Ha entrado un usuario al chat'})

    socket.on('new message', (message)=>{
        console.log(message);
        io.emit('user says', message)
      //  socket.broadcast.emit('user says', message)
    })

    socket.on('disconnect', ()=>{
        console.log(`Ha salido un usuario del chat`);
        socket.broadcast.emit('bye bye user', {message: 'Ha salido un usuario del chat'})
    })
})