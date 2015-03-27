import alt from '../altApplication';
import CartActions from '../actions/CartActions';
import _ from 'lodash';

class CartStore {
    constructor() {
        this.selectedItems = [];
        this.items = [];
        this.bindAction(CartActions.addToCart, this.onAddToCart);
        this.bindAction(CartActions.removeFromCart, this.onRemoveFromCart);
        this.bindAction(CartActions.clearCart, this.onClearCart);
    }

    onAddToCart(item) {
        console.log('Store receives request to push item into items array', item);
        this.items.push(item);
    }

    onRemoveFromCart(item) {
        console.log('Store receives request to remove item from items array', item);
        let itemIndex = _.indexOf(this.items, item);
        //Check if item we're deleting actually exist in cartItems
        if (itemIndex !== -1) {
            this.items = _.without(this.items, item);
        }
    }

    onClearCart() {
        console.log('Store receives request to empty the items array');
        this.items = [];
    }
}

module.exports = alt.createStore(CartStore);
