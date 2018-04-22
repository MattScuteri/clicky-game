import React from 'react';
import './GameBoard.css';

const DisplayImage = (props) => (
  <div className="image">
    <div className="img-container">
      	<img className="emoji" onClick={() => props.updateState(props.id)} alt='alt' src={`${props.image}`} />
    </div>
  </div>
);

export default DisplayImage;