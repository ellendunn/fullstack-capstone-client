import {
  SEARCH_RECIPES_SUCCESS,
  FETCH_RECIPE_SUCCESS,
  FETCH_REQUEST,
  SELECT_RECIPE
} from '../actions/recipes-api';

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
      recipes: [...state.recipes.concat(action.recipes)],
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
  return state
}
