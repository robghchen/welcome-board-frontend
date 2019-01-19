import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class LoginForm extends Component {
  state = {
    currentUser: {
      fullName: "",
      password: ""
    },
    value: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitLoginHandler = event => {
    event.preventDefault();

    this.props.submitLoginHandler(this.state);
    this.setState({
      fullName: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="ui card">
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
                    name="full-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={this.state.currentUser.fullName}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    className="form-control"
                    name="password"
                    type="text"
                    placeholder="Enter a password"
                    value={this.state.currentUser.password}
                    onChange={this.changeHandler}
                  />
                  <br />
                  <input type="submit" className="button" value="Submit" />
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
