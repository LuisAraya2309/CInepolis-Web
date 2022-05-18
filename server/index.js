const e = require("express");
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const UserModel = require("./models/Users")

const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(
    "mongodb+srv://sa:admin@clustec.xtrci.mongodb.net/CinepolisWebDatabase?retryWrites=true&w=majority"
    );



app.listen(3001,()=>{
    console.log('Servers Runs')
});


