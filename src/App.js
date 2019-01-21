import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import { Route, Switch, withRouter } from "react-router-dom";
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
      current_mod: 0,
      // please do not change the snake case
      currentUser: {
        id: 0,
        full_name: "",
        // password: "",
        mod_id: 0
      },
      mods: [],
      posts: [],
      users: [],
      token: ""
    };

    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/mods")
      .then(resp => resp.json())
      .then(mods => this.setState({ mods }));
    fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
      .then(users => this.setState({ users }));
    fetch("http://localhost:3000/api/v1/posts")
      .then(resp => resp.json())
      .then(posts => {
        this.setState({ posts });
      });

    if (this.state.isUserLoggedIn) {
      let token = localStorage.getItem("token");
      fetch("http://localhost:3000/api/v1/current_user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Action: "application/json",
          Authorization: `${token}`
        }
      });
    }
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div>
        <NavBar
          isUserLoggedIn={this.state.isUserLoggedIn}
          logout={this.logout}
          currentPath={this.props.location.pathname}
        />

        <Switch>
          <Route path="/home" component={MainPage} />
          <Route
            path="/mod/:id"
            render={RouterProps => {
              return (
                <ModShowPage
                  mod_id={RouterProps.match.params.id}
                  postArray={this.state.posts}
                  addPost={this.addNewPost}
                  loggedInUser={this.state.isUserLoggedIn}
                />
              );
            }}
          />
          <Route
            path="/editProfile"
            render={() => {
              return (
                <EditProfileForm
                  isUserLoggedIn={this.state.isUserLoggedIn}
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
              return <LoginForm submitLoginHandler={this.submitLoginHandler} />;
            }}
          />
          <Route
            path="/signUp"
            render={() => {
              return (
                <SignUpForm submitSignUpHandler={this.submitSignUpHandler} />
              );
            }}
          />
        </Switch>

        {/* {<StatsDiv />} */}
      </div>
    );
  }

  addNewPost = (e, input, mod) => {
    e.preventDefault();

    if (parseInt(mod) > this.state.currentUser.mod_id) {
      alert("You can only submit posts for mods you are in or have completed.");
    } else {
      let token = localStorage.getItem("token");
      fetch("http://localhost:3000/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: this.state.token
        },
        body: JSON.stringify({
          content: input,
          mod_id: parseInt(mod),
          user_id: this.state.currentUser.id
        })
      })
        .then(res => res.json())
        .then(data => {
          let newArr = [...this.state.posts];
          newArr.push(data);
          this.setState({ posts: newArr });
        });
    }
  };

  updateHandler(currentUser) {
    this.setState({ currentUser });

    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.state.token
      },
      body: JSON.stringify({
        full_name: currentUser.full_name,
        password: currentUser.password,
        mod_id: currentUser.mod_id
      })
    })
      .then(resp => resp.json())
      .then(user =>
        this.setState({
          currentUser: {
            id: user.id,
            full_name: user.full_name,
            mod_id: user.mod_id
          }
        })
      );
  }

  submitSignUpHandler = (userInfo, event) => {
    event.preventDefault();
    this.createUser(userInfo);
    this.props.history.push("/home");
  };

  createUser = userInfo => {
    console.log("userinfo", userInfo);
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        full_name: userInfo.full_name,
        password: userInfo.password,
        mod_id: userInfo.mod_id
      })
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.jwt);
      this.setState({
        isUserLoggedIn: true,
        token: localStorage.getItem("token"),
        currentUser: {
          id: res.user.id,
          full_name: res.user.full_name,
          password: "",
          mod_id: res.user.mod_id
        }
      });
    });
  };

  submitLoginHandler = (userInfo, event) => {
    event.preventDefault();
    this.getUser(userInfo);
    this.props.history.push("/home");
  };

  getUser = userInfo => {
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
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("token", res.jwt);
        this.setState({
          isUserLoggedIn: true,
          token: localStorage.getItem("token"),
          currentUser: {
            id: res.user.id,
            full_name: res.user.full_name,
            password: "",
            mod_id: res.user.mod_id
          }
        });
      });
  };

  logout = () => {
    //need to remove local storage token
    localStorage.removeItem("token");
    this.setState({
      currentUser: {
        id: 0,
        full_name: "",
        mod_id: 0
      },
      isUserLoggedIn: false,
      token: ""
    });
    this.props.history.push("/home");
  };
}

export default withRouter(App);
