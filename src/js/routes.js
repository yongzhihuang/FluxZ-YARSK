var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

//App specific routes
var NotFound = require('./components/NotFound');

module.exports = (
	<Route name="app" path="/" handler={require('./components/AppRoot')}>
		<DefaultRoute handler={require('./components/Overview')} />
		<Route name="Overview" path="overview" handler={require('./components/Overview')} />
		<Route name="Components" path="components" handler={require('./components/Samples/pages/Components')} />
		<Route name="Flux" path="flux" handler={require('./components/Samples/pages/Flux')} />
		<Route name="Resources" path="resources" handler={require('./components/Samples/pages/Resources')} />
		<NotFoundRoute handler={NotFound}/>
	</Route>
);

