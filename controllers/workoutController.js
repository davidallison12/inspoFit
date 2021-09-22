const express = require('express')
const router = express.Router()

// requiring Workouts models 
const Workouts = require('../models/workouts')


router.get('/', (req, res) => {
    res.send('Index connection made')
})

router.get('/new', (req, res) => {
    res.send('New Route')
})

router.get('/:id', (req, res) => {
    res.send('Show page')
})

router.get('/:id/edit', (req, res) => {
    res.send('Edit Page')
})



module.exports = router