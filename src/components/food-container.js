import React from 'react';
import {
  deleteFoodFromContainer,
  addItemToSearch,
  removeItemFromSearch
} from '../actions/app';
import {connect} from 'react-redux';
import NewItemForm from './new-item-form';
import SelectButton from './select-button.js'

import './food-container.css'

export class FoodContainer extends React.Component {

  deleteItem(item) {
    this.props.dispatch(deleteFoodFromContainer(item))
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

    const items = this.props.items.map((item, index) => (
        <li key={item.id} className="food-item"
          style={{background: this.state.isSelected ? "#9fdf9f" : "white" }}
          onClick={() => this.handleClick(item.food)}
        >
          {item.food}
          <div className="food-item-buttons">
            <SelectButton name={item.food} className="food-item-button"/>
            <img
              src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/Close-512.png"
              alt="delete button"
              onClick={() => this.deleteItem(item)}
              className="delete-button" />
          </div>
        </li>
      ))

    return (
      <div className="food-container">
        <h1 className="container-name">{this.props.name}</h1>
        <ul className={this.props.name}>
          {items}
        </ul>
        <NewItemForm
            type="text"
            name={this.props.name}
            form={this.props.name}
            />
      </div>
    )
  }
}

export default connect()(FoodContainer)
