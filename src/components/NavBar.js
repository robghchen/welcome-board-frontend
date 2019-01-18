import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          {this.props.isUserLoggedIn ? (
            <div>
              <Link to={"/mod1"}>
                <li>
                  <h3>Mod 1</h3>
                </li>
              </Link>

              <Link to={"/mod2"}>
                <li>
                  <h3>Mod 2</h3>
                </li>
              </Link>

              <Link to={"/mod3"}>
                <li>
                  <h3>Mod 3</h3>
                </li>
              </Link>

              <Link to={"/mod4"}>
                <li>
                  <h3>Mod 4</h3>
                </li>
              </Link>

              <Link to={"/mod5"}>
                <li>
                  <h3>Mod 5</h3>
                </li>
              </Link>
            </div>
          ) : (
            <Link to={"/LoginSignUpForm"}>
              <li>
                <h3>Login/SignUp</h3>
              </li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}

export default NavBar;
