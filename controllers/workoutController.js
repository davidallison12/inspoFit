const express = require('express')
const router = express.Router()

// requiring Workouts models 
const Workouts = require('../models/workouts')


router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/new', (req, res) => {
    res.render('new.ejs')
})

router.get('/:id', (req, res) => {
    res.render('show.ejs')
})

router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs')
})



module.exports = router