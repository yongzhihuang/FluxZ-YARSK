import keyMirror from 'react/lib/keyMirror';

module.exports = {
    //API: 'http://localhost:3000',
    API: 'http://YOURAPIENDPOINT',

    ActionTypes: keyMirror({
        ADD_TO_CART: null,
        REMOVE_FROM_CART: null,
        CLEAR_CART: null,

        AUTH_SIGNIN: null,
        AUTH_SIGNIN_SUCCESS: null,
        AUTH_SIGNIN_FAILED: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};

