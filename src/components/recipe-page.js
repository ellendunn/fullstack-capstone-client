import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {fetchRecipeById} from '../actions/recipes-api'
import Loading from './loading'

import './recipe-page.css'

export class RecipePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRecipeById(this.props.recipeId))
  }

  render() {
    if (this.props.selected === false) {
      return <Redirect to="/recipes" />
    }
    if (this.props.loading) {
      return <Loading />
    }

    const ingredients = this.props.ingredients.map((item, index) => (
      <li key={index}>
        {item.originalString}
      </li>
    ))
    console.log(this.props.recipeInfo.analyzedInstructions, this.props.recipeId)

    return (
      <div className="recipe-page">
        <h1>{this.props.recipeInfo.title}</h1>
        <p>Prep Time: {this.props.recipeInfo.readyInMinutes} minutes</p>
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>{ingredients}</ul>
        </div>
        <div className="instructions">
          <h3>Instructions:</h3>
          <li>
            {this.props.instructions
            ? this.props.instructions
            : <a href={this.props.recipeInfo.sourceUrl}> Full recipe here </a>)
            }
          </li>
        </div>
        <img className="recipe-image" src={this.props.recipeInfo.image} alt="finished recipe"/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipeId: state.recipes.recipeId,
  recipeInfo: state.recipes.recipeInfo,
  ingredients: state.recipes.recipeInfo.extendedIngredients || [],
  instructions: state.recipes.recipeInfo.instructions || '',
  selected: state.recipes.selected,
  loading: state.recipes.loading
})

export default connect(mapStateToProps)(RecipePage)
