const router = require('express').Router();
const SnackModel = require('../models/Snacks')

router.post("/",async(req,res)=>{

})

router.post("/insertSnack", async (req,res) => {

    const newSnack = req.body;
    const newSnackName = req.body.name
    SnackModel.aggregate([{$match:{name:{$eq:newSnackName}}}],(err,result)=>{
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send()
        }
    });
    const newValidSnack = SnackModel(newSnack)
    newValidSnack.save()
})

router.post("/deleteSnackByName", async (req,res) => {
    
    SnackModel.deleteOne({name:req.body.name} , (err,result) =>{
        
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Snack not found')
        }
        else{
            res.json(result[0])
        }
    });
})

router.post("/updateSnackByName", async (req,res) => {

    const setAttributes = {stock: req.body.stock, price:req.body.price, image:req.body.image};

    SnackModel.updateOne({name:req.body.name},{$set:setAttributes},(err,result) =>{

        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Snack not found')
        }
        else{
            res.json(result[0])
        }
    })
})

router.get("/getSnack",(req,res) => {
    console.log("Encuentra la funcion");
    SnackModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

router.post("/getSnackByName", async (req,res) => {
    SnackModel.aggregate([{$match:{name:{$eq:req.body.name}}}], (err,result) =>{
        if (err){
            res.status(404).send('Snack invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('Snack invalid')
        }
        else{
            res.json(result[0])
        }
    })
})

module.exports = router;