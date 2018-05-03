'use strict'

var mongoose = require('mongoose')
var conf = require('./db-conf')
var Schema = mongoose.Schema
var MovieSchema = new Schema({
    movie_id: "string",
    title: "string",
    release_year: "string",
    rating: "string",
    image: "string"
}, 
{
    collection: "movie"
})
var MovieModel = mongoose.model("Movie", MovieSchema)

mongoose.connect(`mongodb://${conf.mongo.host}/${conf.mongo.db}`)


module.exports = MovieModel