import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import database from '../../MiniTestJsonDB';
import service from '../../../../server';
import MONGODB_URI from 'server';

function Login() {

  // Error used to handle error conditions;
  const [error, setError] = useState(false);
  // isLoaded lets the front-end know that the user is now successfully logged in;
  // If user is logged in, unnecessary to display login forms;
  const [isLoaded, setLoaded] = useState(false);

  // The following 2 represent the info the user inputs in order to login
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // payload represents the array of data that the db will return upon successful (!error) condition;
  const [payload, setPayload] = useState([])

  // Create 2 values to represent username/password user enters into these components;
  const username = setUsernameInput(<UsernameForm username />);
  const password = setPasswordInput(<PasswordForm password />);

  // This is used to display the login forms in this view if the user has
  // not logged in yet, i.e. if !isLoaded;
  const login = () => {
    if(!isLoaded) {
      return <div>
        <UsernameForm />
        <PasswordForm />
      </div>
    }
  };

  // Sends login data back to our API, which in turn attempts
  // to fetch said data from MongoDB;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(MONGODB_URI, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify() // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
      });

  // Our click handler for login-credentials-submission event;
  // Sends the user input data to API for validation and retrieval
  // of related account info, if successful;
  // Updates all related state Hooks;
  const handleClick = () => {





    login();

  };


  return(
      <div>
          <main>
              <h1>Use the forms below to submit yr login credentials, human.</h1>
                  {window.onchange=login()}

                  {/*
                    Button below will submit all info entered to find user account/data,
                    error if not;
                    */}
                  <button id="submitLoginCreds" type="submit" onClick={useEffect}>Submit login credentials.</button>
          </main>
      </div>
      );
};

export default Login;