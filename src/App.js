import React, { Component } from 'react';
import BsNavbar from './components/BsNavbar';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BsNavbar />
        <Main />
      </div>
    );
  }
}

export default App;
