import React from "react";

import FileUpload from "./FileUpload.js";

const Profile = () => {
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">Profile Page</h4>
      <h1>Upload a Pic!</h1>

      <FileUpload />
    </div>
  );
};
export default Profile;
