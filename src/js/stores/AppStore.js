var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _cartItems = [];

function _addToCart(item) {
    console.log('AppStore: Adding item', item.title);
    _cartItems.push(item.title);
}

function _removeFromCart(item) {
    console.log('AppStore: Removing from cart', item);
    var itemIndex = _.indexOf(_cartItems, item);
    //Check if item we're deleting actually exist in cartItems
    if (itemIndex !== -1) {
        _cartItems = _.without(_cartItems, item);
    }
}

var AppStore = _.extend(EventEmitter.prototype, {
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCart:function() {
        console.log('AppStore: Items in _cartItems', _cartItems);
        return _cartItems;
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        // this is our action from handleViewAction
        var action = payload.action;

        switch(action.type){
            case ActionTypes.ADD_TO_CART:
                _addToCart(payload.action.item);
            break;

            case ActionTypes.REMOVE_FROM_CART:
                _removeFromCart(payload.action.item);
            break;
        }

        AppStore.emitChange();

        return true;
    })

});

module.exports = AppStore;
