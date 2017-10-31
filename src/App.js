import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import BsCarousel from './components/BsCarousel';
import BsNavbar from './components/BsNavbar';
import BsThumbnail from './components/BsThumbnail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BsNavbar />
        <BsCarousel />
        <BsThumbnail />
      </div>
    );
  }
}

export default App;
