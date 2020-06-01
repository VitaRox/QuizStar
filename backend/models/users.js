const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let usersSchema = new Schema({
  userName: {
    type: String
  },
  phone: {
    type: String
  },
  active: {
    type: Boolean
  },
  emailAddress:{
    type: String,
    lowercase: true,
  },
  email_verified: {
    type: Boolean,
    default:false
  },
  email_verify_token: {
    type: String,
    default:null
  },
  password: {
    type: String,
  },
  password_reset_token: {
    type: String,
    default:null
  },
  phone:{ 
    type: String,
    default:''
  },
  phone_verified: {
    type: Boolean,
    default:false
  },
  gender: {
    type: String,
    trim: true,
    uppercase: true,
    enum: ['M', 'F', 'NA', null],
    required: false,
    default: null
},
  quizHistory: {
    type: Number,
    default: 0
  },
  acct_created_at: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model("User", usersSchema);