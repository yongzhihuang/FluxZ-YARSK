var AppDispatcher = require('../AppDispatcher');
var ActionTypes = require('../Constants').ActionTypes;

var AppActions = {
	sampleAction: function (item) {
		AppDispatcher.handleViewAction({
			type: ActionTypes.ADD_TO_CART,
			item: item
		});
	},
};

module.exports = AppActions;
