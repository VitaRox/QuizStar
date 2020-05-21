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


//to fix empty array
const data ={
  subjectName: 'Will this show in DB?'
};

// new instance of the model
const newSubject = new Subject(data);

newSubject.save((error) => {
  if(error){
    console.log("oops try again");
  } else{
    console.log('data has been saved');
  }
});

//route is returning an empty array..........
//but new data is being saved to
app.get('/subjects', (req, res) =>{

  Subject.find({ subjectName:1}).sort({})
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
