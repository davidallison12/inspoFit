const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    level: {type: String},
    bodyparts: [String],
    numOfExercises: Number,
    exercises: [{
        exercise1: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise2: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise3: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise4: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise5: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise6: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise7: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise8: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise9: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
        exercise10: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: [String]
        }],
    }],
    description: {type: String},
    tips: {type: String}
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout