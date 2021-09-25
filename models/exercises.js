const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sets: {type: String},
    reps: {type: String},
    equipment: [String],
    isSuperset: {type: Boolean, default: false}
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise