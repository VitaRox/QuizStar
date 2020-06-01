import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import database from '../../MiniTestJsonDB';
import axios from 'axios';

function Login() {

  // Error used to handle error conditions;
  const [error, setError] = useState(false);
  // isLoaded lets the front-end know that the user is now successfully logged in;
  // If user is logged in, unnecessary to display login forms;
  const [isLoaded, setIsLoaded] = useState(false);

  // The following 2 represent the info the user inputs in order to login
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // payload represents the array of data that the db will return upon successful (!error) condition;
  const [payload, setPayload] = useState([])


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

  // Handles click, sends login data back;
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch('../../MiniTestJsonDB.js', {
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
      // const response = await database(database.filter(database.username === username)
      //   && database.filter(database.password === password));
  //     if (!error) {
  //       setIsLoaded(true);
  //       setPayload();
  //       console.log(response);
  //       setPayload(response);
  //     } else {
  //       alert("Incorrect username or password.");
  //     }
  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state



  // Displays user data if password and username are correct;
  // Returns error message otherwise;
  // const displayUserData = async() => {
  //   console.log(`This thing is passing ${username} and ${password} to back-end.`);
  //   const userData = await fetch(
  //     "MiniTestJsonDB.js"
  //   );
  //   if(database.username.filter(username) && database.password.filter(password)) {
  //     const items = await userData.json();
  //     setError(false);
  //     setIsLoaded(true);
  //     console.log(items);
  //   } else if(!database.username.filter(username)) {
  //     console.log(`${username} is not in our system.`);
  //   } else {
  //     console.log("Incorrect password.  Try again.");
  //   }
  // };

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