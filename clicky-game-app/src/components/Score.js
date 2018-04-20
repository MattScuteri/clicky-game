import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Score extends Component {
	render() {

		const ScoreBar = () => (
			<AppBar title='Score' />

		)
		return (
			<ScoreBar />
		)
	}
}

export default Score;