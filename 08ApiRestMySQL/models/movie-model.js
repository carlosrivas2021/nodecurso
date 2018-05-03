'use strict'

var conn = require('./movie-connection')
var MovieModel = () => {}

MovieModel.getAll = (cb) => {
    conn.query('SELECT * FROM movie', cb)
}

MovieModel.getOne = (data, cb) => {
    conn.query('SELECT * from movie WHERE movie_id = ?', data, cb)
}

MovieModel.insert = (data, cb) => {
    conn.query('INSERT INTO movie SET ?', data, cb)
}

MovieModel.update = (data, cb) => {
    conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb)
}

MovieModel.delete = (data, cb) => {
    conn.query('DELETE FROM movie WHERE movie_id = ?', data, cb)
}

module.exports = MovieModel