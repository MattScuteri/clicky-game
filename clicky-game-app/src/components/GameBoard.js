import React from 'react';
import './GameBoard.css';

const DisplayImage = (props) => (
    <div className="container">
      	<img className="emoji" onClick={() => props.updateState(props.id)} alt='alt' src={props.image} />
    </div>

);

export default DisplayImage;