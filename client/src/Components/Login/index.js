import React from 'react';
import PasswordForm from '../PasswordForm';
import UsernameForm from '../UsernameForm';


const Login= ()=> {    
    return(
        <div>
            <main>
                <h1>You'll soon be able to log in right below this!</h1>
                  <UsernameForm />
              {/* eslint-disable-next-line react/jsx-no-undef */}
                  <PasswordForm />
            </main>
        </div>
        )
}
export default Login;