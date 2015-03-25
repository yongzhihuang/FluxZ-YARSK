import React from 'react';
import Notification from 'react-notification';


var SampleNotification = React.createClass({

    handleShow() {
        console.log('Notification hidden:', false);
        this.refs.notification.show();
    },

    handleHide() {
        console.log('Notification hidden:', true);
        this.refs.notification.hide();
    },

    handleNotificationActionClick() {
        console.log('Notification action clicked:', true);
    },

    getNotificationStyles() {

        var bar = {
            background: '#263238'
        };

        var action = {
            color: '#FFCCBC'
        };

        return { bar, action };

    },

    getInitialState() {
        return {
            message: 'Todo added',
            action: 'Undo'
        };
    },

    render() {
        return (
            <div>
                <h2>React Notification</h2>
                <p>This is a small React Component that displays a closable notification to the user</p>
                <div className="well well-sm">/components/Samples/SampleNotification.js</div>

                <div className="btn-group">
                    <div className="btn btn-primary" onClick={this.handleShow}>Show</div>
                    <div className="btn btn-danger"onClick={this.handleHide}>Hide</div>
                </div>

                <Notification ref="notification" 
                                    message={this.state.message} 
                                    action={this.state.action} 
                                    styles={this.getNotificationStyles()}
                                    onClick={this.handleNotificationActionClick}/>
            </div>
        );
    }

});


module.exports = SampleNotification;
