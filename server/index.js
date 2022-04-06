const e = require("express");
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const UserModel = require("./models/Users")

app.use(express.json())


mongoose.connect(
    "mongodb+srv://sa:admin@clustec.xtrci.mongodb.net/CinepolisWebDatabase?retryWrites=true&w=majority"
    );

app.get("/getUsers",(req,res) => {
    UserModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})


app.listen(3001,()=>{
    console.log('Servers Runs')
});


