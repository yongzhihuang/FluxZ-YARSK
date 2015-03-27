import React from 'react/addons';
import SampleIndex from './Samples/SampleIndex';

var Overview = React.createClass({

    getDefaultProps() {
        return {
            foo: 'bar'
        }
    },

    render() {
        return (
            <div className="col-lg-12 col-xs-12 col-md-12">
                <SampleIndex />
            </div>
        );
    }

});

module.exports = Overview;
