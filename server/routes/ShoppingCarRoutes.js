const router = require('express').Router();
const ShoppingCarModel = require('../models/ShoppingCar')
const SessionsModel = require('../models/Sessions')
//Login page
router.post("/",async(req,res)=>{

})

router.post("/insertShoppingCar", async (req,res) => {

    const newCar = req.body;
    newCar['boughtTickets'] = {}
    newCar['snacks'] = {}
    const newValidCar = ShoppingCarModel(newCar)
    newValidCar.save()
})

router.post("/deleteShoppingCar", async (req,res) => {
    
    ShoppingCarModel.deleteOne({clientEmail:req.body.clientEmail} , (err,result) =>{
        
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('ShoppingCar not found')
        }
        else{
            res.json(result[0])
        }
    });
})

router.post("/updateTicketsCar", async (req,res) => {
    var totalTickets = req.body.totalTickets
    const [room,hour] = req.body.sessionCode.split('-')

    SessionsModel.findOneAndUpdate({room:room, hour:hour},{seats: req.body.occupiedSeats},{new:true},(err, result)=>{
        
    })
    
    ShoppingCarModel.findOneAndUpdate({clientEmail:req.body.userLogged},{boughtTickets:totalTickets},{new:true},(err, result)=>{
        res.json(result)
    })
})

router.post("/updateSnacks", async (req,res) => {
    var snacks = req.body.snacks
    ShoppingCarModel.findOneAndUpdate({clientEmail:req.body.userLogged},{snacks:snacks},{new:true},(err, result)=>{
        res.json(result)
    })
})

router.post("/getShoppingCarByEmail", async (req,res) => {
    ShoppingCarModel.aggregate([{$match:{clientEmail:{$eq:req.body.clientEmail}}}], (err,result) =>{
        if (err){
            //res.status(404).send('ShoppingCar invalid')
            console.log("Prueba")
        }
        if(result[0] === undefined){
            res.status(404).send('ShoppingCar invalid')
        }
        else{
            res.json(result[0])
        }
    })
})

router.get("/getShoppingCars",(req,res) => {
   
    ShoppingCarModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


module.exports = router;