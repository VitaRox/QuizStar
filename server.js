const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const Subject = require("./client/src/models/Subject");
const Quiz = require("./client/src/models/Quiz");
var cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./backend/routes/api/users");
const User = require("./models/userModel");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


const MONGODB_URI =
  "mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.error("Could not connect to Mongo", err);
    process.exit();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./backend/config/passport")(passport);
// Routes
app.use("/api/users", users);


//displays in terminal
app.use(logger);
function logger(req,res, next){
  console.log('Log')
  next()
}

// Register a user;
app.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
      return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
          return res.status(400).json({ email: "Email already exists" });
      } 
      else {
          const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
          });
      }
      console.log(
        "You are registered!"
      );
  });
});



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

//displays one quiz by id
app.get('/quiz/:id', async (req, res) => {
  var data = await Quiz.findOne(req.params._id)
  res.json(data)
  console.log("quiz log "+ data);
})


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

// launch our backend into a port
app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));
