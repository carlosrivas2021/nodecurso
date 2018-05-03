'use strict'

var express = require('express')
var MovieController = require('../controllers/movie-controller')
var router = express.Router()

router.get('/', MovieController.getAll)

router.get('/agregar', MovieController.addForm)

router.post('/', MovieController.insert)

router.get('/editar/:movie_id', MovieController.getOne)

// router.post('/actualizar/:movie_id', MovieController.update)
router.put('/actualizar/:movie_id', MovieController.update)

// router.post('/eliminar/:movie_id', MovieController.delete)
router.delete('/eliminar/:movie_id', MovieController.delete)

router.use(MovieController.error404)

module.exports = router