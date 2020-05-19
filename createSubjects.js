const mongoose = require('mongoose');
//currently writes to our database....under test....
mongoose.connect('mongodb+srv://quizstar:quizstar1@mongodbqs-sdfsq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to Mongo'))
.catch(err => console.err('Could not connect to Mongo', err))

const subjectSchema = new mongoose.Schema({
  subjectName: String
});

const Sub = mongoose.model('Subject', subjectSchema);

async function createSub(){

 const sub1 = new Sub({
    subjectName: 'Math'
  })

  var result = await sub1.save();
  console.log("sub1 - " + result);

  const sub2 = new Sub({
     subjectName: 'English'
   })

  var result = await sub2.save();
  console.log("sub2 - " + result);


  const sub3 = new Sub({
      subjectName: 'Science'
    })

  var result = await sub3.save();
  console.log("sub3 - " + result);

  const sub4 = new Sub({
     subjectName: 'History'
   })

   var result = await sub4.save();
   console.log("sub4 - " + result);


};
createSub();
