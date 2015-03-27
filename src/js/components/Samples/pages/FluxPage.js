import React from 'react';
import Catalog from '../Catalog';
import SampleAuth from '../SampleAuth';

var FluxPage = React.createClass({
	render() {
		return (
			<div className="col-lg-12 col-xs-12 col-md-12">
				<h2>Flux Component</h2>
				<img src="http://i.imgur.com/BbYCJLc.png" width="700" />

				<h2>Flux flow Tl;dr</h2>
				<div>
					<ol>
						<li>A user triggers an action on a view.</li>

						<li>The view passes this action to an App Action listener/handler (actions/AppAction.js).
						</li>

						<li>App Action calls the dispatcher with information about Action Type along with any necessary data.
						</li>

						<li>App store checks the message dispatched to it, performs actions needed with that data, then emits an event to any view listening to the event.  The view is finally updated.
						</li>
					</ol>
				</div>
				<hr />

				<p>This is a sample shopping cart example inplemented in basic Flux pattern. Check out console as you click [+] sign to see what the data looks like when sending through the dispatcher and to the store.  Read more about flux here: <a href="https://facebook.github.io/flux/docs/overview.html#content">https://facebook.github.io/flux/docs/overview.html#content</a></p>
				<Catalog />
				<hr />

				<h2>Flux Auth Pattern</h2>
				<p>This is a sample Auth process using Flux pattern.</p>
				<SampleAuth />

			</div>
		);	
	}
});

module.exports = FluxPage;
