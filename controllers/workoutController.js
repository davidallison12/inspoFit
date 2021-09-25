const express = require('express')
const { findByIdAndDelete, findByIdAndUpdate } = require('../models/workouts')
const router = express.Router()

// requiring Workouts models 
const Workout = require('../models/workouts')


router.get('/', (req, res) => {
    Workout.find({}, (err, allWorkouts) => {
        res.render('index.ejs', {workouts: allWorkouts})
    })
})

// NEW ROUTE + POST FOR NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.post('/', (req, res) => {
    Workout.create(req.body, (err, createdWorkout) => {
        err ? res.send(err): res.redirect('/workouts')
    })
})

// SEED DATA
router.get('/seed', async (req, res) => {
    const newWorkouts = [
    {
        name: 'My new workout',
        level: 'Beginner',
        bodyparts: ['chest, back'],
        numOfExercises: 5,
        exercises: ['Bench Press', 'Lat Pulldown', 'Hammer Smith Incline Press', 'Pendlay Rows', 'Low-High Cable Flyes'],
        description: 'Heavy compound movement day involving back and chest',
        tips: `Don't die` 
    }, {
        name: 'The Gun Show',
        level: 'Intermediate',
        bodyparts: ['shoulder, arms'],
        numOfExercises: 5,
        exercises: ['Standing Shoulder Press', 'Standing Bicep Curls', 'Dumbbell Skullcrushers', 'Side Lateral Raise'],
        description: 'Heavy compound movement day involving the gunz',
        tips: `Embrace the pain` 
    }, {
        name: 'All Hail Leg Day',
        level: 'Intermediate',
        bodyparts: ['chest, back'],
        numOfExercises: 5,
        exercises: ['Squats', 'Romanian Deadlifts', 'Box Squats', 'Deficit Squats', 'Suitcase Carries'],
        description: 'Heavy compound movement day involving legs and core',
        tips: `Have fun...` 
    },{
        name: 'Lifeblood of Thor',
        level: 'Intermediate',
        bodyparts: ['shoulders, arms'],
        numOfExercises: 5,
        exercises: ['Viking Press', 'Preacher Curl', 'Close-Grip Bench Press', 'Alternating Shoulder Press', 'Reverse Bicep Curls'],
        description: 'Heavy compound movement day involving shoulders and arms. Prepare to show those god-like arms.',
        tips: `Let your inner Viking come roar` 
    }
    ]
    try {
        const seedData = await Workout.create(newWorkouts)
        res.send(seedData)
    } catch (err) {
        res.send(err.message)
    }
})


// SHOW ROUTE
router.get('/:id', (req, res) => {

    Workout.findById(req.params.id, (err, foundWorkout) => {
        res.render('show.ejs', {workout:foundWorkout})
    })
    // res.render('show.ejs')
})


// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    Workout.findById(req.params.id, (err, foundWorkout) => {
        err ? console.log(err) : res.render('edit.ejs', {workout: foundWorkout})
    })
})

router.put('/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWorkout) => {
        err ? console.log(err) : res.redirect(`/workouts/${req.params.id}`)
    })
})


// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Workout.findByIdAndDelete(req.params.id, (err, foundWorkout) => {
        err ? console.log(err) : res.redirect('/workouts')
    })
})



module.exports = router


