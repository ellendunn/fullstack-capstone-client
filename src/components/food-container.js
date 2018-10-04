import React from 'react';

import {connect} from 'react-redux';
import NewItemForm from './new-item-form';
import FoodItem from './food-item'

import './food-container.css'

export class FoodContainer extends React.Component {

  render() {
    const items = this.props.items.map((item, index) => (
        <li key={item.id} >
          <FoodItem food={item.food} foodItem={item} />
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
