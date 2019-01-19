import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    console.log("navbar", this.props.isUserLoggedIn);
    return (
      <React.Fragment>
        {this.props.isUserLoggedIn ? (
          <div className="ui menu">
            <Link to={"/mod/1"} class="item">
              Mod 1
            </Link>
            <Link to={"/mod/2"} class="item">
              Mod 2
            </Link>
            <Link to={"/mod/3"} class="item">
              Mod 3
            </Link>
            <Link to={"/mod/4"} class="item">
              Mod 4
            </Link>
            <Link to={"/mod/5"} class="item">
              Mod 5
            </Link>
            <Link to={"/editProfile"} class="item">
              Edit Profile
            </Link>
          </div>
        ) : (
          <div className="ui menu">
            <Link to={"/login"} class="item">
              Login
            </Link>
            <Link to={"/signup"} class="item">
              SignUp
            </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NavBar;
