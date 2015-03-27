import React from 'react';
import Catalog from './Catalog';
import SampleAuth from './SampleAuth';
import SampleREST from './SampleREST';

var FluxPage = React.createClass({
    render() {
        return (
            <div className="col-lg-12 col-xs-12 col-md-12">
                <h2>Flux (Alt) Components</h2>
                <img src="http://i.imgur.com/82lDRHL.png" />

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

                <h2>Examples</h2>
                <p>Here are some examples using the flux concept. They're implemented in Alt, be sure to open up console to see logging information to better understand the flow.</p>
                <hr />

                <h3>Shopping Cart</h3>
                <div className="well well-sm">/components/Samples/pages/FluxPage/SampleCart.js</div>
                <Catalog />
                <hr />

                <h3>Login</h3>
                <p>Auth pattern using Flux pattern. Hint: (test:test)</p>
                <div className="well well-sm">/components/Samples/pages/FluxPage/SampleAuth.js</div>
                <SampleAuth />

                <h3>REST</h3>
                <p>REST demonstration that fetches repos from a Github user </p>
                <div className="well well-sm">/components/Samples/pages/FluxPage/SampleREST.js</div>
                <SampleREST />

            </div>
        );
    }
});

module.exports = FluxPage;
