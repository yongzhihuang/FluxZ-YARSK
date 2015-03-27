import React from 'react/addons';
import AuthStore from '../../../../stores/AuthStore';
import AuthActions from '../../../../actions/AuthActions';

var SampleAuth = React.createClass({
    
    getInitialState() {
        return AuthStore.getState();
    },

    componentWillMount() {
        AuthStore.listen(this._onChange);
    },

    componentWillUnmount() {
        AuthStore.unlisten(this._onChange);
    },

    _onChange() {
        console.log('data change detected, states: ', AuthStore.getState());
        this.setState(AuthStore.getState());
    },

    handleSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.getDOMNode().value.trim();
        let password = this.refs.password.getDOMNode().value.trim();

        AuthActions.signin({
            'username': username,
            'password': password
        });
    },


    render() {
       
        return (
            <div className="col-lg-12 col-xs-12 col-md-12">
                 <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                            { this.state.statusMessage ? <p className="alert alert-info">{this.state.statusMessage}</p> : null }
                             <section>
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
