const router = require('express').Router();
const SessionsModel = require('../models/Sessions')
const MoviesModel = require('../models/Movies')
//Login page
router.post("/",async(req,res)=>{


})


//Login Route
router.post("/getSessions", async (req,res) => {

    let filterDate =req.body.todaysDate
    

    SessionsModel.aggregate([{$match:{date:{$eq:filterDate}}}],(err,result)=>{
        res.json(result)
    })
    

})



module.exports = router;