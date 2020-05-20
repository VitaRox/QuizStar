const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const subjectSchema = new Schema({
  subjectName: String
});

//model
const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
