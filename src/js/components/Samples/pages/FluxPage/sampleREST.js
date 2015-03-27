import React from 'react/addons';
import RESTActions from '../../../../actions/RESTActions';
import RESTStore from '../../../../stores/RESTStore';

//This is a sample component that fetches repos from a Github user
//The name of store and action should be descriptive, example: CartStore, LoginAction, but will be using the name RESTStore/AltAction here for demonstration purposes

var RepoItem = React.createClass({
    render() {
        // console.log(this.props.repo);
        return (
            <div>
                {this.props.repo.name}
            </div>
        )
    }
});


var SampleREST = React.createClass({

    getInitialState() {
        return RESTStore.getState();
    },

    componentWillMount() {
        RESTStore.listen(this._onChange);
    },

    componentWillUnmount() {
        RESTStore.unlisten(this._onChange);
    },

    _onChange() {
        console.log('data change detected, states: ', RESTStore.getState());
        this.setState(RESTStore.getState());
    },

    search(e) {
        e.preventDefault();
        var query = this.refs.gitUsername.getDOMNode().value;

        //cleanse query, check for emptiness, etc...
        if (query !== '') {
            RESTActions.search(query);
        }
    },

    renderResult() {
        return this.state.repos.map((repo, index) => {
            return (
                <li key={'repo-' + index}><RepoItem repo={repo} /></li>
            )
        })
    },

    renderLoading() {
        if (this.state.loading) {
            return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <span className="sr-only">100% Complete</span>
                </div>
            </div>
            )
        } else {
            return ''
        }
    },

    render () {
        return (
            <div className="col-lg-12 col-xs-12 col-md-12">
                <form onSubmit={this.search}>
                    <div className="input-field">
                        <input type="text" className="form-control" placeholder="Github usrename"  ref="gitUsername" />
                        <button className="btn btn-default">Search</button>
                    </div>
                </form>

                { this.renderLoading() }

                <div className="col-lg-12 col-xs-12 col-md-12">
                    <ol className="list-group">{ this.renderResult() }</ol>
                </div>
            </div>
        );

    }
});

module.exports = SampleREST;
