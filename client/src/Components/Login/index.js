import React, {useState, useEffect, useCallback} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Profile from '../Profile';


// This component represents the overall login form the
// users uses to submit their credentials through;
function Login() {

  // This const refers to the url of the API service we are contacting;
  // Should map to our Express server, server.js;
  const API_URL = `https://localhost:3001/api/users`;

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
  const [usernameInput, setUsernameInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);

  // This is used to display the login forms in this view
  // if the user has not logged in yet, i.e. if !isLoaded;
  function showLoginForms() {
    if (!isLoggedIn) {
      return <div>
        <UsernameForm/>
        <PasswordForm/>
      </div>
    }
  };

  // Upon change, update the window (whether or not to display login submission forms);
  useEffect(() => {
    showLoginForms();
    if(setCredentials()) {
      const username = setUsernameInput(UsernameForm.username);
      const password = setPasswordInput(PasswordForm.password);
      axios.post(`${API_URL}`, null, {
        // axios.req.params.username,
        username: username,
        password: password
      })
        // Here, we will need to be returned a JWT upon successful credential validation;
        // JWT will be used in a GET request to retrieve user data;
      .then(res => {
        setPayload(res.data);
        console.log(payload);
      })
      .catch(function (error) {
        console.log("eat shit asshole");
      })
    }
  }, [showLoginForms, API_URL, payload]);

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

  return (
    <div>
      <main>
        {/* Below: conditionally render instruction to login or else render Profile*/}
        <h1>{!isLoggedIn ? (<div>Use the forms below to submit yr login credentials, human.</div>)
            : (<div>{Profile}</div>)}
          </h1>
        <div>
          {showLoginForms()}
        </div>
        {/*
          Button below will submit all info entered to find user account/data,
          error if not;
        */}
        <button id="attemptLogin" type="button" onClick={setCredentials}>Submit login credentials.</button>
      </main>
    </div>
  );

}
export default Login;