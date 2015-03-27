import xhr from '../libs/xhr';
import { API } from '../Constants';
import { ActionTypes } from '../Constants';
import ServerActions from '../actions/ServerActions';

var ApiUtils = {
    loadContacts() {
        xhr.getJSON(API + '/contacts', (err, res) => {
            ServerActions.loadedContacts(res.contacts);
        });
    },

    deleteContact(id) {
        xhr.deleteJSON(API + '/contacts/' + id, () => {
            ServerActions.deleteContact(id);
        });
    }
};

module.exports = ApiUtils;

