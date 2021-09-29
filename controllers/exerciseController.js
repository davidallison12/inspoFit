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

// New 
router.get('/new', (req, res) => {
    res.render('exercises/new.ejs')
})


// Show
router.get('/:id', (req, res) => {
    Exercise.find(req.params.id, (err, foundExercise) => {
        res.send(foundExercise)
    })
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


