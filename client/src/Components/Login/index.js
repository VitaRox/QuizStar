import React, {useState, useEffect, useCallback} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Profile from '../Profile';
import jwtDecode from 'jwt-decode';

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
  // credentialsProcessing tracks whether credentials have been submitted;
  const [credentialsProcessing, setCredentialsProcessing] = useState(false);

  // The following 2 Hooks are used to track the state of the username/password fields,
  // i.e. whether they have been filled in
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  let userData = {};

  /*
   Called when submit is clicked;
   Checks whether user is attempting to pass blank forms;
   Sets credsProcessing to true if successful;
  */
  function setCredentials() {
    while (UsernameForm.username != null || PasswordForm.password != null) {
      alert("Cannot be blank.");
      setCredentialsProcessing(false);
    }
    setCredentialsProcessing(true);
  }

  // A handler function for when the login creds are submitted via onClick;
  function onSubmit(e) {
    // Prevents re-rendering default;
    e.preventDefault();
  };

  // Upon change, update the window (whether or not to display login submission forms);
  useEffect(() => {
    // Saves user token to localStorage upon successful validation;
    function setToken(idToken) {
      localStorage.setItem('id_token', idToken)
    }

    // Uses jwt-decode npm package to decode the token;
    function getProfile() {
      // assuming you have jwt token then use jwt-decode library
      return jwtDecode(localStorage.getItem('id_token'))
    }

    if (credentialsProcessing) {
      // Here, we set our params username and password =
      // corresponding values returned from our low-level
      // React components;
      const username = setUsername(UsernameForm.username);
      const password = setPassword(PasswordForm.password);
      // These values are then passed to the path for server-side login validation;
      axios.post(`/api/users/`, null, {
        "username": username,
        "password": password
      })
        // Here, the res object returned by POST (above) should contain JWT upon
        // successful validation of credentials and pass this along with our GET;
        .then(res => {
          if (res.type === 'success') {
            setToken(res.token) // Store the token in localStorage
            return Promise.resolve(res);
          } else {
            return Promise.reject(res)
          }
        })
    }
  }, [username, password, credentialsProcessing]);  // Memoization allows only one element to be updated on re-render if appropriate;


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
        <button id="attemptLogin" type="submit" onClick={setCredentials}>Submit login credentials.</button>
      </main>
    </div>
  );
}
export default Login;