'use strict'

var express = require('express')
var favicon = require('serve-favicon')
var morgan = require('morgan')
var routes = require('./routes/index')
var faviconURL = `${__dirname}/public/img/node-favicon.png`
var publicDir = express.static(`${__dirname}/public`)
var viewDir = `${__dirname}/views`
var port = (process.env.PORT || 3000)
var app = express()

app.set('views', viewDir)
app.set('view engine', 'jade')
//app.set('view engine', 'ejs')
app.set('port', port)
//Middleware
app.use(favicon(faviconURL))
app.use(morgan('dev'))
app.use(publicDir)
//Middleware enrutador
app.use('/',routes)

module.exports = app