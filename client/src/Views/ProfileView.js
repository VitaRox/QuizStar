import React, {useState, useEffect} from 'react';

/* Renders our ProfileView view/page, accessed from 'Home', in which user can view their
   personal info, maybe including stored quizzes? Or should this get it's own view?
 */
function ProfileView() {

  // Prop defining the user's name;
  const [userName, setUserName] = useState("");
  const name = () => {
    setUserName(userName);
  };

  // Prop defining the user's age;
  const [userAge, setUserAge] = useState("0");
  const age = () => {
    setUserAge(userAge);
  }

  // Prop defining the user's login authorization password;
  const [userPassword, setUserPassword] = useState("");
  const password = () => {
    setUserPassword(userPassword);
  }

  return (
    <div>
      <h1>USER PROFILE</h1>
    </div>
  );
};

export default ProfileView;