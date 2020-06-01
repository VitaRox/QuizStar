const mongoose = require('mongoose');
const Question = mongoose.model('Question');


exports.addQuestion = async (req, res) => {
    const question = await new Question(req.body).save();
    res.json({
      quesSubmissionSuccess: 'Question added Successful!'
    });
  };