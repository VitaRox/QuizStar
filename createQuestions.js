const mongoose = require('mongoose');
//currently writes to our database....under test....
mongoose.connect('mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to Mongo'))
.catch(err => console.err('Could not connect to Mongo', err))

const subjectSchema = new mongoose.Schema({
  quizName: String,
  question:String,
  answers[]
});

const Quiz = mongoose.model('Subject', subjectSchema);

async function createSub(){

 const sub1 = new Subject({
    subjectName: 'Math'
  })

  var result = await sub1.save();
  console.log("sub1 - " + result);


};
createSub();
