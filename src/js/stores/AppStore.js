import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import _ from 'lodash';
import { EventEmitter } from 'events';

var CHANGE_EVENT = "change";

var _cartItems = [];

function _addToCart(item) {
    console.log('AppStore: Adding item', item.title);
    _cartItems.push(item.title);
}

function _removeFromCart(item) {
    console.log('AppStore: Removing from cart', item);
    let itemIndex = _.indexOf(_cartItems, item);
    //Check if item we're deleting actually exist in cartItems
    if (itemIndex !== -1) {
        _cartItems = _.without(_cartItems, item);
    }
}

function _clearCart() {
    _cartItems = [];
}

var AppStore = _.extend(EventEmitter.prototype, {
    emitChange(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCart() {
        //console.log('AppStore: Items in _cartItems', _cartItems);
        return _cartItems;
    },

    dispatcherIndex:AppDispatcher.register((payload) => {
        // this is our action from handleViewAction
        let action = payload.action;
        console.log('AppStore: Payload received', payload);
        switch(action.type){
            case ActionTypes.ADD_TO_CART:
                _addToCart(payload.action.item);
            break;

            case ActionTypes.REMOVE_FROM_CART:
                _removeFromCart(payload.action.item);
            break;

            case ActionTypes.CLEAR_CART:
                _clearCart();
            break;
        }

        AppStore.emitChange();

        return true;
    })

});

module.exports = AppStore;
    
