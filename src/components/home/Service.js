import React from 'react';
import '../../styles/Service.css';

function Service(props) {
  return (
    <div className="container">
      <div className="serviceDescription serviceElement">
        <h2>{props.header}</h2>
        <p>{props.text}</p>
      </div>
      <img className="serviceImage serviceElement" alt="" src={props.imgUrl} />
    </div>
  );
}

export { Service };
