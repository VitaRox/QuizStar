import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// This component represents the overall login form the
// users uses to submit their credentials through;
function Login() {

  // State HOOKS;
  // Error used to handle error conditions;
  const [error, setError] = useState(false);
  // isLoaded lets the front-end know that the user is now successfully logged in;
  // If user is logged in, unnecessary to display login forms;
  const [isLoaded, setLoaded] = useState(false);

  const [loginCreds, setLoginCreds] = useState("");

  // The following 2 represent the info the user inputs in order to login
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // 'Payload' represents the array of data that the db will return upon successful (!error) condition;
  // const [payload, setPayload] = useState([]);

  // The following two consts will update and store the creds the user enters;
  const username = () => {
    setUsernameInput(passwordInput);
  };
  const password = () => {
    setPasswordInput(passwordInput);
  };

  // This const refers to the url of the service we are contacting;
  const apiURL = "https://localhost:8080";

  // useEffect updates the look/behavior of this component upon updates to
  // user login data, which is signalled by onClick;
  // Sends login data back to our API, which in turn attempts
  // to fetch said data from MongoDB;
  useEffect(() => {
    const response = fetch(apiURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: new Headers ({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(username, password) // body data type must match "Content-Type" header
    })
    .then((response) => response.json()); // parses JSON response into native JavaScript objects
  });

  // This method retrieves server response with the provided token;
  function requestUserInfo(token) {
    return fetch(`${apiURL}/signin`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      })
    })
      .then((response) => response.json());



  }
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

  // Our click handler for login-credentials-submission event;
  // Sends the user input data to API for validation and retrieval
  // of related account info, if successful;
  // Updates all related state Hooks;
  const handleClick = () => {

    // Update loginCreds state array with user input;
    // The individual components handle onSubmit/values entered,
    // so no need for it here;
    setLoginCreds([<UsernameForm username />, <PasswordForm password />]);

    // Use 'login' to re-render login components (if login unsuccessful),
    // sweep them away if login is successful;
    login();
  };

  return(
      <div>
          <main>
              <h1>Use the forms below to submit yr login credentials, human.</h1>
                  {/*{window.onchange=login()}*/}

                  {/*
                    Button below will submit all info entered to find user account/data,
                    error if not;
                    */}
                  <button id="submitLoginCreds" type="submit" onClick={handleClick}>Submit login credentials.</button>
          </main>
      </div>
      );
};

export default Login;