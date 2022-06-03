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

router.post("/getSessionByCode", async (req,res) => {

    const [room,hour] = req.body.sessionCode.split('-')
    
    SessionsModel.aggregate([{$match:{room:{$eq:room}}},{$match:{hour:{$eq:hour}}}],(err,result)=>{
        res.json(result[0].seats)
    })

})

module.exports = router;