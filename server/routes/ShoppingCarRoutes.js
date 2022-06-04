const router = require('express').Router();
const ShoppingCarModel = require('../models/ShoppingCar')
const SessionsModel = require('../models/Sessions')
//Login page
router.post("/",async(req,res)=>{


})


//Login Route

router.post("/updateTicketsCar", async (req,res) => {
    var totalTickets = req.body.totalTickets
    const [room,hour] = req.body.sessionCode.split('-')

    SessionsModel.findOneAndUpdate({room:room, hour:hour},{seats: req.body.occupiedSeats},{new:true},(err, result)=>{
        
    })
    
    ShoppingCarModel.findOneAndUpdate({clientEmail:req.body.userLogged},{boughtTickets:totalTickets},{new:true},(err, result)=>{
        res.json(result)
    })
})

module.exports = router;