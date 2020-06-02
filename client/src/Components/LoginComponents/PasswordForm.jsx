import React, {useState, useEffect} from 'react';

// Defines the component thru which the user enters their password when logging in (SignIn view);
function PasswordForm() {

  const [passwordInput, setPasswordInput] = useState("");

  // The password that will be returned;
  const password = () => {
    setPasswordInput(passwordInput);
  };

  return(
    <div className="loginForm">
      <form>
        <input
          value={passwordInput}
          onChange={e => setPasswordInput(e.target.value)}
          placeholder="Please enter your password:"
          type="password"
          name="password"
          required
        />
      </form>
    </div>
  );
};

export default PasswordForm;