import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    signupFullName: "",
    password: "",
    mod_id: 1
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitSignUpHandler = event => {
    event.preventDefault();

    this.props.submitSignUpHandler(this.state, event);
    this.setState({
      signupFullName: "",
      signupPassword: "",
      mod_id: 1
    });
  };

  render() {
    return (
      <div id="signup-form" className="ui card form">
        <h2>Sign Up</h2>
        <Route
          path="/signup"
          render={() => {
            return (
              <div>
                <form onSubmit={this.submitSignUpHandler}>
                  <label htmlFor="full-name">Full Name:</label>
                  <input
                    id="full-name"
                    className="form-control"
                    name="signupFullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={this.state.signupFullName}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    className="form-control"
                    name="signupPassword"
                    type="password"
                    placeholder="Enter a password"
                    value={this.state.signupPassword}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="mod">Mod:</label>
                  <select
                    id="mod"
                    className="form-control"
                    name="mod"
                    value={this.state.mod}
                    onChange={this.changeHandler}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <input type="submit" className="submit button" value="Submit" />
                </form>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default SignUpForm;
