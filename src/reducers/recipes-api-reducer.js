import {SEARCH_RECIPES_SUCCESS} from '../actions/recipes-api';

const initialState = {
  recipes: []
}

export default function reducer(state = initialState, action) {
  if (action.type === SEARCH_RECIPES_SUCCESS) {
    return Object.assign({}, state, {
      recipes: [...state.recipes.concat(action.recipes)]
    })
  }
  return state
}
