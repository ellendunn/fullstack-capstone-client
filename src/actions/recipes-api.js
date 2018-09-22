import {normalizeResponseErrors} from './utils';
import {loadAuthToken} from '../local-storage'

import {API_BASE_URL} from '../config';

export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export const searchRecipesSuccess = (recipes) => ({
  type: SEARCH_RECIPES_SUCCESS,
  recipes
})

export const searchRecipesByIngredients = (ingredients) => dispatch => {
  const authToken = loadAuthToken()
  let ingredients = ['spinach', 'tomato']
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

export const fetchRecipeById = (id) => dispatch => {
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
  .then(recipe => console.log(recipe))
}
