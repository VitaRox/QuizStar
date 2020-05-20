const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes');

const MONGODB_URI = 'mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI,{useNewUrlParser: true,
  useUnifiedTopology:true})
  .then(() => console.log('Connected to Mongo'))
   .catch(err => console.err('Could not connect to Mongo', err))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/subjects', routes);

// launch our backend into a port
app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));
