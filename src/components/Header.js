import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const isMobile = window.innerWidth <= 735;

    if (!isMobile) {
      return (
        <div className={'topnav ' + this.props.className}>
          <Link to="/" className="active">
            Akjan Security
          </Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/about">О нас</Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className={'topnav ' + this.props.className}>
            <Link to="/" className="active">
              Akjan Security
            </Link>
            <a className="icon" onClick={this.props.toggleMobileMenu}>
              &#9776;
            </a>
          </div>
          <div className={'links ' + this.props.expanded}>
            <Link to="/news">News</Link>
            <Link to="/contact">Контакты</Link>
            <Link to="/about">О нас</Link>
          </div>
        </div>
      );
    }
  }
}

export default Header;
