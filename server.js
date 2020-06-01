const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Subject = require('./client/src/models/Subject')

const app = express();
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


//HTTP request logger
app.use(morgan('tiny'));

// launch our backend into a port
app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));

exports.MONGODB_URI = MONGODB_URI;