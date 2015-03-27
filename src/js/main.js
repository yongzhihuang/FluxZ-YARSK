import React from 'react/addons';
window.React = React; // expose for dev tools

import Router from 'react-router';
import routes from './routes.js';

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('main'));
});
