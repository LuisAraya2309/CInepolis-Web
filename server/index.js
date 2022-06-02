const e = require("express");
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const usersRouter = require('./routes/UsersRoutes')
const snacksRouter = require('./routes/SnacksRoutes')
const moviesRouter = require('./routes/MoviesRoutes')
const sessionsRouter = require('./routes/SessionsRoutes')

const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/users',usersRouter)
app.use('/snacks',snacksRouter)
app.use('/movies',moviesRouter)
app.use('/sessions',sessionsRouter)

mongoose.connect(
    "mongodb+srv://sa:admin@cinepolisweb.5c7gi.mongodb.net/Cinepolis"
    );

    

app.listen(3001,()=>{
    console.log('Servers Runs')
});


