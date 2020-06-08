const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const QuestionSchema = new mongoose.Schema({

  quizName: String,
   quizCreator: String,
   quizCreateDate: Date,
   question: [{
       answers: [
         {answer1: String,
          answer2: String,
          answer3: String,
          answer4: String,
         }]
     }],
     correct:String
 });


//create model for todo
const Quiz = mongoose.model('Quiz', QuestionSchema);

module.exports = Quiz;
