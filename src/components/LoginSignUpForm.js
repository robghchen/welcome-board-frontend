import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class LoginSignUpForm extends Component {
  state = {
    currentUser: {
      fullName: "",
      password: "",
      image: "",
      mod: 1
    },
    value: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitSignUpHandler = event => {
    event.preventDefault();

    this.props.submitSignUpHandler(this.state);
    this.setState({
      fullName: "",
      password: "",
      image: "",
      mod: 1
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
      <div>
        <switch>
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
                    <label htmlFor="mod">Mod:</label>
                    <select
                      id="mod"
                      className="form-control"
                      name="mod"
                      value={this.state.currentUser.mod}
                      onChange={this.changeHandler}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <br />
                    <label htmlFor="image">Profile Picture:</label>
                    <input
                      id="image"
                      className="form-control"
                      name="image"
                      type="text"
                      placeholder="Enter picture url"
                      value={this.state.currentUser.image}
                      onChange={this.changeHandler}
                    />
                    <input type="submit" className="button" value="Submit" />
                  </form>
                </div>
              );
            }}
          />

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
        </switch>
      </div>
    );
  }
}

export default LoginSignUpForm;
