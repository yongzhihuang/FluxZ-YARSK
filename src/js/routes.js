import React from 'react/addons';
import Router from 'react-router';
import { Route, NotFoundRoute, DefaultRoute } from 'react-router';

//App specific routes
import NotFound from './components/NotFound';
import AppRoot from './components/AppRoot';
import Overview from './components/Overview';
import ComponentsPage from './components/Samples/pages/ComponentsPage/ComponentsPage';
import FluxPage from './components/Samples/pages/FluxPage/FluxPage';
import ResourcesPage from './components/Samples/pages/ResourcesPage/ResourcesPage';

module.exports = (
    <Route name="app" path="/" handler={AppRoot}>
        <DefaultRoute handler={require('./components/Overview')} />
        <Route name="Overview" path="overview" handler={Overview} />
        <Route name="Components" path="components" handler={ComponentsPage} />
        <Route name="Flux" path="flux" handler={FluxPage} />
        <Route name="Resources" path="resources" handler={ResourcesPage} />
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

