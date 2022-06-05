const router = require('express').Router();
const MoviesModel = require('../models/Movies')

router.post("/",async(req,res)=>{


})

// Insertar Pelicula
router.post("/insertMovie", async (req,res) => {
    const movie = req.body;
    const movieTitle = req.body.title

    MoviesModel.aggregate([{$match:{title:{$eq:movieTitle}}}],(err,result)=>{
        const titles = result[0] === undefined
        if(!titles){
            res.status(404).send()
        }
    });

    const newMovie = MoviesModel(movie)
    newMovie.save()
})

// Eliminar Pelicula
router.post("/deleteMovie", async (req,res) => {
    MoviesModel.deleteOne({title:req.body.title} , (err,result) =>{
        const titles = result[0] === undefined
        if(!titles){
            res.status(404).send('The movie was not found')
        }
        else{
            res.json(result[0])
        }
    });
})

// Obtener Peliculas
router.get("/getMovies", async (req,res) => {
    MoviesModel.find({},(err,result)=>{
        res.json(result)
    })

})

// Obtener una pelicula en especifico
router.post("/getMovieByName", async (req,res) => {
    MoviesModel.aggregate([{$match:{title:{$eq:req.body.title}}}], (err,result) =>{
        if (err){
            res.status(404).send('Invalid Movie')
        }
        if(result[0] === undefined){
            res.status(404).send('Invalid Movie')
        }
        else{
            res.json(result[0])
        }
    })
})


module.exports = router;