import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className={this.props.className}>
          <Link to="/" className="active">
            Akjan Security
          </Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/about">О нас</Link>
          <a className="icon" onClick={this.props.toggleMobileMenu}>
            &#9776;
          </a>
      </div>
    );
  }
}

export default Header;
