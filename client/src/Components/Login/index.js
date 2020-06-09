import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

// This component represents the overall login form the
// users uses to submit their credentials through;
function Login() {

  // State HOOKS;
  // Error used to handle error conditions;
  const [error, setError] = useState(false);
  // isLoaded lets the front-end know that the user is now successfully logged in;
  // If user is logged in, unnecessary to display login forms;
  const [isLoaded, setLoaded] = useState(false);

  // 'Payload' represents the array of data that the db will return upon successful (!error) condition;
  const [payload, setPayload] = useState([]);
  // The following 2 Hooks are used to track the state of the username/password fields,
  // i.e. whether they have been filled in
  const [usernameInput, setUsernameInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);

  // This is used to display the login forms in this view if the user has
  // not logged in yet, i.e. if !isLoaded;
  function showLoginForms() {
    if (!isLoaded) {
      return <div>
        <UsernameForm/>
        <PasswordForm/>
      </div>
    }
  };

  // Upon change, update the window (whether or not to display login submission forms);
  useEffect(window.onchange = showLoginForms());

  /*
   Called when submit is clicked;
   Checks whether user is attempting to pass blank forms;
   If not, calls State methods to setState of appropriate props
   = the props exported by the appropriate React components;
  */
  function setCredentials() {
    while (UsernameForm.username != null || PasswordForm.password != null) {
      alert("Cannot be blank.");
    }
    setUsernameInput(UsernameForm.username);
    setPasswordInput(PasswordForm.password);
  }

  // This const refers to the url of the API service we are contacting;
  // Should map to our Express server, server.js;
  const API_URL = "https://localhost:3000/login/:submit";

  return (
    <div>
      <main>
        <h1>Use the forms below to submit yr login credentials, human.</h1>

        {/*
          Button below will submit all info entered to find user account/data,
          error if not;
        */}
        <button id="attemptLogin" type="submit" onSubmit={setCredentials()}>Submit login credentials.</button>
      </main>
    </div>
  );

}
export default Login;