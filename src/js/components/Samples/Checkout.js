var React = require('react/addons');
var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions');

function cartItems() {
    return {items: AppStore.getCart()};
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

    onRemoveItem: function(index) {
        var item = this.state.items[index];

        //Pass to flux action handler
        AppActions.removeFromCart(item);

    },

    render: function() {
        var listItems = this.state.items.map(function(item, i) {
            return (
                    <li className="list-group-item" key={"selectedItem" + i}>
                        {item} <div className="listItemAction listItemAction--remove pull-right" onClick={this.onRemoveItem.bind(null, i)}>-</div>
                    </li>
             )
        }.bind(this));

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
