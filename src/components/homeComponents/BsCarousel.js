import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/BsCarousel.css';

function BsCarousel() {
  return (
    <Carousel className="BsCarousel">
      <Carousel.Item>
        <img alt="900x500" src="https://www.hdwallpapers.in/walls/eve_online-wide.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="900x500" src="https://www.hdwallpapers.in/walls/eve_online-wide.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="900x500" src="https://www.hdwallpapers.in/walls/eve_online-wide.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export { BsCarousel };
