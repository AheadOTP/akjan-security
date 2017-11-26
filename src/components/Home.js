import React, { Component } from 'react';
import { BsCarousel, BsThumbnail, BsJumbotron, ContactFaces, GoogleMap } from '../components';

class Home extends Component {
  render() {
    return (
      <div>
        <BsCarousel />
        <BsThumbnail />
        <BsJumbotron />
        <ContactFaces />
        <GoogleMap />
      </div>
    );
  }
}

export default Home;
