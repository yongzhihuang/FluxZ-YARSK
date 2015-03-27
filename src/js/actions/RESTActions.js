import alt from '../altApplication';
import superagent from 'superagent';

class RESTActions {
	search(query) {
		superagent.get(`https://api.github.com/users/${query}/repos`)
		.send()
		.end((err, response) => {
			this.actions.searchSuccess(response.body)
		});

		this.dispatch();
	}

	searchSuccess(repos) {
		console.log('Search Success, items returned:', repos);
		this.dispatch(repos);
	}

	repoFetched(repo) {
		this.dispatch(repo);
	}
}

module.exports = alt.createActions(RESTActions);
