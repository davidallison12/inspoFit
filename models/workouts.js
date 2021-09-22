const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    level: {type: String},
    bodyparts: [String],
    numOfExercises: Number,
    exercises: [{
        excercise1: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise2: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise3: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise4: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise5: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise6: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise7: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise8: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise9: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
        excercise10: [{
            name: {type: String, required: true},
            sets: String,
            reps: String,
            equipment: String
        }],
    }],
    description: {type: String},
    tips: {type: String}
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout