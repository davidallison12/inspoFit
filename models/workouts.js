const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    level: {type: String},
    bodyparts: [String],
    numOfExercises: Number,
    exercises: [String], // https://mongoosejs.com/docs/populate.html
    description: {type: String},
    tips: {type: String}
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout