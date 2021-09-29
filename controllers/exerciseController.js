const express = require('express')
const router = express.Router()

// requiring Exercise models 
const Exercise = require('../models/exercises')


// Seed 
router.get('/seed', async (req, res) => {
    const newExercises = [
    {
        name: 'Squat',
        sets: "3",
        reps: "12-15",
        equipment: "Barbell",
        vidDescription:"https://www.youtube.com/watch?v=bEv6CCg2BC8",
        isSuperset: false
    },{
        name: 'Chest Flyes',
        sets: "3",
        reps: "12-15",
        equipment: "Dumbbells",
        vidDescription:"https://www.youtube.com/watch?v=QENKPHhQVi4",
        isSuperset: true
    },{
        name: 'Seal Row',
        sets: "5",
        reps: "12-15",
        equipment: "Barbell, Bench",
        vidDescription:"https://www.youtube.com/watch?v=fBgDGkfT8Rc",
        isSuperset: true
    },{
        name: 'Split Squats',
        sets: "4",
        reps: "15",
        equipment:"",
        vidDescription:"https://www.youtube.com/watch?v=ZZgp-zZQPMc",
        isSuperset: true
    }
    ]
    try {
        const seedData = await Exercise.create(newExercises)
        res.send(seedData)
    } catch (err) {
        res.send(err.message)
    }
})


// Index
router.get('/', (req, res) => {
    Exercise.find({}, (err, foundExercises) => {
        res.render('exercises/index.ejs', {exercises: foundExercises})
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


