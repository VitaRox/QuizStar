import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./Profile.css";
import axios from "axios";

// stateless function
// not classes  (somewhat the same)
// could be easier to integrate states as classes
// redux in stateless functions

function Profile() {
  const [files, setFiles] = useState([]);
  const [base64File, setBase64File] = useState("");
  const [any, setAny] = useState("a");
  const [bio, setBio] = useState("");
  let staticConst = "";

  // useEffect(()=>processed('string'))
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();

      reader.onload = function () {
        setBase64File(reader.result);
        /*axios.post('https://example', {
                    base64Img: reader.result
                })*/
      };
      reader.readAsDataURL(acceptedFiles[0]);

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const updateUser = (ev) => {
    ev.preventDefault();
    axios.post("http://localhost:8080/updateUser", {
      userName: "anonymous",
      bio: bio,
      profileImage: base64File,
    });
  };

  const images = files.map((file) => (
    <div key={file.name}>
      <div className="Photo">
        <img src={file.preview} style={{ width: "180px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div>
      <form className="bio" onSubmit={updateUser}>
        <div className="form-group">
          <label aria-label="bio">
            bio
            <textarea
              onChange={(ev) => setBio(ev.target.value)}
              className="form-control"
              rows="5"
            ></textarea>
          </label>
        </div>
        <button className="bioButton" type="submit">
          submit bio
        </button>
      </form>

      <div>{images}</div>

      <div className="dragndrop" {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="p1"> Drop files here </p>
      </div>
    </div>
  );
}

export default Profile;
