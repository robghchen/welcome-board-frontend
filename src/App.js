import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";
import ModShowPage from "./components/ModShowPage";
import EditProfileForm from "./components/EditProfileForm";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
// import StatsDiv from './components/StatsDiv';          will delay this component for later

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoggedIn: false,
      currentUser: {
        id: 2,
        full_name: "Carlo Fernando",
        password: "password",
        mod_id: 4
      },
      mods: []
    };

    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/mods').then(resp => resp.json()).then(mods => this.setState({ mods }));
    fetch('http://localhost:3000/api/v1/users').then(resp => resp.json()).then(users => this.setState({ users }));
    fetch('http://localhost:3000/api/v1/posts').then(resp => resp.json()).then(posts => this.setState({ posts }));
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <NavBar isUserLoggedIn={this.state.isUserLoggedIn} />

        <Switch>
          <Route path="/home" component={MainPage} />
          <Route path="/mod/:id" component={ModShowPage} />
          <Route
            path="/editProfile"
            render={() => {
              return (
                <EditProfileForm
                  currentUser={this.state.currentUser}
                  updateHandler={this.updateHandler}
                  mods={this.state.mods}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={() => {
              return <LoginForm submitSignUpHandler={this.submitLoginHandler} />;
            }}
          />
          <Route
            path="/signUp"
            render={() => {
              return <SignUpForm submitSignUpHandler={this.submitSignUpHandler}/>;
            }}
          />
        </Switch>

        {/* {<StatsDiv />} */}
      </div>
    );
  }

  updateHandler(currentUser) {
    this.setState({ currentUser: currentUser });

    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        full_name: currentUser.full_name,
        password: currentUser.password,
        mod_id: currentUser.mod_id
      })
    }).then(resp => resp.json()).then(console.log);
  }

  submitSignUpHandler(userInfo, event) {
    event.preventDefault()
    this.createUser(userInfo)
    this.props.history.push("/")
  }

  createUser = userInfo => {
    console.log("app", userInfo)
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        full_name: userInfo.signupFullName,
        password: userInfo.signupPassword
      })
    }).then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.jwt)
      this.setState({
        user: res.user
      })
    })
  }

  submitLoginHandler(userInfo, event) {
    event.preventDefault()
    this.getUser(userInfo)
    this.props.history.push("/")
  }

  getUser = userInfo => {
    console.log("app", userInfo)
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        full_name: userInfo.loginFullName,
        password: userInfo.loginPassword
      })
    }).then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.jwt)
      this.setState({
        user: res.user
      })
    })
  }

}

export default App;
