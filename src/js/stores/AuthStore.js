var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;
var AuthActions = require('../actions/AuthActions');

var APIConfig = require('../config/APIConfig');

var _ = require('lodash');
var superagent = require('superagent');
var EventEmitter = require('events').EventEmitter;

var SIGNIN_SUCCESS_EVENT = 'signinSuccess';
var SIGNIN_FAILURE_EVENT = 'signinFailure';


function _signin(data) {
    superagent
        .post(APIConfig.API_BASE + '/signin')
        .send(data)
        .set('Accept', 'application/json')
        .end(function(res) {
            //Fake API response
            if (data.username === 'test' && data.password === 'test') {
                AuthActions.signinSuccess({});
            } else {
                AuthActions.signinFailed({});
            }

            //Fake failure response
            //AuthActions.signinFailed({});

            //Use below for real production auth process
            // if (res.ok) {
            //     AuthActions.signinSuccess({});
            // } else {
            //     AuthActions.signinFailed({});
            // }
        });
}

var AuthStore = _.extend(EventEmitter.prototype, {
    emitSigninSuccess: function(){
        this.emit(SIGNIN_SUCCESS_EVENT);
    },

    addSigninSuccessListener: function(callback){
        this.on(SIGNIN_SUCCESS_EVENT, callback);
    },

    removeSigninSuccessListener: function(callback){
        this.removeListener(SIGNIN_SUCCESS_EVENT, callback);
    },

    emitSigninFailure: function(){
        this.emit(SIGNIN_FAILURE_EVENT);
    },

    addSigninFailureListener: function(callback){
        this.on(SIGNIN_FAILURE_EVENT, callback);
    },

    removeSigninFailureListener: function(callback){
        this.removeListener(SIGNIN_FAILURE_EVENT, callback);
    },


    dispatcherIndex:AppDispatcher.register(function(payload){
        // this is our action from handleViewAction
        var action = payload.action;
        console.log('AuthStore: Payload received', payload);
        switch(action.type){
            case ActionTypes.AUTH_SIGNIN:
                _signin(action.data);
            break;

            case ActionTypes.AUTH_SIGNIN_SUCCESS:
                AuthStore.emitSigninSuccess();
            break;

            case ActionTypes.AUTH_SIGNIN_FAILED:
                AuthStore.emitSigninFailure();
            break;

            default:
                return true;
        }

        return true;
    })

});

module.exports = AuthStore;
    
