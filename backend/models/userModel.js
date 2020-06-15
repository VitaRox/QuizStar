const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: String,
  email: String,
  bio: String,
  profileImage: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
