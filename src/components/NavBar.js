import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="ui menu">
        <React.Fragment>
            <Link to={"/mod/1"} className="item">
              Mod 1
            </Link>
            <Link to={"/mod/2"} className="item">
              Mod 2
            </Link>
            <Link to={"/mod/3"} className="item">
              Mod 3
            </Link>
            <Link to={"/mod/4"} className="item">
              Mod 4
            </Link>
            <Link to={"/mod/5"} className="item">
              Mod 5
            </Link>
        </React.Fragment>
        {this.props.isUserLoggedIn ? (
            <span className="ui menu navright">
            <Link to={"/editProfile"} className="item">
              Edit Profile
            </Link>
            <Link to={"/"} className="item">
              Logout
            </Link>
            </span>
        ) : (
          <span className="ui menu navright">
            <Link to={"/login"} className="item">
              Login
            </Link>
            <Link to={"/signup"} className="item">
              SignUp
            </Link>
          </span>
        )}
      </div>
    );
  }
}

export default NavBar;
