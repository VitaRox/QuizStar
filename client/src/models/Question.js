const QuestionSchema = new mongoose.Schema({
 description: String,
 answers: [
   {text: String,
     required: true
   },
   isCorrect:{
     type: Boolean,
     required: true,
     default: false
   }

   }
 ]
});
