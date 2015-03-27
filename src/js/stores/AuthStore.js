import alt from '../altApplication';
import AuthActions from '../actions/AuthActions';

class AuthStore {
    constructor() {
        this.statusMessage = null;
        this.bindAction(AuthActions.signinSuccess, this.onSigninSuccess);
        this.bindAction(AuthActions.signinFailure, this.onSigninFailure);
    }

    onSigninSuccess() {
        this.statusMessage = 'Sign in success! Redirecting you';
    }

    onSigninFailure(repos) {
        this.statusMessage = 'Sign in Failed, please try again';
    }
}

module.exports = alt.createStore(AuthStore);
