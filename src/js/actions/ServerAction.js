import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

var AppActions = {
    loadedContactFromServer(contacts) {
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
