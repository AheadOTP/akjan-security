import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const isMobile = window.innerWidth <= 735;

    if (!isMobile) {
      return (
        <div className={'topnav ' + this.props.className}>
          <Link to="/" className="logo"><img alt="" src={require('../images/big_logo_2.png')} /></Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/about">О нас</Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className={'topnav ' + this.props.className}>
            <Link to="/">
              Akjan Security
            </Link>
            <a className="icon" onClick={this.props.toggleMobileMenu}>
              &#9776;
            </a>
          </div>
          <div className={'links ' + this.props.expanded}>
            <hr />
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
