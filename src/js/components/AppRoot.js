import React from 'react/addons';
import Router from 'react-router';
import { RouteHandler } from 'react-router';

import AppConfig from '../config/AppConfig'
import TopNav from './Navs/TopNav'

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

    render() {
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
