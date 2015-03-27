import alt from '../altApplication';
import superagent from 'superagent';

class RESTActions {
    search(query) {
        superagent.get(`https://api.github.com/users/${query}/repos`)
        .send()
        .end((err, response) => {
        	this.actions.searchSuccess(response.body);
        });

        this.dispatch();
    }

    searchSuccess(repos) {
        console.log('Search Success, items returned:', repos);
        if (repos.length) {
        	this.dispatch(repos);
        } else {
        	//User has no public repo
        	//Handle case here
        	console.log('User has no public Repo');
        }
    }
}

module.exports = alt.createActions(RESTActions);
