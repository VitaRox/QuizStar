const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const subjectSchema = new Schema({
  subjectName: String
})

//create model
const Sub = mongoose.model('Subject', subjectSchema);

module.exports = Sub;
