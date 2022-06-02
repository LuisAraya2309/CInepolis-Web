
const router = require('express').Router();
const CreditCardModel = require('../models/CreditCards')

router.post("/createCreditCard", async (req,res) => {

    const newCreditCard = req.body;
    const newNumber = req.body.number
    CreditCardModel.aggregate([{$match:{number:{$eq:newNumber}}}],(err,result)=>{
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
    console.log(req.body);
    CreditCardModel.aggregate([{$match:{clientEmail:{$eq:req.body.clientEmail}}}], (err,result) =>{
        if (err){
            res.status(404).send('Client invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('Client invalid')
        }
        else{
            res.json(result[0])
        }
    })
})

module.exports = router;