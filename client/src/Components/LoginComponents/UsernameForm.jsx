import React, {useState, useEffect} from 'react';

/** This defines the component thru which the user provides input, an HTML-style field with a submit button.
 * Can possibly be refactored for a) user login AND b) username creation when account created;
 * @return username
**/
function UsernameForm() {

  // Defines the username (email address, etc.) user enters to login from the
  // Login view;
  const [usernameInput, setUsername] = useState("");

  const username = () =>  {
    setUsername(usernameInput);
  };


  return (
    <div className="loginForm">
      <form>
        <input
          value={usernameInput}
          onChange={e => setUsername(e.target.value)}
          placeholder="Please enter your username:"
          type="text"
          name="username"
          required
        />
      </form>
    </div>
  );
};

export default UsernameForm;