import React from 'react';
import {connect} from 'react-redux';

import {
  deleteFoodFromContainer,
  addItemToSearch,
  removeItemFromSearch
} from '../actions/app';

export class FoodItem extends React.Component {

  deleteItem(itemId) {
    this.props.dispatch(deleteFoodFromContainer(itemId))
  }

  state = {
    isSelected: false,
  }

  handleClick(foodItem) {
    console.log()
    this.setState(state => ({
      isSelected: !state.isSelected
    }), () => {
      if (this.state.isSelected) {
        this.props.dispatch(addItemToSearch(foodItem));
      } else {
        this.props.dispatch(removeItemFromSearch(foodItem))
      }
    });
  }

  render() {

    return (
      <div className='food-item'>
        <div className='food-title'
          style={{
            background: this.state.isSelected ? "#009999" : "#9fdf9f",
            color: this.state.isSelected ? "white" : "black"
         }}
          onClick={() => this.handleClick(this.props.food)}
        >
         {this.props.food}
       </div>
       <img
         src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/Close-512.png"
         alt="delete button"
         onClick={() => this.deleteItem(this.props.foodItem)}
         className="delete-button" />
      </div>
    )
  }

}

export default connect()(FoodItem)
