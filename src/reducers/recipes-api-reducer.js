import {
  SEARCH_RECIPES_SUCCESS,
  FETCH_RECIPE_SUCCESS,
  SELECT_RECIPE,
  CLEAR_RECIPE_ID
} from '../actions/recipes-api';

import {FETCH_REQUEST} from '../actions/utils'

const initialState = {
  recipes: [],
  recipeId: '',
  recipeInfo: '',
  selected: false,
  loading: false
}

export default function reducer(state = initialState, action) {
  if (action.type === SEARCH_RECIPES_SUCCESS) {
    return Object.assign({}, state, {
      recipes: action.recipes,
      selected: false,
      loading: false
    })
  }
  else if (action.type === SELECT_RECIPE) {
    return Object.assign({}, state, {
      selected: true,
      recipeId: action.id
    })
  }
  else if (action.type === FETCH_RECIPE_SUCCESS) {
    return Object.assign({}, state, {
      recipeInfo: action.recipe,
      loading: false
    })
  }
  else if (action.type === FETCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }
  else if (action.type === CLEAR_RECIPE_ID) {
    return Object.assign({}, state, {
      recipeId: '',
      recipes: []
    })
  }

  return state
}
