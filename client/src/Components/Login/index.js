import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MiniTestJsonDB from 'MiniTestJsonDB.js';


function Login() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [userData, setUserData] = useState([]);

  // This will call displayUserData upon Submit button clicked and
  // await response from database;
  useEffect(async() => {
    displayUserData();
  }, []);




  // useEffect(async() => {
  //   // Send the values input by user to URL to parse login credentials/authorize;
  //   fetch("/Login/:username/:password")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result.items);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, []);

  // Create 2 values to represent username/password being extracted from those components;
  // The values of 'username' and 'password' in their associated components will be
  // handed up to this component;
  const username = setUsernameInput(<UsernameForm username />);
  const password = setPasswordInput(<PasswordForm password />);

  // Displays user data if password and username are correct;
  // Returns error message otherwise;
  const displayUserData = async() => {
    console.log(`This thing is passing ${username} and ${password} to back-end.`);
    const userData = await fetch(
      "MiniTestJsonDB.js"
    );
    if(MiniTestJsonDB.username.has(username) && MiniTestJsonDB.password.has(password)) {
      const items = await userData.json();
      setError(false);
      setIsLoaded(true);
      console.log(items);
    } else if(!MiniTestJsonDB.username.has(username)) {
      console.log(`${username} is not in our system.`);
    } else {
      console.log("Incorrect password.  Try again.");
    }
  };

  return(
      <div>
          <main>
              <h1>Use the forms below to submit yr login credentials, human.</h1>

                  <UsernameForm />
                  <PasswordForm />
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