import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {addFoodToContainer} from '../actions/app';

export class NewItemForm extends React.Component{
  onSubmit(item) {
    return this.props.dispatch(addFoodToContainer(item))
  }

  render() {
    return (
      <form
          className="new-item-form"
          onSubmit={this.props.handleSubmit(item => this.onSubmit(item)
          )}>
          <label htmlFor="new-item"></label>
          <Field
            component={Input}
            type="text"
            name="new-item"
            id="new-item"
          />
          <button disabled={this.props.pristine || this.props.submitting}>
            Add Item
          </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'new-item'
})(NewItemForm)
