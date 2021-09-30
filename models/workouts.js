const mongoose = require('mongoose')
const Exercise = require('./exercises')

const workoutSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    level: {type: String},
    bodyparts: {type: [String], required: true},
    numOfExercises: Number,
    exercises: [], // https://mongoosejs.com/docs/populate.html
    // exercises: {type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'},
    description: {type: String},
    tips: {type: String}
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout