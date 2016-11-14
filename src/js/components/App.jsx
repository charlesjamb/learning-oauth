import React, { Component } from 'react';
import { Link } from 'react-router';

import Login from './Login'

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
            <section>
                <Login/>
            </section>
    		<main>
    			{this.props.children}
    		</main>
    	</div>
    );
  }
};

export default App;