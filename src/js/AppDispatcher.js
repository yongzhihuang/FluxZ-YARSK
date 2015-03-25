var Dispatcher = require('flux').Dispatcher;
var PayloadSources = require('./Constants').PayloadSources;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {
    handleServerAction: function(action) {
        console.log('server action', action);
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction:function (action) {
        console.log('view action', action);
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});


module.exports = AppDispatcher;
