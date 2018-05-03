'use strict'

var conn = require('./movie-connection')
var MovieModel = () => {}

MovieModel.getAll = (cb) => {
    conn.find().exec((err, docs)=>{
        if (err) throw err
        cb(docs)
    })
}

MovieModel.getOne = (data, cb) => {
    conn.findOne({ movie_id: data }).exec((err, docs)=>{
        if (err) throw err        
        cb(docs)
    })
}

MovieModel.insert = (data, cb) => {
    conn.create(data, (err)=>{
        if (err) throw err
        cb()
    })
}

MovieModel.update = (data, cb) => {
    conn.findOneAndUpdate({ movie_id: data.movie_id },data, (err)=>{
        if (err) throw err
        cb()
    })
}

MovieModel.delete = (data, cb) => {
    conn.findOneAndRemove({ movie_id: data }, (err)=>{
        if (err) throw err
        cb()
    })
}

module.exports = MovieModel