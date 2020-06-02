const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for Quiz
const quizSchema = new Schema({
  quizName: String,
  quizCreator: String,
  quizCreateDate: Date,
  questions: [{
      question: String,
      correctAnswer: Number,
      answers: [{
        answer: String}]
    }]
});

//model
const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
