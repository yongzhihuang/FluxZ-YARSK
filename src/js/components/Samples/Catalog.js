var React = require('react/addons'), 
    Checkout = require('./Checkout');

var AppActions = require('../../actions/AppActions');

var Catalog = React.createClass({

    getInitialState: function() {
        return {
            selectedItems: [] 
        };
    },

    getDefaultProps: function() {
        return {
            items: [{ title: 'Bread' }, { title: 'Milk' }, { title: 'Cheese' }]  
        };
    },

    onAddItem: function(index) {

        var item = this.props.items[index];

        //Pass to flux action handler
        AppActions.addToCart(item);

        this.setState({
          selectedItems: this.state.selectedItems.concat(item)
        });
    },

    render: function() {
        var listItems = this.props.items.map(function(item, i) {
            return (
                <li className="list-group-item" key={"item" + i}>
                    {item.title} <div className="listItemAction listItemAction--add pull-right" onClick={this.onAddItem.bind(null, i)}>+</div>
                </li>
             )
        }.bind(this));

        return (
            <div className="col-lg-12 col-xs-12 col-md-12">
                <div className="col-lg-6 col-xs-12 col-md-6">
                    <h3>Item Catalog</h3>
                    <ul className="list-group">{listItems}</ul>
                </div>

                <div className="col-lg-6 col-xs-12 col-md-6">
                    <Checkout items={this.state.selectedItems} />
                </div> 
            </div>
        );
    }
});

module.exports = Catalog;  
