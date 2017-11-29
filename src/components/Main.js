import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import '../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false
    };

    this.togglePadding = this.togglePadding.bind(this);
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
        this.props.toggleClassPadding;
      }
    } else {
      this.setState({ addClass: false });
    }

    this.prev = window.scrollY;
  }

  render() {
    const padClassName = this.state.addClass ? 'addPadding' : '';

    return (
      <main onScroll={this.togglePadding} className={padClassName}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contacts} />
        </Switch>
      </main>
    );
  }
}

export default Main;
