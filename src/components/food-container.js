import React from 'react';
import {deleteFoodFromContainer} from '../actions/app';
import {connect} from 'react-redux';
import NewItemForm from './new-item-form';
import SelectButton from './select-button.js'

import './food-container.css'

export class FoodContainer extends React.Component {

  deleteItem(item) {
    console.log(item);
    const [key] = Object.entries(item);
    const container = this.props.name;
    const itemToDelete = key[1]
    return this.props.dispatch(deleteFoodFromContainer(container, itemToDelete))
  }

  render() {
    const items = this.props.items.map((item, index) => (
        <li key={index}>
          {item}
          <SelectButton name={item} />
          <button onClick={() => this.deleteItem({item})}>Delete</button>
        </li>
      ))

    return (
      <div className="food-container">
        <h1>{this.props.name}</h1>
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

const mapStateToProps = (state) => ({
  // foodItems: state.items
})

export default connect(mapStateToProps)(FoodContainer)
