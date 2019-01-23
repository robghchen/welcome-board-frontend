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
      // alert_error: false,
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
      // users: [],
      likes: [],
      token: ""
    };

    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://welcome-board-backend.herokuapp.com/api/v1/mods")
      .then(resp => resp.json())
      .then(mods => this.setState({ mods }));

    fetch("https://welcome-board-backend.herokuapp.com/api/v1/users")
      .then(resp => resp.json())
      .then(users => {
        localStorage.setItem("users", JSON.stringify(users));
        // this.setState({ users })
      });

    fetch("https://welcome-board-backend.herokuapp.com/api/v1/posts")
      .then(resp => resp.json())
      .then(posts => {
        this.setState({ posts });
      });

    fetch("https://welcome-board-backend.herokuapp.com/api/v1/likes")
      .then(resp => resp.json())
      .then(likes => {
        this.setState({ likes });
      });

    // Commented by Carlo: will comment this block of code because the code is not doing anything and
    // the state will default back to false if the page is reloaded
    // which will make the block of code below useless.
    // if (this.state.isUserLoggedIn) {
    //   let token = localStorage.getItem("token");
    //   fetch("https://welcome-board-backend.herokuapp.com/api/v1/current_user", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Action: "application/json",
    //       Authorization: `${token}`
    //     }
    //   });
    // }

    if (localStorage.getItem("token") !== null) {
      this.setState({
        currentUser: {
          id: parseInt(localStorage.getItem("id")),
          full_name: localStorage.getItem("full_name"),
          mod_id: parseInt(localStorage.getItem("mod_id"))
        },
        token: localStorage.getItem("token"),
        isUserLoggedIn: true
      });
    }
  }

  componentWillUnmount() {
    localStorage.clear();
  }

  render() {
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
                  isUserLoggedIn={this.state.isUserLoggedIn}
                  currentUser={this.state.currentUser}
                  deleteHandler={this.deleteHandler.bind(this)}
                  editPostHandler={this.editPostHandler}
                  likes={this.state.likes}
                  users={JSON.parse(localStorage.getItem("users"))}
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
          <Route path="/" component={MainPage} />
        </Switch>

        {/* {<StatsDiv />} */}
      </div>
    );
  }

  addNewPost = (input, mod) => {
    fetch("https://welcome-board-backend.herokuapp.com/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        content: input,
        mod_id: parseInt(mod),
        user_id: parseInt(localStorage.getItem("id"))
      })
    })
      .then(res => res.json())
      .then(data => {
        let newArr = [...this.state.posts];
        newArr.push(data);
        this.setState({ posts: newArr });
      });
  };

  updateHandler(currentUser) {
    this.setState({ currentUser });

    fetch(
      `https://welcome-board-backend.herokuapp.com/api/v1/users/${
        currentUser.id
      }`,
      {
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
      }
    )
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          currentUser: {
            id: user.id,
            full_name: user.full_name,
            mod_id: user.mod_id
          }
        });
        this.props.history.push("/home");
      });
  }

  submitSignUpHandler = (userInfo, event) => {
    event.preventDefault();
    this.createUser(userInfo);
    this.props.history.push("/home");
  };

  createUser = userInfo => {
    fetch("https://welcome-board-backend.herokuapp.com/api/v1/users", {
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
    fetch("https://welcome-board-backend.herokuapp.com/api/v1/login", {
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
      .then(res => {
        if (res.status === 401) throw new Error(res.status);
        else return res.json();
      })
      // .then(res => res.json())
      .then(res => {
        localStorage.setItem("token", res.jwt);
        localStorage.setItem("full_name", res.user.full_name);
        localStorage.setItem("id", res.user.id);
        localStorage.setItem("mod_id", res.user.mod_id);
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
      })
      .catch(error => {
        localStorage.setItem("loginError", "Invalid account/password");
        this.props.history.push("/login");
        // this.setState({ alert_error: true });
        // alert(`HTTP ERROR: ${error}, Unknown account or password!`);
      });
  };

  logout = () => {
    //need to remove local storage token
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("full_name");
    localStorage.removeItem("mod_id");

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

  deleteHandler(id) {
    const posts = [...this.state.posts].filter(post => post.id !== id);
    this.setState({ posts });
  }

  editPostHandler = (id, content) => {
    fetch(`https://welcome-board-backend.herokuapp.com/api/v1/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.state.token
      },
      body: JSON.stringify({
        content
      })
    })
      .then(res => res.json())
      .then(data => {
        let newArr = [...this.state.posts];
        newArr = newArr.map(post => {
          if (post.id === id) {
            return data;
          } else {
            return post;
          }
        });
        this.setState({ posts: newArr });
      });
  };
}

export default withRouter(App);
