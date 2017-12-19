import React, { Component } from 'react';
import { BsCarousel, Service } from './homeComponents';
import information from '../information';
import '../styles/Header.css';

class Home extends Component {
  render() {
    const listOfServices = information.map((item, index) =>
      <Service key={index} header={item.header} text={item.desc} imgUrl={item.imgUrl} />
    );

    return (
      <div className="content">
        <BsCarousel />
        {listOfServices}
      </div>
    );
  }
}

export default Home;
