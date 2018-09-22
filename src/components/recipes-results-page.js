import React from 'react';
import {connect} from 'react-redux';

import {
  searchRecipesByIngredients,
  fetchRecipeById
} from '../actions/recipes-api';

import './recipes-results-page.css'

export class RecipesResultsPage extends React.Component {

  componentDidMount() {
    console.log('componentDidMount')
    this.props.dispatch(searchRecipesByIngredients(this.props.searchItems))
  }

  selectRecipe(recipe) {
    this.props.dispatch(fetchRecipeById(recipe.id))
  }

  render() {

    console.log(this.props.recipes, 'loading recipes')

    const recipes = this.props.recipes.map((recipe, index) => (
      <li key={recipe.id}>
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} />
        <button onClick={() => this.selectRecipe(recipe)}>Cook This!</button>
      </li>
    ))


    return (
      <div className="recipes">
        <h2>Recipe Results</h2>
        <ul>
          {recipes}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
  searchItems: state.app.searchItems
})

export default connect(mapStateToProps)(RecipesResultsPage)
