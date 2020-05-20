//this file was taken from Yunaos branch, once it is merged
//I will remove this page-- testing
const express = require('express')
const router = express.Router()
const Question = require('./models/Question')

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



module.exports = router;
