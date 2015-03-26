var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var AuthActions = {
	signin: function(data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.AUTH_SIGNIN,
			data: data
		});
	},
	signinSuccess: function(data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.AUTH_SIGNIN_SUCCESS,
			data: data
		});
	},
	signinFailed: function(data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.AUTH_SIGNIN_FAILED,
			data: data
		});
	}
};

module.exports = AuthActions;
