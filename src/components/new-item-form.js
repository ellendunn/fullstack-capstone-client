import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {addFoodToContainer} from '../actions/app';

import './new-item-form.css'

export class NewItemForm extends React.Component{
  state = {
    value: ''
  }

  onSubmit(item) {
    const [key] = Object.entries(item)
    const container = key[0];
    const newItem = key[1];
    return this.props.dispatch(addFoodToContainer(container, newItem))
  }

  render() {
    return (
      <form
        className="new-item-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
      )}>
          <label htmlFor="new-item"></label>
          <Field
            component={Input}
            type="text"
            name={this.props.name}
            id={this.props.name}
            value={this.state.value}
          />
          <button disabled={this.props.pristine || this.props.submitting}>
            Add Item
          </button>
      </form>
    )
  }
}

export default reduxForm({
  // form: 'new-item'
})(NewItemForm)
