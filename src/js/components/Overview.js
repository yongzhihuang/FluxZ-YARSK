var React = require('react/addons');

import SampleIndex from './Samples/SampleIndex';

var Overview = React.createClass({

    getDefaultProps: function() {
        return {
            foo: 'bar'
        }
    },
    
    render: function () {
        return (
                <div className="col-lg-12 col-xs-12 col-md-12">
                    <SampleIndex />
                </div>
        );
    }

});

module.exports = Overview;
