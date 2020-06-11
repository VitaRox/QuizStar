import React, {useState, useEffect, useCallback} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Profile from '../Profile';


// This component represents the overall login form the
// users uses to submit their credentials through;
function Login() {


  // State HOOKS;
  // Error used to handle error conditions;
  const [error, setError] = useState(false);
  // isLoaded lets the front-end know that the user is now successfully logged in;
  // If user is logged in, unnecessary to display login forms;
  const [isLoaded, setLoaded] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // 'Payload' represents the array of data that the db will return upon successful (!error) condition;
  const [payload, setPayload] = useState([]);
  // The following 2 Hooks are used to track the state of the username/password fields,
  // i.e. whether they have been filled in
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // Upon change, update the window (whether or not to display login submission forms);
  useEffect(() => {
    if(setCredentials()) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      // Here, the values passed by our low-level React components,
      // username and password, are set to the values of this.username
      // and this.password using useState();
      const username = setUsername(UsernameForm.username);
      const password = setPassword(PasswordForm.password);
      // These values are then interpolated into our URL string;
      axios.post(`https://localhost:3001/api/users/:${username}/:${password}`, null, {
        // Here we assign username and password to the related req.params;
        username: username,
        password: password
      })
        .then(console.log(`User has passed \n${username} and \n${password} to the server-side.`))
        // Here, the res object returned by POST (above) should contain JWT upon
        // successful validation of credentials and pass this along with our GET;
        .then(res => {
          axios.get(`https://localhost:3001/api/users/`)
            // Here, we will need to be returned a JWT upon successful credential validation;
            // JWT will be used in a GET request to retrieve user data;
            .then(res => {
              console.log(res.status());
              console.log(res.data);
              console.log("Great success!");
            })
            .catch(function (error) {
              console.log("danger, Will Robinson, DANGER");
            })
        })
    }
  }, [username, password]);

  /*
   Called when submit is clicked;
   Checks whether user is attempting to pass blank forms;
   If not, calls State methods to setState of appropriate props
   = the props exported by the appropriate React components;
   Returns true if successful;
  */
  function setCredentials() {
    while (UsernameForm.username != null || PasswordForm.password != null) {
      alert("Cannot be blank.");
      return false;
    }
    return true;
  }

  function handleChange() {
    setUsername(UsernameForm.username);
    setPassword(PasswordForm.password);
    return setCredentials();
  }


  return (
    <div>
      <main>
        {/* Below: conditionally render instruction to login or else render Profile*/}
        {!isLoggedIn ?
          (<div>Use the forms below to submit yr login credentials, human.<br/>
             <UsernameForm/><br/>
             <PasswordForm/><br/>
          </div>)
          : (<div>
            {Profile}
          </div>)}

        {/*
          Button below will submit all info entered to find user account/data,
          error if not;
        */}
        <button id="attemptLogin" type="button" onClick={handleChange}>Submit login credentials.</button>
      </main>
    </div>
  );

}
export default Login;