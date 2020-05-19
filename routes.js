//this file was taken from Yunaos branch, once it is merged
//I will remove this page-- testing
const express = require('express')
const router = express.Router()
const Question = require('./models/Question')
const Subject = require('./models/Subject')
// includes our model



/* create one quiz question
router.post('/questions', async (req, res) => {
    try {
        const { description } = req.body
        const { options } = req.body

        const question = await Question.create({
            description,
            alternatives
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})
*/

// get all quiz questions
router.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
});



router.get('/api/subjects', async (req, res) => {
  try {
      const subjects = await Subject.find()
      return res.status(200).json(subjects)
  } catch (error) {
      return res.status(500).json({"error":error})
  }
});


module.exports = router;
