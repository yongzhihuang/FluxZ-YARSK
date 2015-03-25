var xhr = require('../libs/xhr');
var API = require('../Constants').API;
var ActionTypes = require('../Constants').ActionTypes;
var ServerActions = require('../actions/ServerActions');

var ApiUtils = {
    loadContacts: function() {
        xhr.getJSON(API + '/contacts', function(err, res) {
            ServerActions.loadedContacts(res.contacts);
        });
    },

    deleteContact: function(id) {
        xhr.deleteJSON(API + '/contacts/' + id, function() {
            ServerActions.deleteContact(id);
        });
    }
};

module.exports = ApiUtils;

