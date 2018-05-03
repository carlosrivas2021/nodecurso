'use strict'

var express = require('express')
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var routes = require('./routes/index')
var faviconURL = `${__dirname}/public/img/node-favicon.png`
var publicDir = express.static(`${__dirname}/public`)
var viewDir = `${__dirname}/views`
var port = (process.env.PORT || 3000)
var app = express()

app.set('views', viewDir)
//nueva version de jade
app.set('view engine', 'pug')
app.set('port', port)
//Middleware
app.use(favicon(faviconURL))
//parse application/json
app.use(bodyParser.json())
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(publicDir)
//Middleware enrutador
app.use('/',routes)

module.exports = app