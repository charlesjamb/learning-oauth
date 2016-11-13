const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const App = require('./components/App');

const routes = (
	<Router history={ReactRouter.browserHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>
);

ReactDOM.render(routes, document.getElementById('app'));