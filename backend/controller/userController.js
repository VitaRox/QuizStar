const mongoose = require('mongoose');
const User = mongoose.model('User');

//const QuizHistory = mongoose.model('QuizHistory');

exports.signIn = (req, res) => {
  res.redirect('/');
};

exports.getCurrentUser = (req, res) => {
  res.send(req.user);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  if (!req.user) {
    res.status(401).json({ notLoggedIn: 'You need to log in first' });
  }

  if (req.body.username) req.user.username = req.body.username;
  if (req.body.email) req.user.email = req.body.email;

  // Save the user
  await req.user.save();
  res.json({ profileUpdated: 'Profile Updated!' });
};

// Delete user account
exports.deleteUserAccount = async (req, res) => {
  if (!req.user) {
    res.status(401).json({ notLoggedIn: 'You need to log in first' });
  };

  res.json({ message: 'Account deleted successfully!' });
};S
