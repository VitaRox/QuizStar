const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new mongoose.Schema({
  answer: String
});

const QuestionSchema = new mongoose.Schema({
  question: String,
  correctAnswer: Number,
  answers: [AnswerSchema]
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question