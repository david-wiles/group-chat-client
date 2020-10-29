import React from "react";

export default class AuthModal extends React.Component {
  state = {
    login: "",
    password: ""
  };

  componentDidMount() {
    let auth = localStorage.getItem("authentication")
    if (auth !== null) {
      this.submitAuth(auth);
    }
  }

  createAuth(event) {
    let authHeader = "Basic " + btoa(this.state.login + ":" + this.state.password);
    this.submitAuth(authHeader);
  }

  submitAuth(auth) {
    localStorage.setItem("authorization", auth);
    this.props.onAuthentication(auth);
  }

  render() {
    return (
      <div className="modal-container">
        <form onSubmit={this.createAuth}>
          <label for="login">Login</label>
          <input id="login" type="text" />
          <label for="password">Password</label>
          <input id="password" type="password"/>
          <button type="submit" value="Submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
