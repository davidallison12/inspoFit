const express = require('express')
const router = express.Router()

// requiring Exercise models 
const Exercise = require('../models/exercises')


// Seed 



// Index
router.get('/', (req, res) => {
    Exercise.find({}, (err, foundExercises) => {
        res.send(foundExercises)
    })
})


// Show
router.get('/:id', (req, res) => {
    Exercise.find(req.params.id, (err, foundExercise) => {
        res.send(foundExercise)
    })
})


// New 
router.get('/new', (req, res) => {
    res.send('This is the new route.')
})

router.post('/', (req, res) => {
    Exercise.create(req.body, (err, createdExercise) => {
        err ? console.log(err) : console.log('You hit the post route.')
    })
})


// Edit
router.get('/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, foundExercise) => {
        res.send('This is the exercise edit route.')
    })
})


// Delete

module.exports = router


