import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: 'Name is required'
  },
  active: {
    type: Boolean
  },
  email:{
    type: String,
    unique: 'Email already exists',
    lowercase: true,
    required: 'Email is required'
  },
  email_verified: {
    type: Boolean,
    default:false
  },
  email_verify_token: {
    type: String,
    default:null
  },
  hashed_password: {
    type: String,
    required: "Password is required"
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
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
}
});


module.exports = mongoose.model("User", UserSchema);