const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const QuestionSchema = new mongoose.Schema({

 description: String,
 answers: [
   {type: String,
     content:String
   },
   {type: String,
     content:String
   },
   {type: String,
     content:String
   },
   {type: String,
     content:String
   }
 ]
})

//create model for todo
const Quiz = mongoose.model('Quiz', QuestionSchema);

module.exports = Quiz;
