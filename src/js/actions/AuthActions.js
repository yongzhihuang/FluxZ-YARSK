import alt from '../altApplication';
import superagent from 'superagent';

class AuthActions {
    signin(data) {
        console.log('Dispatching signIn event to store with data: ', data);
        superagent
        .post('https://myAPIENDPOINT.com/api/login')
        .send(data)
        .set('Accept', 'application/json')
        .end((err, response) => {
	//Fake response
	if (data.username === 'test' && data.password === 'test') {
		this.actions.signinSuccess(response);
	} else {
		this.actions.signinFailure(response);
	}


	//Use below for real world
	// if (err) {
            // 	this.actions.signinFailure(err);
	// }

            // this.actions.signinSuccess(response.body)
        });

        this.dispatch();
    }

    signinSuccess(data) {
        console.log('Dispatching signinSuccess event to store with data: ', data);
        this.dispatch(data);
    }

    signinFailure(data) {
        console.log('Dispatching signinFailed event to store with data: ', data);
        this.dispatch(data);
    }
}

module.exports = alt.createActions(AuthActions);
