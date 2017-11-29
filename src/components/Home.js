import React, { Component } from 'react';
import { BsCarousel, Footer } from './home';
import '../styles/Header.css';

class Home extends Component {
  render() {
    return (
      <div className="content">
        <BsCarousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
