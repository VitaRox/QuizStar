import React, {useState, useEffect} from 'react';
import UsernameForm from '../Components/UsernameForm';
import PasswordEntryForm from 'QuizStar/client/src/Components/PasswordEntryForm.jsx';
/*
  Should render the Login view, the page/portal through which the user can log in;
  Should route to the Home component-rendered view;
 */
function Login() {

  return(
    <div>
      <h1>Login page Coming Soon!</h1>
      <UsernameForm />
      <PasswordEntryForm />
    </div>
  );
};

export default Login;