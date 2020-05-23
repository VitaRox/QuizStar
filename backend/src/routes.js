const express = require('express')
const router = express.Router()

module.exports = router

const Quizpool = require('./models/quizPool')


// get one quiz question
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

// create one quiz question
router.post('/quizpool', (req, res) => {
    try {
        const { questionText } = req.body
        const { options } = req.body
        const { solution } = req.body

        const question = await Question.create({
            questionText,
            options,
            solution
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})


// Testing
router.get('/', (req, res) => {
    res.send('Our Quiz quizpool')
})


module.exports = router