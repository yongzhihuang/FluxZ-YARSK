var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _cartItems = [];

function _addToCart(item) {
    console.log('Adding item', item.title);
    _cartItems.push(item.title);
    console.log('Current items in cart', _cartItems);
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
        return _cartItems;
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        // console.log('payload', payload);
        var action = payload.action; // this is our action from handleViewAction
        switch(action.actionType){
          case ActionTypes.ADD_TO_CART:
            _addToCart(payload.action.item);
            break;
        }

        AppStore.emitChange();

        return true;
    })

});

module.exports = AppStore;
