'use strict'

var MovieModel = require('../models/movie-model')
var MovieController = () => { }

MovieController.getAll = (req, res, next) => {
    MovieModel.getAll((err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al consultar la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            let locals = {
                title: 'Lista de Películas',
                data: rows
            }

            res.render('index', locals)
        }
    })
}

MovieController.getOne = (req, res, next) => {
    MovieModel.getOne(req.params.movie_id, (err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al consultar la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            if (rows.length > 0) {

                let locals = {
                    title: 'Editar pelicula',
                    data: rows
                }
                res.render('edit-movie', locals)
            } else {
                let locals = {
                    title: `Id: ${req.params.movie_id} no encontrado al consultar la base de datos`,
                    description: 'Registro no encontrado',
                }
                res.render('error', locals)
            }
        }

    })
}

MovieController.insert = (req, res, next) => {
    MovieModel.insert(req.body, (err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al insertar a la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            let locals = {
                title: 'Lista de Películas',
                data: rows
            }

            res.redirect('/')
        }
    })
}

MovieController.update = (req, res, next) => {
    let movie = {
        movie_id: req.params.movie_id,
        ...req.body
    }
    MovieModel.update(movie, (err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al actualizar a la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            let locals = {
                title: 'Lista de Películas',
                data: rows
            }

            res.redirect('/')
        }
    })

}

MovieController.delete = (req, res, next) => {
    MovieModel.delete(req.params.movie_id, (err, rows) => {
        if (err) {
            let locals = {
                title: 'Error al eliminar de la base de datos',
                description: 'Error de Sintaxis SQL',
                error: err
            }
            res.render('error', locals)
        } else {
            res.redirect('/')
        }
    })
}

MovieController.addForm = (req, res, next) => {
    res.render('add-movie', { title: 'Agregar Pelicula' })
}

MovieController.error404 = (req, res, next) => {
    let error = new Error()
    let locals = {
        title: 'Error 404',
        description: 'Recurso no encontrado',
        error: error
    }
    error.status = 404

    res.render('error', locals)

    next()
}

module.exports = MovieController