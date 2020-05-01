import React, {useState, useEffect} from 'react';
import App from './App';

// This defines the component thru which the user provides input, an HTML-style field with a submit button.
function UsernameForm({name}) {

  // Defines the username (email address, etc.) user enters to login from the
  // Login view;
  const [username, setUsername] = useState("");

  name = () =>  {
    setUsername(username);
  };

  const displayName = () => {
    return(
     <h1>{name}</h1>
    );
  };

  return (
    <div>

      {/*<h2>{displayName}</h2>*/}
      <form>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Please enter your username:"
          type="text"
          name="username"
          required
        />
        <button type="submit" className="submitButton" onClick={displayName}>Submit your response.</button>
      </form>
    </div>
  );
}

export default UsernameForm;