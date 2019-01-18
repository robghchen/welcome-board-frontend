import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="ui menu">
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
        <Link to={"/login"} className="item">
          Login
        </Link>
        <Link to={"/signup"} className="item">
          SignUp
        </Link>
      </div>
    );
  }
}

export default NavBar;
