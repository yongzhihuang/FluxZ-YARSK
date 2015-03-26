var React = require('react/addons');
var AuthStore = require('../../stores/AuthStore');
var AuthActions = require('../../actions/AuthActions');

var SampleAuth = React.createClass({
    
    getInitialState: function() {
        return {
            statusMessage: null
        };
    },

    componentDidMount: function() {
        AuthStore.addSigninSuccessListener(this._onSigninSuccess);
        AuthStore.addSigninFailureListener(this._onSigninFailure);
    },

    componentWillUnmount: function() {
        AuthStore.removeSigninSuccessListener(this._onSigninSuccess);
        AuthStore.removeSigninFailureListener(this._onSigninFailure);
    },

    _onSigninSuccess: function() {
        //React router go to an auth page
        this.setState({
            statusMessage: 'Sign in success! Redirecting you'
        });
    },

    _onSigninFailure: function() {
        //React router go to an auth page
        this.setState({
            statusMessage: 'Sign in Failed, please try again'
        });
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var username = this.refs.username.getDOMNode().value.trim();
        var password = this.refs.password.getDOMNode().value.trim();

        AuthActions.signin({
            'username': username,
            'password': password
        });
    },


    render: function() {
       
        return (
            <div className="col-lg-6 col-xs-12 col-md-6">
                 <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                            { this.state.statusMessage ? <p className="alert alert-info">{this.state.statusMessage}</p> : null }
                             <section>
                                <span className="label label-success">Hint: test:test</span>
                                <div className="form-group">
                                    <label htmlFor="username" className="col-sm-4 control-label">Username:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="username" name="username" ref="username" />
                                    </div>

                                    <label htmlFor="password" className="col-sm-4 control-label">Password:</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="password" name="password" ref="password" />
                                    </div>
                               </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <button type="submit" className="btn btn-default pull-right">Sign In</button>
                                    </div>
                                </div>
                             </section>
                </form>
            </div>
        )
    }
});

module.exports = SampleAuth; 
