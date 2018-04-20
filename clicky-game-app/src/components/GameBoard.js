import React, { Component } from 'react';

const displayImage = (props) => {
	return (
		<div
			className='image-card'
			key={props.id}
			id={props.id}
			style={{backgroundImage: `url(./assets/${props.image}')`}}
		/>
	)
}

export default displayImage;