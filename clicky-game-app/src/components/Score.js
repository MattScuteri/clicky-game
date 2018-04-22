import React, { Component } from 'react';

class Score extends Component {
	render() {

		const ScoreBar = () => (
			<div>
				<h4>Your score: </h4>
				<h4>Top score: </h4>
			</div>
		)

		return (
			<ScoreBar />
		)
	}
}

export default Score;