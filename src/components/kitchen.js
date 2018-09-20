import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

import FoodContainer from './food-container';
import {searchRecipesByIngredients} from '../actions/recipes-api'

import './kitchen.css'

export class Kitchen extends React.Component {
  state = {
    submitted: false,
    loading: false
  }

  submitSearch(items) {
    this.props.dispatch(searchRecipesByIngredients(items))
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/recipes" />
    }

    return (
      <div>
        <div>
          <h3>Select items in your fridge and pantry to find recipes</h3>
          <p>{this.props.searchItems}</p>
          <button
          onClick={() => this.submitSearch(this.props.searchItems)}
          type="submit">
          What can I cook?
          </button>
        </div>
        <div className="kitchen">
          <FoodContainer name="Fridge" items={this.props.fridge}/>
          <FoodContainer name="Pantry" items={this.props.pantry}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchItems: state.app.searchItems,
  fridge: state.app.fridge,
  pantry: state.app.pantry
})

export default connect (mapStateToProps)(Kitchen)
