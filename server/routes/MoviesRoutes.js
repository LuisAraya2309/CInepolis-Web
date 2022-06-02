const router = require('express').Router();
const MoviesModel = require('../models/Movies')
//Login page
router.post("/",async(req,res)=>{


})


//Login Route
router.get("/getMovies", async (req,res) => {

    MoviesModel.find({},(err,result)=>{
        res.json(result)
    })

})



module.exports = router;