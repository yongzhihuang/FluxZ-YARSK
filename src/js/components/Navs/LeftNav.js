import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

var LeftNav = React.createClass({

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar tw-sidebar">
                <ul className="nav nav-sidebar">
                        <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
                	<li><a href="#">Nav item</a></li>
                	<li><a href="#">Nav item</a></li>
                	<li><a href="#">Nav item</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                	<li><a href="">Nav item</a></li>
                	<li><a href="">Nav item again</a></li>
                	<li><a href="">One more nav</a></li>
                	<li><a href="">Another nav item</a></li>
                	<li><a href="">More navigation</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                	<li><a href="">Nav item again</a></li>
                	<li><a href="">One more nav</a></li>
                	<li><a href="">Another nav item</a></li>
                </ul>
            </div>
        );
    }

});

module.exports = LeftNav;
