import React from 'react/addons';
import CartStore from '../../../../stores/CartStore';
import CartActions from '../../../../actions/CartActions';

var Checkout = React.createClass({
    getInitialState() {
        return CartStore.getState();
    },

    componentWillMount() {
        CartStore.listen(this._onChange);
    },

    componentWillUnmount() {
        CartStore.unlisten(this._onChange);
    },

    _onChange() {
        console.log('Detected item store change, state is: ', CartStore.getState());
        this.setState(CartStore.getState());
    },

    onRemoveItem(index) {
        let item = this.state.items[index];

        //Pass to flux action handler
        console.log('Triggers removeFromCart action');
        CartActions.removeFromCart(item);
    },

    clearCart() {
        CartActions.clearCart();
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
