import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../../styles/BsJumbotron.css';

function BsJumbotron() {
  return (
    <Jumbotron className="container">
      <h1>Hello, world!</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
  );
}

export { BsJumbotron };
