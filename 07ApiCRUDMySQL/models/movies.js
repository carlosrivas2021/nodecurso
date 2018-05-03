'use strict'

var mysql = require('mysql')
var myConnection = require('express-myconnection')
var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '200306',
    port: 3306,
    database: 'movies'
}

var Movies = myConnection(mysql, dbOptions, 'request')

module.exports = Movies