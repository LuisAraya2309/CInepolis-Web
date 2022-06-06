
const router = require('express').Router();
const CreditCardModel = require('../models/CreditCards')

router.post("/createCreditCard", async (req,res) => {

    const newCreditCard = req.body;
    console.log(newCreditCard);
    CreditCardModel.aggregate([{$match:{number:{$eq:req.body.number}}}],(err,result)=>{
        const validNumber = result[0] === undefined
        if(!validNumber){
            res.status(404).send()
        }
    });
    const newValidCreditCard = CreditCardModel(newCreditCard)
    newValidCreditCard.save()
})

router.post("/deleteCreditCardByNumber", async (req,res) => {
    
    CreditCardModel.deleteOne({number:req.body.number} , (err,result) =>{
        
        const validNumber = result[0] === undefined
        if(!validNumber){
            res.status(404).send('CreditCard not found')
        }
        else{
            res.json(result[0])
        }
    });
})

router.post("/getCreditCardByClient", async (req,res) => {
    CreditCardModel.aggregate([{$match:{clientEmail:{$eq:req.body.email}}}], (err,result) =>{
        if (err){
            res.status(404).send('Client invalid')
        }   
        if(result[0] === undefined){
            console.log("Respuesta vacía")
            res.status(404).send('Client invalid')
        }
        else{
            res.json(result)
            console.log(result);
        }
    })
})

module.exports = router;