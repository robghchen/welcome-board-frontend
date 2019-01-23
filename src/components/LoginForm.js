import React, { Component } from "react";
import { Route } from "react-router-dom";

class LoginForm extends Component {
  state = {
    loginFullName: "",
    loginPassword: "",
    alert_error: false
  };

  componentWillUnmount() {
    localStorage.removeItem("loginError");
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitLoginHandler = event => {
    event.preventDefault();

    if (this.state.loginFullName !== "" && this.state.loginPassword !== "") {
      this.props.submitLoginHandler(this.state, event);
      this.setState({
        loginFullName: "",
        loginPassword: ""
      });
    } else {
      this.setState({ alert_error: true });
    }
  };

  submitSignUpHandler = event => {
    event.preventDefault();

    if (this.state.full_name !== "" && this.state.password !== "") {
      this.props.submitSignUpHandler(this.state, event);
      this.setState({
        full_name: "",
        password: "",
        mod_id: 1
      });
    } else {
      this.setState({ alert_error: true });
      // this.props.history.push("/signup");
    }
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

                  {this.state.alert_error ? (
                    <span className="alert-error">
                      Full name and password field cannot be empty.
                    </span>
                  ) : null}
                  <span className="alert-error">
                    {localStorage.getItem("loginError") !== ""
                      ? localStorage.getItem("loginError")
                      : null}
                  </span>
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
