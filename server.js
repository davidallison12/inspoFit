//=================
// REQUIRMENTS
//=================
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
//method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const PORT = process.env.PORT || 3000



//=================
// MODEL
//=================



//=================
// DATABASE SETUP
//=================
// const mongoURI = 'mongodb://127.0.0.1:27017/inspoFit'
const mongoURI = process.env.MONGODB_URI
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
const exerciseController = require('./controllers/exerciseController')
app.use('/exercises', exerciseController)

const workoutController = require('./controllers/workoutController')
app.use('/workouts', workoutController)



//=================
// LISTENER
//=================

app.listen(PORT, (req, res) => {
    console.log(`Now listening on port ${PORT}... 🥳`)
})
