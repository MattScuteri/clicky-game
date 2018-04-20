import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Score extends Component {
	render() {

		const scoreBar = () => (
			<AppBar title='Score' />

		)
		return (
			<scoreBar />
		)
	}
}

export default Score;