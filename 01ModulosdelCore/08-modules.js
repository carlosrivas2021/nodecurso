'use strict'

var myData = require('./my-data'),
    //Clock = require('./clock-es5'),
    Clock = require('./clock-es6'),
    cucu = new Clock();

console.log(
    myData.name,
    myData.email,
);

cucu.on('tictac', function (){
    cucu.theTime()
})

