const express = require('express');
const app = express();
app.use(express.static('client'))

// Add handling for alternate port to use in event 3200 is unavailable;
const port = 3200 || process.env.PORT;

// Home GET route;
app.get('/', function (req, res) {
  res.send('Hello. Vita changed me.')
});

/*
 A route to log the user in;
 'username' and 'password' params are passed in via React
 components, UsernameForm and PasswordEntryForm, which are
 found inside the React component, Login;
*/
app.get(`/login/:submit`, (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  console.log("If you're reading this, you've had a successful login submission.");
  res.status(200).send(`Welcome! You've logged in using ${username} (USERNAME) and ${password} (PASSWORD)
  .`);
});


app.post('/', function (req, res) {
  res.send('Got a POST request')
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
