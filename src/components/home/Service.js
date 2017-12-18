import React from 'react';
import '../../styles/Service.css';

function Service(props) {
  const imgUrl = props.imgUrl;
  console.log(imgUrl);
  return (
    <div className="container">
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export { Service };
