import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModsContainer from './components/ModsContainer';
import NavBar from "./components/NavBar"
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <MainPage />
      </div>
    );
  }
}

export default App;
