import React, { Component } from 'react';
import BsCarousel from './components/BsCarousel';
import BsNavbar from './components/BsNavbar';
import BsThumbnail from './components/BsThumbnail';
import BsJumbotron from './components/BsJumbotron';
import GoogleMap from './components/GoogleMap';
import ContactFaces from './components/ContactFaces';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BsNavbar />
        <BsCarousel />
        <BsThumbnail />
        <BsJumbotron />
        <ContactFaces />
        <GoogleMap />
      </div>
    );
  }
}

export default App;
