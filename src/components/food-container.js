import React from 'react';
import {deleteFoodFromContainer} from '../actions/app';
import {connect} from 'react-redux';
import NewItemForm from './new-item-form';
import SelectButton from './select-button.js'

import './food-container.css'

export class FoodContainer extends React.Component {

  deleteItem(item) {
    this.props.dispatch(deleteFoodFromContainer(item))
  }

  render() {
    const items = this.props.items.map((item, index) => (
        <li key={item.id} className="food-item">
          {item.food}
          <div className="food-item-buttons">
            <SelectButton name={item.food} className="food-item-button"/>
            <button onClick={() => this.deleteItem(item)} className="food-item-button">
              Delete
            </button>
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
