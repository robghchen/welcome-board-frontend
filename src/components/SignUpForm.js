import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class SignUpForm extends Component {
  state = {
    currentUser: {
      fullName: "",
      password: "",
      image: "",
      mod: 1
    },
    
  };

  changeHandler = event => {
    this.setState({
      currentUser:[event.target.name] = event.target.value
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

  render() {
    return (
      <div className="ui card">
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
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={this.state.currentUser.value}
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
      </div>
    );
  }
}

export default SignUpForm;
