import React from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';


const Login = (username, password, submitted, loading, error) => {
  //
  // // Our fields to handle changes to this overall form/page;
  // const [state, setState] = React.useState(setState());
  //
  // setState = {
  //   username: '',
  //   password: '',
  //   submitted: false,
  //   loading: false,
  //   error: ''
  // };
  //
  // function handleChange(e) {
  //   e.target.value;
  //   this.setState({ [name]: value });
  // }
  // // Submit login credentials to Express API to be routed;
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   handleChange(e);
  //   console.log("Submitting:");
  // };

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
                    {/*<button id="submitLoginCreds" type="submit" onClick={handleSubmit()}>Submit login credentials.</button>*/}
                    {/*<button type="submit" className="submitButton" onClick={password}>Submit your response.</button>*/}
            </main>
        </div>
        );
};

export default Login;