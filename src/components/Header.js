import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className={this.props.className} id="myTopnav">
        <Link to="/" className="active">
          Akjan Security
        </Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <a className="icon" onClick={this.props.toggleMobile}>
          &#9776;
        </a>
      </div>
    );
  }
}

export default Header;
