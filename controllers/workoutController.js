const express = require('express')
const router = express.Router()

// requiring Workouts models 
const Workout = require('../models/workouts')


router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.get('/seed', async (req, res) => {
    const newWorkouts = [
    {
        name: 'My new workout',
        level: 'Beginner',
        bodyparts: ['chest, back'],
        numOfExercises: 5,
        exercises: [{
            exercise1: {
            name: 'Bench Press',
            sets: '3-5',
            reps: '12-15',
            equipment:['barbell bench', 'barbell']
            }, 
            exercise2:{
                name: 'Lat Pulldown',
                sets: '3',
                reps: '15',
                equipment:['lat pulldown machine']
            }, 
            exercise3:{
                name: 'Hammer Smith Incline Press',
                sets: '3',
                reps: '12',
                equipment:['Hammer Smith Incline Press Machine']
            }, 
            exercise4:{
                name: 'Pendlay Row',
                sets: '3',
                reps: '8',
                equipment:['barbell']
            }, 
            exercise5:{
                name: 'Low High Cable Flyes',
                sets: '3',
                reps: '15',
                equipment:['Pulley Cables']
            }
        }],
        description: 'Heavy compound movement day involving back and chest',
        tips: `Don't die` 
    }, {
        name: 'The Gun Show',
        level: 'Intermediate',
        bodyparts: ['shoulder, arms'],
        numOfExercises: 5,
        exercises: [{
            exercise1: {
            name: 'Standing Shoulder Press',
            sets: '3',
            reps: '8',
            equipment:['barbell']
            }, 
            exercise2: {
                name: 'Standing Bicep Curl(superset)',
                sets: '3',
                reps: '15(for each set)',
                equipment:['dumbells', 'E-Z bar']
            }, 
            exercise3: {
                name: 'Dumbbell Skullcrushers(superset)',
                sets: '3',
                reps: '12',
                equipment:['dumbbells']
            }, 
            exercise4: {
                name: 'Side Lateral Raise(superset)',
                sets: '3',
                reps: '15',
                equipment:['dumbbells']
            }, 
            exercise5:{
                name: 'Hammer Curls',
                sets: '3',
                reps: '12',
                equipment:['dumbells']
            }
        }],
        description: 'Heavy compound movement day involving the gunz',
        tips: `Embrace the pain` 
    }, {
        name: 'All Hail Leg Day',
        level: 'Intermediate',
        bodyparts: ['chest, back'],
        numOfExercises: 5,
        exercises: [{
            exercise1: {
            name: 'Squats',
            sets: '5',
            reps: '3',
            equipment:['barbell']
            }, 
            exercise2: {
                name: 'Romanian Deadlifts',
                sets: '3',
                reps: '8',
                equipment:['barbell']
            }, 
            exercise3: {
                name: 'Box Squats',
                sets: '3',
                reps: '6',
                equipment:['box', 'barbell']
            }, 
            exercise4: {
                name: 'Single-Leg Deficit Squats',
                sets: '3',
                reps: '12',
                equipment:['box', 'dumbell', 'kettlebell']
            }, 
            exercise5: {
                name: 'Suitcase Carries',
                sets: '3',
                reps: '30',
                equipment:['kettlebell']
            }
        }],
        description: 'Heavy compound movement day involving legs and core',
        tips: `Have fun...` 
    }
    ]
    try {
        const seedData = await Workout.create(newWorkouts)
        res.send(seedData)
    } catch (err) {
        res.send(err.message)
    }
})

router.get('/:id', (req, res) => {
    res.render('show.ejs')
})

router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs')
})



module.exports = router


