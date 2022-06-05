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

router.get("/getAllSessions", async (req,res) => {

    SessionsModel.find({},(err,result)=>{
        res.json(result)
    })
    

})

router.post("/getSessionByCode", async (req,res) => {

    const [room,hour] = req.body.sessionCode.split('-')
    
    SessionsModel.aggregate([{$match:{room:{$eq:room}}},{$match:{hour:{$eq:hour}}}],(err,result)=>{
        res.json(result[0].seats)
    })

})

router.post("/deleteSessionByName", async (req,res) => {

    const [room,hour] = req.body.sessionCode.split('-')
    
    SessionsModel.deleteOne({room:room,hour:hour},(err,result)=>{
        res.json(result)
    })

})

router.post("/updateSession", async (req,res) => {

    const [room,hour] = req.body.sessionCode.sessionCode.split('-')
    var newSession = {
        room : req.body.room,
        movie : req.body.movie,
        date : req.body.date,
        seats : req.body.seats.split(' ')
    }

    SessionsModel.updateOne({room:room,hour:hour},newSession,{new:true},(err,result)=>{
        console.log(result)
    })
    
})

router.post("/createSession", async (req,res) => {

    MoviesModel.find({title:req.body.movie},(err,result)=>{
        
        var image = result[0].image
        
        var newSession = {
            room : req.body.room,
            hour : req.body.hour,
            movie : req.body.movie,
            date : req.body.date,
            seats : req.body.seats.split(' '),
            movieImage : image
        }
    
        const newValidSession = SessionsModel(newSession)
        newValidSession.save()
        

    })

    
    
})

module.exports = router;