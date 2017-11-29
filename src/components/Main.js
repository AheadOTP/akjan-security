import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import '../styles/Main.css';

class Main extends Component {
  render() {
    return (
      <main className={this.props.className} >
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
