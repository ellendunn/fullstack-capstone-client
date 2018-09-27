import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {
  searchRecipesByIngredients,
  searchRecipesSuccess,
  selectRecipe
} from '../actions/recipes-api';

import Loading from './loading'
import './recipes-results-page.css'

export class RecipesResultsPage extends React.Component {

  componentDidMount() {
    if (this.props.recipes.length === 0) {
      this.props.dispatch(searchRecipesByIngredients(this.props.searchItems))
    } else {
      let recipes = []
      this.props.dispatch(searchRecipesSuccess(recipes))
    }
  }

  onClick(recipe) {
    this.props.dispatch(selectRecipe(recipe.id))
  }

  render() {
    if( this.props.loggedIn) {
      return <Redirect to="/" />
    }
    if (this.props.selected === true) {
      return <Redirect to="/recipes/info" />
    }

    if (this.props.loading) {
      return <Loading />
    }

    const recipes = this.props.recipes.map((recipe, index) => (
      <li key={recipe.id} className="recipe-result">
        <h2 className="recipe-title">{recipe.title}</h2>
        <div className="recipe-info">
          <p>Uses {recipe.usedIngredientCount} of your ingredients</p>
          <button
            onClick={() => this.onClick(recipe)}
            className="select-recipe-button"
          >
            Cook This!
          </button>
        </div>
        <img src={recipe.image} alt={recipe.title} />
      </li>
    ))

    return (
      <div className="recipes">
        <h1>Recipe Results</h1>
        <ul className="recipes-list">
          {recipes}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
  searchItems: state.app.searchItems,
  selected: state.recipes.selected,
  loading: state.recipes.loading,
  loggedIn: state.auth.loggedIn

})

export default connect(mapStateToProps)(RecipesResultsPage)
