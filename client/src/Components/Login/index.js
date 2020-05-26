import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-mdl';

'react-router-dom';

function Login() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    // Send the values input by user to URL to parse login credentials/authorize;
    fetch("/Login/:username/:password")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  function displayUserResults() {
    console.log(`This thing is passing ${usernameInput} and ${passwordInput} to back end.`);
  }

  return(
      <div>
          <main>
              <h1>Use the forms below to submit yr login credentials, human.</h1>

                  <UsernameForm />
                  <PasswordForm />
                  {/*
                    Button below will submit all info entered into both of the above fields in this view
                    using an Express route (by calling GET)
                    */}
                  <button id="submitLoginCreds" type="submit" onClick={useEffect}>Submit login credentials.</button>
          </main>
      </div>
      );
};

export default Login;