import React, {useState, useEffect} from 'react';
import PasswordForm from '../LoginComponents/PasswordForm';
import UsernameForm from '../LoginComponents/UsernameForm';


const Login = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/")
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