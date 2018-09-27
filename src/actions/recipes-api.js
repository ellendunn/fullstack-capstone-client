import {normalizeResponseErrors, fetchRequest} from './utils';
import {loadAuthToken} from '../local-storage'

import {API_BASE_URL} from '../config';


export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export const searchRecipesSuccess = (recipes) => ({
  type: SEARCH_RECIPES_SUCCESS,
  recipes
})

// export const SEARCH_RECIPES_ERROR = 'SEARCH_RECIPES_ERROR'


export const searchRecipesByIngredients = (ingredients) => dispatch => {
  dispatch(fetchRequest())
  const authToken = loadAuthToken()
  return fetch(`${API_BASE_URL}/recipes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredients })
    })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(recipes => dispatch(searchRecipesSuccess(recipes)))
}


export const SELECT_RECIPE = 'SELECT_RECIPE';
export const selectRecipe = (id) => ({
  type: SELECT_RECIPE,
  id
})

export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS'
export const fetchRecipeSuccess = (recipe) => ({
  type: FETCH_RECIPE_SUCCESS,
  recipe
})

export const FETCH_RECIPE_BY_ID = 'FETCH_RECIPE_BY_ID';
export const fetchRecipeById = (id) => dispatch => {
  dispatch(fetchRequest())
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify({ id })
    })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(recipe => dispatch(fetchRecipeSuccess(recipe)))
}

export const CLEAR_RECIPE_ID = 'CLEAR_RECIPE_ID';
export const clearRecipeId = () => ({
  type: CLEAR_RECIPE_ID
})
