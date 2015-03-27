import alt from '../altApplication';
import RESTActions from '../actions/RESTActions';

class RESTStore {
	constructor() {
		this.repos = [];
		this.loading = false;
		this.bindAction(RESTActions.search, this.onSearch);
		this.bindAction(RESTActions.searchSuccess, this.onSearchSuccess);
	}

	onSearch() {
		this.loading = true;
	}

	onSearchSuccess(repos) {
		this.loading = false;
		this.repos = repos;
	}
}

module.exports = alt.createStore(RESTStore);
