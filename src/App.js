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
              return <LoginForm isUserLoggedIn={this.state.isUserLoggedIn} />;
            }}
          />
          <Route
            path="/signUp"
            render={() => {
              return <SignUpForm />;
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
        full_name: userInfo.full_name,
        password: userInfo.password
      })
    }).then(res => res.json())
    .then(user => {
      localStorage.setItem("token", user.jwt)
      this.setState({
        user: user
      })
    })
  }

}

export default App;
