const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const morgan = require("morgan");
const path = require("path");
const Subject = require("./backend/models/Subject");
const Quiz = require("./backend/models/Quiz");
var cors = require("cors");


const User = require("./models/userModel");

const port = process.env.PORT || 8080;
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
 A route to log the user in;
 'username' and 'password' params are passed in via React
 components UsernameForm and PasswordEntryForm (inside Login);
*/
app.get(`/login/:submit`, (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  console.log(
    "If you're reading this, you've had a successful login submission."
  );
  res.status(200)
    .send(`Welcome! You've logged in using ${username} (USERNAME) and ${password} (PASSWORD)
  .`);
});

// Retrieves list of quiz subjects;
app.get("/subjects", (req, res) => {
  Subject.find({})
    .sort({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error");
    });
});

//displays all quizzes in DB
app.get('/quiz', (req, res) =>{

  Quiz.find({}).sort({})
    .then((data) =>{
      console.log('Data Quiz: ',data);
      res.json(data);
    })
    .catch((error) =>{
      console.log('error');
    });

});

//quiz route
app.post("/quizcreate", cors(), (req, res) => {
  console.log(JSON.stringify(req.body));
  var questions = req.body.questions;

  //console.log(JSON.stringify(questions))

  var quiz = new Quiz({
    quizName: req.body.quizName,
    quizCreator: req.body.quizCreator,
    quizCreateDate: Date(),
  });

  for (var n = 0; n < questions.length; n++) {
    quiz.questions.push(questions[n]);
  }

  quiz.save(function (err, result) {
    if (err) {
      return next(err);
    }
    res.status(201).json(result);
  });
});

// demo endpoint
app.post("/updateUser", (req, res) => {
  // fake user
  User.create(
    req.body
    // { userName: 'anonymous' }
  ).then((user) => {
    console.log(user);
    user.update(req.body);
  });
});

//HTTP request logger
app.use(morgan("tiny"));



app.listen(port, () => console.log(`Server up and running on port ${port} !`));
