var React = require('react/addons');
var AppStore = require('../../stores/AppStore');

function cartItems() {
    return {items: AppStore.getCart()}
}

var Checkout = React.createClass({
    getInitialState: function() {
        return cartItems();
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(cartItems());
    },

    render: function() {
        var listItems = this.props.items.map(function(item, i) {
            return <li className="list-group-item" key={"selectedItem" + i}>{item.title}</li>
        });

        var count = listItems.length;

        return (
             <div className="col-lg-6 col-xs-12 col-md-6">
                <h3>Shopping Bag</h3>
                <ul className="list-group">
                    {listItems}
                </ul>
                Total Items: <span>{count}</span>
            </div>
        );
    }
});

module.exports = Checkout;  
