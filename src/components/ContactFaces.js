import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/ContactFaces.css';

function ContactFaces() {
  return (
    <div className="contactFaces">
      <div className="contactFace">
        <img alt="" src="https://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg" />
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </div>
      <div className="contactFace">
        <img alt="" src="http://static3.businessinsider.com/image/539edf3aeab8ead5275f9f71-480/vladimir-putin.jpg" />
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </div>
    </div>
  );
}

export { ContactFaces };
