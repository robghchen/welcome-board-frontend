import React, { Component } from 'react';
import './App.css';
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
