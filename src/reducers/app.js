import {
  ADD_FOOD_TO_CONTAINER,
  ADD_ITEM_TO_SEARCH
} from '../actions/app'

const initialState = {
  foodItems: [],
  searchItems: []
}

export default function reducer(state = initialState, action) {
    if (action.type === ADD_FOOD_TO_CONTAINER) {
      return Object.assign({}, state, {
        foodItems: [...state.foodItems, action.foodItem]
      });
    } else if (action.type === ADD_ITEM_TO_SEARCH) {
      return Object.assign({}, state, {
        searchItems: [...state.searchItems, action.item]
      })
    }
    return state;
}
