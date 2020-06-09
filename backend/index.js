const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/details", {
  useNewUrlParser: true
});

let users = require("./users");

const router = express.Router();
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

router.route("/getData").get(function(req, res) {
  detail.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

/*
 A route to log the user in;
 'username' and 'password' params are passed in via React
 components UsernameForm and PasswordEntryForm (inside Login);
*/
router.get(`/login/:submit`, (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  console.log("If you're reading this, you've had a successful login submission.");
  res.status(200).send(`Welcome! You've logged in using ${username} (USERNAME) and ${password} (PASSWORD)
  .`);
});

// Retrieves list of quiz subjects;
router.get('/subjects', (req, res) =>{
  Subject.find({}).sort({})
    .then((data) =>{
      console.log('Data: ',data);
      res.json(data);
    })
    .catch((error) =>{
      console.log('error');
    });
});

// demo endpoint
router.post("/updateUser", (req, res) => {
  // maybe mongoose implementation?
  models.User.update(req.body.user);
  // req.body.base64Img
});

