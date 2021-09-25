//=================
// REQUIRMENTS
//=================
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000



//=================
// MODEL
//=================




//=================
// DATABASE SETUP
//=================
const mongoURI = 'mongodb://127.0.0.1:27017/inspoFit'
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('database connection')
})

db.on('error', err => {console.log('ERROR: ', err)})
db.on('connected', () => {console.log('mongo connected')})
db.on('disconnected', () => {console.log('mongo disconnected')})

//=================
// MIDDLEWARE
//=================
app.use(express.urlencoded({extended: true})) // Body-Parser
app.use(express.static('public')) // Public Folder Connection


//=================
// CONTROLLERS
//=================
const workoutController = require('./controllers/workoutController')
app.use('/workouts', workoutController)




//=================
// LISTENER
//=================

app.listen(PORT, (req, res) => {
    console.log(`Now listening on port ${PORT}... 🥳`)
})