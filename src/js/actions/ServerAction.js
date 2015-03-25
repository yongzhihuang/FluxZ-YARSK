var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var AppActions = {
    loadedContactFromServer: function (contacts) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.CONTACTS_LOADED,
            contacts: contacts
        });
    },
    deleteContact(id) {
        AppDispatcher.handleServerAction({
            type: ActionTypes.CONTACT_DELETED,
            id:id
        });
    }

  //etc
};

module.exports = AppActions;
