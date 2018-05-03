'use strict'

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter()
let a = 1
pub.on('myevent', function (message){

    console.log(a + ' ' + message);
    a = a+1
})

pub.once('myevent',function (message){
    console.log('Se emite la primera vez: ' + message);
    
})

pub.emit('myevent', 'Soy un emisor de Eventos')
pub.emit('myevent', 'Volviendo a emitir')

pub.removeAllListeners('myevent')

pub.emit('myevent', 'Volviendo a emitir')