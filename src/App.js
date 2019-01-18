import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ModsContainer from "./containers.js/ModsContainer";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ModsContainer />
      </div>
    );
  }
}

export default App;
