const express = require('express')
const router = express.Router()

// requiring Workouts models 
const Workout = require('../models/workouts')
const Exercise = require('../models/exercises')

router.get('/', (req, res) => {
    Workout.find({}, (err, allWorkouts) => {
        res.render('workouts/index.ejs', {workouts: allWorkouts})
    })
})

// NEW ROUTE + POST FOR NEW
router.get('/new', (req, res) => {
    Exercise.find({}, (err, foundExercises) => {
        if (err) {
            return console.log(err)
        }
        res.render('workouts/new.ejs', {exercises: foundExercises})
    })
   
})

router.post('/', (req, res) => {
    console.log(req.body)
    if(typeof req.body.exercises === "string") {
        req.body.exercises = [req.body.exercises]
    }

    Workout.create(req.body, (err, createdWorkout) => {
        if(err) {
            return console.log(err)
        }
        res.redirect('/workouts')
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
        exercises:  [
            '6156506751e5e66575195d26',
            '6156506751e5e66575195d29',
            '615650d351e5e66575195d2f',
            '615650fa51e5e66575195d32',
            '6156515051e5e66575195d35'
          ],
        description: 'Heavy compound movement day involving back and chest',
        tips: `Don't die` 
    }, {
        name: 'The Gun Show',
        level: 'Intermediate',
        bodyparts: ['shoulder, arms'],
        numOfExercises: 5,
        exercises:  [
            '6156506751e5e66575195d26',
            '6156506751e5e66575195d29',
            '615650d351e5e66575195d2f',
            '615650fa51e5e66575195d32',
            '6156515051e5e66575195d35'
          ],
        description: 'Heavy compound movement day involving the gunz',
        tips: `Embrace the pain` 
    }, {
        name: 'All Hail Leg Day',
        level: 'Intermediate',
        bodyparts: ['chest, back'],
        numOfExercises: 5,
        exercises:  [
            '6156506751e5e66575195d26',
            '6156506751e5e66575195d29',
            '615650d351e5e66575195d2f',
            '615650fa51e5e66575195d32',
            '6156515051e5e66575195d35'
          ],
        description: 'Heavy compound movement day involving legs and core',
        tips: `Have fun...` 
    },{
        name: 'Lifeblood of Thor',
        level: 'Intermediate',
        bodyparts: ['shoulders, arms'],
        numOfExercises: 5,
        exercises:  [
            '6156506751e5e66575195d26',
            '6156506751e5e66575195d29',
            '615650d351e5e66575195d2f',
            '615650fa51e5e66575195d32',
            '6156515051e5e66575195d35'
          ],
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

    Workout.findById(req.params.id).populate('exercises').exec((err, foundWorkout) => {
        if(err) {
            console.log(err)
        }
        res.render('workouts/show.ejs', {workout:foundWorkout})
    })

    // Workout.findById(req.params.id, (err, foundWorkout) => {
    //     if(err) {
    //                  console.log(err)
    //              }
    //              res.render('workouts/show.ejs', {workout:foundWorkout})
    // })
})


// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    Workout.findById(req.params.id, (err, foundWorkout) => {
        err ? console.log(err) : res.render('workouts/edit.ejs', {workout: foundWorkout})
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


