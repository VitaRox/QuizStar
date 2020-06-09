const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const userController = require('../controller/userController');
const questionController = require('../controller/questionController');

// Quizpool represents our db/quiz schema of quizzes;
const Quizpool = require('../models/quizPool')


// User data routes:

// Retrieve user profile;
router.get('/api/current_user', userController.getCurrentUser);
// Update user profile;
router.post('/api/profile', userController.updateUserProfile);
// Delete user account;
router.delete('/api/profile', userController.deleteUserAccount);



// Quiz routes:

// Get one quiz question;
router.get('/quizpool/:id', (req, res) => {
    try {
        const _id = req.params.id 

        const question = await Question.findOne({_id})        
        if(!question){
            return res.status(404).json({})
        }
        else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})

// Create one quiz question to our db;
router.post('/api/question/new', questionController.addQuestion);

// Submit an answer to a question
router.post('/api/question/submit', questionController.submitQuestion);
// Testing
router.get('/', (req, res) => {
    res.send('Our Quiz quizpool')
})

module.exports = router