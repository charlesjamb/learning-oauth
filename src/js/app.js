import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';

import App from './components/App';
import User from './components/User';
import NoMatch from './components/NoMatch';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="user" component={User}/>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));