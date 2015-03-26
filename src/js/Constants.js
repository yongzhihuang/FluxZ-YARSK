var keyMirror = require('react/lib/keyMirror');

module.exports = {
    //API: 'http://localhost:3000',
    API: 'http://YOURAPIENDPOINT',

    ActionTypes: keyMirror({
        CONTACTS_LOADED: null,
        LOAD_CONTACTS: null,
        DELETE_CONTACT: null,

        ADD_TO_CART: null,
        REMOVE_FROM_CART: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })

};

