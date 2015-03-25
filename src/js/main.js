var React = require('react/addons');
window.React = React; // expose for dev tools

var Router = require('react-router');
var routes = require('./routes.js');

Router.run(routes, function(Handler) {
	React.render(<Handler/>, document.getElementById('main'));
});

$(function () {
	//Bootstrap related things go here
});
