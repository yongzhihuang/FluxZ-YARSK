import React from 'react';
import Catalog from '../Catalog';

export default class Flux extends React.Component {
	render() {
		return (
			<div className="col-lg-12 col-xs-12 col-md-12">
				<h2>Flux Component</h2>
				<img src="https://github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png" width="700" />
				<p>This is a sample shopping cart example inplemented in basic Flux pattern. Check out console as you click [+] sign to see what the data looks like when sending through the dispatcher and to the store.  Read more about flux here: <a href="https://facebook.github.io/flux/docs/overview.html#content">https://facebook.github.io/flux/docs/overview.html#content</a></p>
				<hr />
				<Catalog />
				<hr />

				<h2>Flux flow Tl;dr</h2>
				<div className="well well-sm">
					<ol>
						<li>Component triggers an event, calls <b>AppActions.myEventNameHere(myPayloadVariable);</b></li>
						<li><b>AppAction</b> has function to handle <b>myEventNameHere(myPayloadVariable)</b>, in it calls <b>AppDispatcher.handleViewAction</b> and passing in the action type(Which is one of the predefined AppConstants) and the payload <b>myPayloadVariable</b></li>
						<li><b>AppDispatcher</b> has defined a function <b>handleViewAction</b> that takes an action, and calls <b>this.dispatch</b> and passing the action along</li>
						<li>In <b>AppStore</b>, dispatcher registers the payload, and performs switch-case on the <b>AppConstant (event type)</b> and calls the necessary function as needed to perform the action.  Emitting an event as needed to tell the app what's going on</li>
					</ol>
				</div>
			</div>
		);	
	}
}
