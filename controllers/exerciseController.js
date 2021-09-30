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
    Exercise.findById(req.params.id, (err, foundExercise) => {
        res.render('exercises/show.ejs', {exercise: foundExercise})
    })
})


router.post('/', (req, res) => {
    req.body.isSuperset === "on" ? req.body.isSuperset = true : req.body.isSuperset = false
    Exercise.create(req.body, (err, createdExercise) => {
        err ? console.log(err) : res.redirect(`/exercises`)
    })
})


// Edit
router.get('/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, foundExercise) => {
        res.render('exercises/edit.ejs', {exercise: foundExercise})
    })
})

router.put('/:id', (req, res) => {
    req.body.isSuperset === "on" ? req.body.isSuperset = true : req.body.isSuperset = false
    Exercise.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundExercise) => {
        err ? console.log(err) : res.redirect(`/exercises`)
    })
})


// Delete
router.get('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, foundExercise) => {
        err ? console.log(err) : res.redirect('/exercises')
    })
})


module.exports = router


