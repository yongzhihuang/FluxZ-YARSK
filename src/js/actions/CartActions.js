import alt from '../altApplication';

class CartActions {
    addToCart(item) {
        console.log('Dispatching addToCart event to store with data: ', item);
        this.dispatch(item);
    }

    removeFromCart(item) {
        console.log('Dispatching removeFromCart event to store with data: ', item);
        this.dispatch(item);
    }

    clearCart() {
        console.log('Dispatching clearCart event to store');
        this.dispatch();
    }
}

module.exports = alt.createActions(CartActions);
