const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Subject = require('./client/src/models/Subject')
const Quiz = require('./client/src/models/Quiz')
var cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;



const MONGODB_URI = 'mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority'
//'mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI,{useNewUrlParser: true,
  useUnifiedTopology:true})
  .then(() => {
    console.log("Connected to Mongo");
  })
   .catch(err => {
     console.error("Could not connect to Mongo", err)
      process.exit();
   });

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/subjects', (req, res) =>{

  Subject.find({}).sort({})
    .then((data) =>{
      console.log('Data: ',data);
      res.json(data);
    })
    .catch((error) =>{
      console.log('error');
    });

});

//get quiz
app.get('/quizzes'), (req, res) =>{
  Quiz.find({}).sort({})
    .then((data) =>{
      console.log('Data: ',data);
      res.json(data);
    })
    .catch((error) =>{
      console.log('error');
    });
}

//quiz route
app.post('/quizcreate', cors(), (req, res) => {
      console.log(JSON.stringify(req.body));

      var quiz = new Quiz({
        quizName: req.body.quizName,
        questions:[{
            question: req.body.question,
            correctAnswer: req.body.correctAnswer,
            answers: [{
              answer: req.body.answer}]
      }]
    })

      quiz.save(function(err, result){
        if(err) {return next (err)}
        res.status(201).json(result)
      });
});

//HTTP request logger
app.use(morgan('tiny'));

// launch our backend into a port
app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));
