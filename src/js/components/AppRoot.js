var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var AppConfig = require('../config/AppConfig');
var TopNav = require('./Navs/TopNav');

var AppOptions = {
    menuItems: [
        'Overview',
        'Components',
        'Flux',
        'Resources'
    ],
    siteName: AppConfig.SITE_NAME
};

var AppRoot = React.createClass({

    render: function () {
      return (
        <div className="col-lg-12 col-xs-12 col-md-12">
            <TopNav AppOptions={AppOptions} />
            <div className="container-fluid">
                <div className="row">
                    <RouteHandler />
                </div>
            </div>
        </div>
      );
    }

});

module.exports = AppRoot;
