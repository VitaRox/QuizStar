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


//Derek: I'm adding a bunch of routes to match up with our service contract.
// Grabs all quizzes, using the page ID to choose which ones
router.get('/quizzes/page/:id', (req, res) => {

})

//Only grabs one particular quiz based on ID
router.get('/quizzes/:id', (req, res) => {

})

//Posts a new quiz with an automatic ID
router.post('/quizzes', (req, res) => {

})

//Removes this quiz from the database
router.delete('/quizzes/:id', (req, res) => {

})

//Allows update of the quiz
router.put('/quizzes/:id', (req, res) => {

})

//Creates a new user using provided info
router.post('/users', (req, res) => {

})

//Logs user in
router.get('/users/login', (req, res) => {

})

//Logs user out
router.post('/users', (req, res) => {

})

module.exports = router