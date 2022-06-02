const router = require('express').Router();
const UserModel = require('../models/Users')
//Login page
router.post("/",async(req,res)=>{

})


//Login Route
router.post("/login", async (req,res) => {
    
    
    
    const user = {
        "email":req.body.email,
        "password":req.body.password,
        "type":""
    }
    
    
    UserModel.aggregate([{$match:{email:{$eq:user.email}}},{$match:{password:{$eq:user.password}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            user.type = result[0].type
            res.json(user)
        }
    })
    
})

router.post("/createUser", async (req,res) => {

    const newUser = req.body;
    const newEmail = req.body.email
    UserModel.aggregate([{$match:{email:{$eq:newEmail}}}],(err,result)=>{
        const validEmail = result[0] === undefined
        if(!validEmail){
            res.status(404).send()
        }
    });
    const newValidUser = UserModel(newUser)
    newValidUser.save()
})

router.post("/deleteUserByEmail", async (req,res) => {
    
    UserModel.deleteOne({email:req.body.email} , (err,result) =>{
        
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('User not found')
        }
        else{
            res.json(result[0])
        }
    });
})

router.post("/updateUserByEmail", async (req,res) => {

    const setAttributes = {password: req.body.password, clientInformation: req.body.clientInformation};
    UserModel.updateOne({email:req.body.email},{$set:setAttributes},(err,result) =>{

        const validEmail = result[0] === undefined
        if(!validEmail){
            res.status(404).send('User not found')
        }
        else{
            res.json(result[0])
        }
    })
})

router.get("/getUsers",(req,res) => {
    UserModel.aggregate([{$match:{type:'client'}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            res.json(result)
        }
    })
})

router.post("/getUserByEmail", async (req,res) => {
    UserModel.aggregate([{$match:{email:{$eq:req.body.email}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            res.json(result[0])
        }
    })
})

module.exports = router;