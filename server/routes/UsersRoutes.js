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
    console.log(user)
    
    
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
    newUser['type'] = "client"
    newUser['vehicles'] = []
    newUser['schedule'] = {}
    const newValidUser = UserModel(newUser)
    newValidUser.save()
})


module.exports = router;