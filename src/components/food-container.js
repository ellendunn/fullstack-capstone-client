import React from 'react';
import {addItemToSearch} from '../actions/app';
import NewItemForm from './new-item-form';

import './food-container.css'

export default function FoodContainer(props) {

  const foods = [
    'ground turkey',
    'tomato',
    'apple',
    'eggs'
  ]

  const selectItem = (food) => {
    const {item} = food
    return this.props.dispatch(addItemToSearch(item));
    this.input.value = '';
    this.input.focus;
  }

  const deleteItem = (item) => {
    console.log(item)
  }

    const items = foods.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => selectItem({item})}>Select</button>
        <button onClick={() => deleteItem({item})}>Delete</button>
      </li>
    ))

    return (
      <div className="food-container">
        <h1>{props.name}</h1>
        <ul className={props.name}>
          {items}
        </ul>
        <NewItemForm />
      </div>
    )

}
