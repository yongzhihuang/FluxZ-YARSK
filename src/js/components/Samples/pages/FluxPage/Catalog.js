import React from 'react/addons';
import Checkout from './Checkout';
import AppActions from '../../../../actions/AppActions';

var Catalog = React.createClass({

    getInitialState() {
        return {
            selectedItems: [] 
        };
    },

    getDefaultProps() {
        return {
            items: [{ title: 'Bread' }, { title: 'Milk' }, { title: 'Cheese' }]  
        };
    },

    onAddItem(index) {

        let item = this.props.items[index];

        //Pass to flux action handler
        AppActions.addToCart(item);

        this.setState({
          selectedItems: this.state.selectedItems.concat(item)
        });
    },

    render() {
        let listItems = this.props.items.map((item, index) => {
            return (
                <li className="list-group-item" key={"item" + index}>
                    {item.title} 
                    <div className="listItemAction listItemAction--add pull-right" 
                        onClick={this.onAddItem.bind(this, index)}>+</div>
                </li>
             )
        });

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
