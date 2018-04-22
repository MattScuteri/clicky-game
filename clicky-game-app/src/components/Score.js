import React from 'react';

const Score = props => (
	<div>
		<h4>Your score: {props.currentScore}</h4>
		<h4>Top score: {props.topScore}</h4>
	</div>
)


export default Score;