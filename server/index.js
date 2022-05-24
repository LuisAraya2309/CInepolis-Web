const e = require("express");
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const usersRouter = require('./routes/UsersRoutes')
const snacksRouter = require('./routes/SnacksRoutes')

const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/users',usersRouter)
app.use('/snacks',snacksRouter)

mongoose.connect(
    "mongodb+srv://sa:admin@cinepolisweb.5c7gi.mongodb.net/?retryWrites=true&w=majority"
    );



app.listen(3001,()=>{
    console.log('Servers Runs')
});


