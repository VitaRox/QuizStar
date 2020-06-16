import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import quizstar from "./quizstar.png";
import "./login.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <div>
          <p class="aligncenter">
            <img img src={quizstar} class="theLogo" alt="theLogo" />
          </p>
        </div>
        <div className="col-md-12">
          <div className="card card-container">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
            />

            <div className="form-group">
              <label>Username</label>
              <input className="username" type="text" />
              <br />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="username" type="text" />
              <br />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
