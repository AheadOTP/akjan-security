import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import BsCarousel from './components/BsCarousel';
import BsNavbar from './components/BsNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BsNavbar />
        <BsCarousel />
      </div>
    );
  }
}

export default App;
