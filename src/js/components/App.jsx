import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
    	<div>
    		<header>
    			<Link to="/">
    				<h1>Learning Oauth</h1>
    			</Link>
    			<hr/>
    		</header>
    		<main>
    			{this.props.children}
    		</main>
    	</div>
    );
  }
};

export default App;