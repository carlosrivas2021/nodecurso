'use strict'

var movies = require('../models/movies')
var express = require('express')
var router = express.Router()


function error404(req, res, next){
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


router.use(movies)
router.get('/', (req, res, next) => {
    req.getConnection((err, movies) => {
        movies.query('SELECT * FROM movie', (err, rows) => {
            if (err){
                next(new Error('No hay registro de Peliculas'))
            }else{
                let locals = {
                    title: 'Lista de Películas',
                    data: rows
                }
    
                res.render('index', locals)
            }
        })
    })
})
router.get('/agregar', (req, res, next) => {
    res.render('add-movie', { title: 'Agregar Pelicula' })
})
router.post('/',(req, res, next) => {
    req.getConnection((err,movies)=>{
        let movie = req.body
        movies.query('INSERT INTO movie SET ?', movie, (err, rows)=>{
            return (err) ? next(new Error('Error al insertar')) : res.redirect('/')
        })
        
    })
})
router.get('/editar/:movie_id',(req,res,next)=>{
    let movie_id = req.params.movie_id
    req.getConnection((err, movies)=>{
        movies.query('SELECT * from movie WHERE movie_id = ?', movie_id, (err, rows)=>{            
            if (err){
                next(new Error('Registro no encontrado'))
            }else{
                let locals = {
                    title: 'Editar pelicula',
                    data: rows
                }
                res.render('edit-movie', locals)
            }

        })
    })
})

router.post('/actualizar/:movie_id',(req, res, next) => {
    let movie_id = req.params.movie_id
    req.getConnection((err,movies)=>{
        let movie = req.body
        movies.query('UPDATE movie SET ? WHERE movie_id = ?', [movie, movie_id], (err, rows)=>{
            return (err) ? next(new Error('Error al actualizar')) : res.redirect('/')
        })
        
    })
})
router.post('/eliminar/:movie_id',(req, res, next) => {
    let movie_id = req.params.movie_id
    req.getConnection((err,movies)=>{
        movies.query('DELETE FROM movie WHERE movie_id = ?', movie_id, (err, rows)=>{
            return (err) ? next(new Error('Registro no encontrado')) : res.redirect('/')
        })
        
    })
})

router.use(error404)

module.exports = router