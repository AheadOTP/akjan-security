import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import '../../styles/BsThumbnail.css';

function BsThumbnail() {
  return (
    <Grid className="BsGrid">
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
  );
}

export { BsThumbnail };
