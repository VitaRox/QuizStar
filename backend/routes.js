const express = require('express')
const router = express.Router()

// get all quiz questions
router.get('/quizpool', (req, res) => {

})

// get one quiz question
router.get('/quizpool/:id', (req, res) => {

})

// create one quiz question
router.post('/quizpool', (req, res) => {

})

// update one quiz question
router.put('/quizpool/:id', (req, res) => {

})

// delete one quiz question
router.delete('/quizpool/:id', (req, res) => {

})

// Testing
router.get('/', (req, res) => {
    res.send('Our Quiz quizpool')
})


module.exports = router