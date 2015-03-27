import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import AuthActions from '../actions/AuthActions';
import { EventEmitter } from 'events';

import APIConfig from '../config/APIConfig';

import _ from 'lodash';
import superagent from 'superagent';

var SIGNIN_SUCCESS_EVENT = 'signinSuccess';
var SIGNIN_FAILURE_EVENT = 'signinFailure';

function _signin(data) {
    superagent
        .post(APIConfig.API_BASE + '/signin')
        .send(data)
        .set('Accept', 'application/json')
        .end((res) => {
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
    emitSigninSuccess(){
        this.emit(SIGNIN_SUCCESS_EVENT);
    },

    addSigninSuccessListener(callback){
        this.on(SIGNIN_SUCCESS_EVENT, callback);
    },

    removeSigninSuccessListener(callback){
        this.removeListener(SIGNIN_SUCCESS_EVENT, callback);
    },

    emitSigninFailure(){
        this.emit(SIGNIN_FAILURE_EVENT);
    },

    addSigninFailureListener(callback){
        this.on(SIGNIN_FAILURE_EVENT, callback);
    },

    removeSigninFailureListener(callback){
        this.removeListener(SIGNIN_FAILURE_EVENT, callback);
    },


    dispatcherIndex:AppDispatcher.register((payload) => {
        // this is our action from handleViewAction
        let action = payload.action;
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
    
