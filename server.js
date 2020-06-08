const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
var cors = require('cors');
const Subject = require('./client/src/models/Subject');
const Quiz = require('./client/src/models/Question');

const MONGODB_URI =
  'mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority'
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
app.use(cors());

/*
 A route to log the user in;
 'username' and 'password' params are passed in via React
 components UsernameForm and PasswordEntryForm (inside Login);
*/
app.get(`/login/:submit`, (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  console.log("If you're reading this, you've had a successful login submission.");
  res.status(200).send(`Welcome! You've logged in using ${username} (USERNAME) and ${password} (PASSWORD)
  .`);
});

// Retrieves list of quiz subjects;
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

//quiz route
app.post('/add-quiz', cors(), (req, res) => {
      console.log(JSON.stringify(req.body));

      var quiz = new Quiz({
        quizName: req.body.quizName,
        quizCreator: req.body.quizCreator,
        question: req.body.question,
        answers:[{
          answer1: req.body.answer1,
          answer2: req.body.answer2,
          answer3: req.body.answer3,
          answer4: req.body.answer4
        }],
        correct:req.body.correct
    })

      quiz.save(function(err, result){
        if(err) {
          return next (err)
        }
        res.status(201).json(result)
      });
});


// demo endpoint
app.post("/updateUser", (req, res) => {
  // maybe mongoose implementation?
  models.User.update(req.body.user);
  // req.body.base64Img
});

//HTTP request logger
app.use(morgan('tiny'));

// launch our backend into a port
app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));
