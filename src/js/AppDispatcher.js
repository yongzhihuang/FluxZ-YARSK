import { Dispatcher } from 'flux';
import { PayloadSources } from './Constants';
import assign from 'react/lib/Object.assign';

var AppDispatcher = assign(new Dispatcher(), {
    handleServerAction(action) {
        console.log('Server action received:', action);
        let payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction(action) {
        console.log('View action received', action);
        let payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});


module.exports = AppDispatcher;
