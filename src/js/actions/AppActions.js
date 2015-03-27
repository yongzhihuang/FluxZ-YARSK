import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

var AppActions = {
	addToCart(item) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.ADD_TO_CART,
			item: item
		});
	},

	removeFromCart(item) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.REMOVE_FROM_CART,
			item: item
		});
	},

	clearCart() {
		AppDispatcher.handleViewAction({
			type: ActionTypes.CLEAR_CART
		});
	}
};

module.exports = AppActions;
