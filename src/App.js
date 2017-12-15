import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BsNavbar from './components/home/BsNavbar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      mobileMenu: false
    };

    this.togglePadding = this.togglePadding.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.togglePadding);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.togglePadding);
  }

  togglePadding() {
    const { addClass } = this.state;
    if (window.scrollY > 0) {
      if (!addClass) {
        this.setState({ addClass: true });
      }
    } else if (!this.state.mobileMenu) {
      this.setState({ addClass: false });
    }
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenu: !this.state.mobileMenu,
      addClass: true
    });
  }

  render() {
    const isMobile = window.innerWidth <= 735;
    const expanded = this.state.mobileMenu ? 'expanded' : '';
    const classSticky = this.state.addClass ? ' sticky' : '';
    let padClassName;
    if (!isMobile) {
      padClassName = this.state.addClass ? 'addPadding' : '';
    } else {
      padClassName = 'addPaddingMobile';
    }

    return (
      <div>
        <Header
          className={classSticky}
          toggleMobileMenu={this.toggleMobileMenu}
          expanded={expanded}
        />
        <Main className={padClassName} />
      </div>
    );
  }
}

export default App;
