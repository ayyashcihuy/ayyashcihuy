const Controller = require("../controllers/controller")
const router = require("express").Router()

router.get('/', Controller.getDataProdHouse)
router.get('/prod-house', Controller.getDataProdHouse)
router.get('/movies', Controller.getDataMovies)
router.get('/movies/add', Controller.addDataMovies)
router.post('/movies/add', Controller.addDataMoviesPost)
router.get('/movies/:id/delete', Controller.delete)


module.exports = router 