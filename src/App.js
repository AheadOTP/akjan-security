import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      mobile: false
    };

    this.togglePadding = this.togglePadding.bind(this);
    this.toggleMobile = this.toggleMobile.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.togglePadding);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.togglePadding);
  }

  togglePadding() {
    const { addClass } = this.state;
    if (window.scrollY > this.prev) {
      if (!addClass) {
        this.setState({ addClass: true });
      }
    } else if (!this.state.mobile) {
      this.setState({ addClass: false });
    }

    this.prev = window.scrollY;
  }

  toggleMobile() {
    this.setState({ mobile: !this.state.mobile });
  }

  render() {
    const classNameNav = this.state.mobile ? 'topnav responsive' : 'topnav';
    const classSticky = this.state.addClass ? ' sticky' : '';
    const padClassName = this.state.addClass ? 'addPadding' : '';

    return (
      <div>
        <Header
          className={classNameNav + classSticky}
          toggleMobile={this.toggleMobile}
        />
        <Main className={padClassName} />
      </div>
    );
  }
}

export default App;
