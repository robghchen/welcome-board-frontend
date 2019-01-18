import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
    <div><h3>NavBar</h3>
    {/* <ul>
      if (a user is signed in) {
        <link to={"/mod1"}>
        <li><h3>Mod 1</h3></li>
        </link>


        <link to={"/mod2"}>
        <li><h3>Mod 2</h3></li>
        </link>


        <link to={"/mod3"}>
        <li><h3>Mod 3</h3></li>
        </link>


        <link to={"/mod4"}>
        <li><h3>Mod 4</h3></li>
        </link>


        <link to={"/mod5"}>
        <li><h3>Mod 5</h3></li>
        </link>

      } else {
        
        <link to={"/loginSignUpForm"}>
        <li><h3>Login/SignUp</h3></li>
        </link>
        </ul>*/}
    </div> );
  }
}
 
export default NavBar;