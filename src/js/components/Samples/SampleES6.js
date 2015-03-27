import React from 'react/addons';
import assign from 'react/lib/Object.assign';

//Borrowed from https://github.com/gdi2290/FrontendMasters-2015-02-13-React/blob/master/excercises/3-events-and-state/app.js

var DATA = [
	{ name: 'USA', description: 'Land of the Free, Home of the brave' },
	{ name: 'China', description: 'Lots of concrete' },
	{ name: 'Russia', description: 'World Cup 2018!' },
];

var styles = {};

styles.tab = {
	display: 'inline-block',
	padding: 10,
	margin: 10,
	borderBottom: '4px solid',
	borderBottomColor: '#ccc',
	cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
	borderBottomColor: '#000'
});

styles.tabPanels = {
	padding: 10
};

var SampleES6 = React.createClass({

	getInitialState() {
		return {active: 0};
	},

	getDefaultProps() {
		return {
			countries: DATA
		}
	},

	renderTabs() {
		return this.props.countries.map((country, index) => {
			var isActiveTab = (index === this.state.active);
			return (
				<div key={country.name}
					onClick={this.changeTab.bind(this, index)}
					style={isActiveTab ? styles.activeTab : styles.tab}>

					{country.name}
				</div>
			);
		});
	},

	renderPanel() {
		var country = this.props.countries[this.state.active];

		return (
			<div>
				<p>{country.description}</p>
			</div>
		);
	},

	changeTab(index) {
		this.setState({
			active:index
		});
	},

	render () {
		return (
			<div>
				<h2>ES6 Syntaxed component</h2>
				<p>This is a sample component build with ES6 syntax </p>
				<div className="well well-sm">/components/Samples/SampleES6.js</div>
				<div style={styles.app}>
					<div style={styles.tabs}>
						{this.renderTabs()}
					</div>

					<div style={styles.tabPanels}>
						{this.renderPanel()}
					</div>
				</div>
			</div>
		);

	}
});

module.exports = SampleES6;
