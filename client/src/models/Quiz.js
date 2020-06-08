const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for Quiz

const AnswerSchema = new mongoose.Schema({
  answer: String
});

const QuestionSchema = new mongoose.Schema({
  question: String,
  correctAnswer: Number,
  answers: [AnswerSchema]
});

const QuizSchema = new mongoose.Schema({
  quizName: String,
  quizCreator: String,  //Setting it to string is temporary.
  quizCreateDate: Date,
  questions: [QuestionSchema]
});

//model
const Quiz = mongoose.model('Quiz', QuizSchema);
const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema)

module.exports = Quiz;
