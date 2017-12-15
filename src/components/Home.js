import React, { Component } from 'react';
import { BsCarousel } from './home';
import '../styles/Header.css';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <BsCarousel />
      </div>
    );
  }
}

export default Home;
