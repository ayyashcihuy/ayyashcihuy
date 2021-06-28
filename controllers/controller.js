const { ProductionHouse } = require("../models/index")
const { Movie } = require("../models/index")

class Controller {
    static getDataProdHouse(req, res) {
        ProductionHouse
        .findAll({
            order: [ [ "name_prodHouse", "ASC"] ],
            include: [ {
                model : Movie
            }]
        })
        .then(data => {
            res.render("viewDataProdHouse", { data: data })
        })
        .catch(error => {
            res.send(error)
        })
    }

    static getDataMovies(req, res) {
        Movie
        .findAll({
            order: [ [ "released_year", "DESC"] ],
            include: [ {
                model : ProductionHouse
            }]
        })
        .then(data => {
            // console.log(data);
            res.render("viewDataMovies", { data: data })
        })
        .catch(error => {
            console.log(error);
            res.send(error)
        })
    }

    static addDataMovies(req, res) {
        res.render("addDataMovies")
    }

    static addDataMoviesPost(req,res) {
        let input = {
            name: req.body.name,
            released_year: req.body.released_year,
            genre: req.body.genre
        }
        Movie
        .create(input)
        .then(data => {
            res.redirect("/movies")
        })
        .catch(error => {
            res.send(error)
        })
    }

    static delete(req, res) {
        let id = +req.params.id
        Movie
        .destroy({
            where: {
                id: id
            }
        })
        .then(data => {
            res.redirect("/movies")
        })
        .catch(error => {
            res.send(error)
        })
    }
}   

module.exports = Controller