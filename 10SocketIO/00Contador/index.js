'use strict'

var http = require('http').createServer(server)
var fs = require('fs')
var io = require('socket.io')(http)
var connections = 0

function server(req, res){
    fs.readFile('./index.html',(err, data)=>{
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'})
            return res.end('<h1>Error interno en el servidor</h1>')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        return res.end(data, 'utf-8')
    })
}

http.listen(3000)

console.log('Servidor activo en el puerto 3000');


io.on('connection', (socket)=>{
    socket.emit('hello', {message: 'Hola Mundo con Socket.io'})

    socket.on('otro evento que me invente', (data)=>{
        console.log(data)
    })

    connections++

    console.log(`Conexiones activas: ${connections}`);

    socket.emit('connect users',{ numbers: connections})
    socket.broadcast.emit('connect users',{ numbers: connections})

    socket.on('disconnect', ()=>{
        connections--
        console.log(`Conexiones activas: ${connections}`);
        socket.broadcast.emit('connect users',{ numbers: connections})
    })
})