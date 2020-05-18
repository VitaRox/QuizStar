const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to Mongo'))
.catch(err => console.err('Could not connect to Mongo', err))

const QuestionSchema = new mongoose.Schema({
 question: String,
 answers: [
   {
     answer: {
       type: String,
     required: true
   },
   isCorrect:{
     type: Boolean,
     required: true,
     default: false
   }

   }
 ]
});

const Quiz = mongoose.model('Quiz', QuestionSchema);

async function createQuiz(){

  const quizSample1 = new Tab({
    question:" What is 1+2",
    answers:[{
      answer: "1",
      answer: "2",
      answer: "3",
    isCorrect: true,
      answer: "4"
    }]
  })


  /*,
  question:" What is 1+2",
  answers:[{
    answer: "1",
    answer: "2"
    {answer: "3",
  isCorrect: true},
    answer: "4"
  }],
  question:" What is 1+4",
  answers:[{
    answer: "1",
    {answer: "5",
  isCorrect: true},
    answer: "3",
    answer: "4"
  }],
  question:" What is 1+1",
  answers:[{
    answer: "1",
    {answer: "2",
  isCorrect: true},
    answer: "3",
    answer: "4"
  }],
  question:" What is 1+1",
  {answers:{
    answer: "1",
    {answer: "2",
  isCorrect: true},
    answer: "3",
    answer: "4"
  }},
  question:" What is 1+1",
  answers:[{
    answer: "1",
    {answer: "2",
  isCorrect: true},
    answer: "3",
    answer: "4"
  }],*/

  var result = await quizSample1.save();
  console.log("quizSample1 - " + result);
createQuiz();
