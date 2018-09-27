import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

import FoodContainer from './food-container';
// import {searchRecipesByIngredients} from '../actions/recipes-api'

import './kitchen.css'

export class Kitchen extends React.Component {
  state = {
    submitted: false,
    // loading: false
  }

  submitSearch(items) {
    this.setState(state => ({submitted: true}));
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/recipes" />
    }

    const searchTerms = () => {
      if (this.props.searchItems.length === 0) {
        return <p>You have not selected any ingredients</p>
      } else {
        return this.props.searchItems.map((item, index) => (
          <li key={index} className="search-term">
            {item}
          </li>
      ))
    }
  }

    return (
      <div className="kitchen">
        <div className="recipe-search-info">
          <h3>Select items in your fridge and pantry to find new recipes!</h3>
          <div>
            <ul className="search-items">
              {searchTerms()}
            </ul>
          </div>
          <button
          onClick={() => this.submitSearch(this.props.searchItems)}
          type="submit"
          className="recipe-search-button">
          What can I cook with these ingredients?
          </button>
        </div>
        <div className="containers">
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
