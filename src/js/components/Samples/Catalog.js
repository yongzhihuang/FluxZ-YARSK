var React = require('react/addons'), 
    Checkout = require('./Checkout');

var AppActions = require('../../actions/AppActions');

var Catalog = React.createClass({

    onSelectItem: function(index) {

        var item = this.props.items[index];

        //Pass to flux action handler
        AppActions.sampleAction(item);

        this.setState({
          selectedItems: this.state.selectedItems.concat(item)
        });
    },

    getInitialState: function() {
        return {
            selectedItems: [] 
        };
    },

    getDefaultProps: function() {
        return {
            items: [{ title: 'Bread' }, { title: 'Milk' }, { title: 'Cheese' }]  
        };
    },

    render: function() {
        var listItems = this.props.items.map(function(item, i) {
            return <li className="list-group-item" key={"item" + i}>{item.title} <div className="btn btn-default" onClick={this.onSelectItem.bind(null, i)}>+</div></li>
        }.bind(this));

        return (
            <div>
                <h2>Flux Component</h2>
                <p>This is a sample shopping cart example inplemented in basic Flux pattern. Check out console as you click [+] sign to see what the data looks like when sending through the dispatcher and to the store.  Read more about flux here: <a href="https://facebook.github.io/flux/docs/overview.html#content">https://facebook.github.io/flux/docs/overview.html#content</a></p>

                <div className="col-lg-6 col-xs-12 col-md-6">
                    <h3>Item Catalog</h3>
                    <ul className="list-group">{listItems}</ul>
                </div>

                    <Checkout items={this.state.selectedItems} />
            </div>
        );
    }
});

module.exports = Catalog;  
