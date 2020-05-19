const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const QuestionSchema = new mongoose.Schema({
 description: String,
 answers: [
   {text: String,
     required: true
   },
   isCorrect:{
     type: Boolean,
     required: true,
     default: false
   }

   }
 ]
})

//create model for todo
const Quiz = mongoose.model('Quiz', QuestionSchema);

module.exports = Quiz;
