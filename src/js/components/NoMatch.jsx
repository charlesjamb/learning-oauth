import React, { Component } from 'react';
import { Link } from 'react-router';

class NoMatch extends Component {
	render() {
		return (
			<div>
				<p>you seem lost ...</p>
				<Link to='/'>Go back pls</Link>
			</div>
		);
	}
}

export default NoMatch;