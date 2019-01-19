import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    console.log("navbar", this.props.isUserLoggedIn);
    return (
      <div className="ui menu">
        <React.Fragment>
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
        </React.Fragment>
        {this.props.isUserLoggedIn ? (
            <span className="ui menu navright">
            <Link to={"/editProfile"} class="item">
              Edit Profile
            </Link>
            <Link to={"/"} class="item">
              Logout
            </Link>
            </span>
        ) : (
          <span className="ui menu navright">
            <Link to={"/login"} class="item">
              Login
            </Link>
            <Link to={"/signup"} class="item">
              SignUp
            </Link>
          </span>
        )}
      </div>
    );
  }
}

export default NavBar;
