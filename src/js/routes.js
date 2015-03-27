import React from 'react/addons';
import Router from 'react-router';
import { Route, NotFoundRoute, DefaultRoute } from 'react-router';

//App specific routes
import NotFound from './components/NotFound';

module.exports = (
	<Route name="app" path="/" handler={require('./components/AppRoot')}>
		<DefaultRoute handler={require('./components/Overview')} />
		<Route name="Overview" path="overview" handler={require('./components/Overview')} />
		<Route name="Components" path="components" handler={require('./components/Samples/pages/ComponentsPage')} />
		<Route name="Flux" path="flux" handler={require('./components/Samples/pages/FluxPage')} />
		<Route name="Resources" path="resources" handler={require('./components/Samples/pages/ResourcesPage')} />
		<NotFoundRoute handler={NotFound}/>
	</Route>
);

