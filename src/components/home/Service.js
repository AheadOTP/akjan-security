import React from 'react';
import '../../styles/Service.css';

function Service(props) {
  return (
    <div className="container">
      <h2>{props.header}</h2>
      <p>{props.text}</p>
      <img alt="" src={props.imgUrl} />
    </div>
  );
}

export { Service };
