const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AnswerSchema = new mongoose.Schema({
  answer: String
});

const Answer = mongoose.model('Answer', AnswerSchema)

module.exports = Answer;