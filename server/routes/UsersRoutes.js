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
    /*
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
    */
})


module.exports = router;