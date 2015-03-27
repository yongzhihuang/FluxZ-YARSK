import React from 'react/addons';
import Router from 'react-router';
import { Link } from 'react-router';

var TopNav = React.createClass({
	propTypes: {
		menuItems: React.PropTypes.array
	},

	render() {

		var Menu = this.props.AppOptions.menuItems.map((menuItem) => {
			var menuUrl = '/' + menuItem.toLowerCase().replace(/\s/ig, '');
			return <li><Link to={menuUrl}>{menuItem}</Link></li>
		});

		return (
			<nav className="navbar navbar-default navbar-fixed-top tw-nav">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">{this.props.AppOptions.siteName}</a>
			        </div>
			        <div id="navbar" className="collapse navbar-collapse">
			          <ul className="nav navbar-nav">
			            	{Menu}
			          </ul>
			        </div>
			</nav>
		);
	}

});

module.exports = TopNav;
