import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

var AuthActions = {
	signin(data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.AUTH_SIGNIN,
			data: data
		});
	},

	signinSuccess(data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.AUTH_SIGNIN_SUCCESS,
			data: data
		});
	},
	
	signinFailed(data) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.AUTH_SIGNIN_FAILED,
			data: data
		});
	}
};

module.exports = AuthActions;
