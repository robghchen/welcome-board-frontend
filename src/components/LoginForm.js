import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class LoginForm extends Component {
  state = {
    loginFullName: "",
    loginPassword: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitLoginHandler = event => {
    event.preventDefault();

    this.props.submitLoginHandler(this.state, event);
    this.setState({
      loginFullName: "",
      loginPassword: ""
    });
  };

  render() {
    return (
      <div id="login-form" className="ui card form">
        <h2>Login</h2>
        <Route
          path="/login"
          render={() => {
            return (
              <div>
                <form onSubmit={this.submitLoginHandler}>
                  <label htmlFor="full-name">Full Name:</label>
                  <input
                    id="full-name"
                    className="form-control"
                    name="loginFullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={this.state.loginFullName}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    className="form-control"
                    name="loginPassword"
                    type="password"
                    placeholder="Enter a password"
                    value={this.state.loginPassword}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <input
                    type="submit"
                    className="submit button pointer"
                    value="Submit"
                  />
                </form>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default LoginForm;
