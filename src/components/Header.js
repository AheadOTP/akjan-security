import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      isSticky: false
    };
    this.toggleMobile = this.toggleMobile.bind(this);
    this.hideBar = this.hideBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  hideBar() {
    const { isSticky } = this.state;
    // window.scrollY > this.prev
    //   ? !isSticky && this.setState({ isSticky: true })
    //   : isSticky && this.setState({ isSticky: false });

    if (window.scrollY > this.prev) {
      if (!isSticky) {
        this.setState({ isSticky: true });
        this.props.toggleClassPadding;
      }
    } else if (this.state.mobile) {
      console.log('hello');
    } else {
      this.setState({ isSticky: false });
    }

    this.prev = window.scrollY;
  }

  toggleMobile() {
    this.setState({ mobile: !this.state.mobile });
  }
  render() {
    const classNameNav = this.state.mobile ? 'topnav responsive' : 'topnav';
    const classSticky = this.state.isSticky ? ' sticky' : '';

    return (
      <div className={classNameNav + classSticky} id="myTopnav">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <a className="icon" onClick={this.toggleMobile}>
          &#9776;
        </a>
      </div>
    );
  }
}

export default Header;
