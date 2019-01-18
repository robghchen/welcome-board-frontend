import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import MainPage from './components/MainPage';
import { Route, Switch } from "react-router-dom";
import ModShowPage from './components/ModShowPage';

class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <Switch>

          <Route path="/home" component={MainPage} />
          <Route path ="/mod/:id" component={ModShowPage} />
          
        </Switch>
      </div>
    );
  }
}

export default App
