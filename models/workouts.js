const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    level: {type: String},
    bodyparts: [String],
    numOfExercises: Number,
    exercise1: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise2: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise3: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise4: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise5: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise6: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise7: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise8: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise9: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    exercise10: [{
        name: {type: String, required: true},
        sets: {type: String},
        reps: {type: String},
        equipment: [String],
        isSuperset: {type: Boolean, default: false}
    }],
    description: {type: String},
    tips: {type: String}
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout