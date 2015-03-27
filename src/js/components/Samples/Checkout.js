import React from 'react/addons';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

function cartItems() {
    return {items: AppStore.getCart()};
}

var Checkout = React.createClass({
    getInitialState() {
        return cartItems();
    },

    componentWillMount() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange() {
        this.setState(cartItems());
    },

    onRemoveItem(index) {
        let item = this.state.items[index];

        //Pass to flux action handler
        AppActions.removeFromCart(item);
    },

    clearCart() {
        AppActions.clearCart();
    },

    render() {
        let listItems = this.state.items.map((item, index) => {
            return (
                    <li className="list-group-item" key={"selectedItem" + index}>
                        {item} <div className="listItemAction listItemAction--remove pull-right" onClick={this.onRemoveItem.bind(this, index)}>-</div>
                    </li>
             )
        });

        let count = listItems.length;

        return (
             <div className="col-lg-6 col-xs-12 col-md-6">
                <h3>Shopping Bag</h3>
                <div><b>Total Items:</b> <span>{count}</span></div>
                <ul className="list-group">
                    {listItems}
                </ul>
                <div className="btn btn-default" onClick={this.clearCart}>Clear</div>
            </div>
        );
    }
});

module.exports = Checkout;  
