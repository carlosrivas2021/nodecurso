'use strict'

var mysql = require('mysql')
var conf = require('./db-conf')
var dbOptions = {
    host: conf.mysql.host,
    user: conf.mysql.user,
    password: conf.mysql.password,
    port: conf.mysql.port,
    database: conf.mysql.database
}
var myConn = mysql.createConnection(dbOptions)

myConn.connect((err) => {
    return (err) ? console.log(`Error al conectarse al MySQL: ${err.stack}`) : console.log(`conexion establecida con MySQL N: ${myConn.threadId}`)
})

module.exports = myConn