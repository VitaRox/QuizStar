import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../App/App.css";

function Profile() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "500px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop files here</p>
      </div>
      <div>{images}</div>
    </div>
  );
}

export default Profile;

/* import React from 'react';
import "../App/App.css";



const Profile= ()=> {    
    return(
        <div>
            <main>
                <h1>Profile page Coming Soon!</h1>    
            </main>
        </div>
        )
}
export default Profile; */
