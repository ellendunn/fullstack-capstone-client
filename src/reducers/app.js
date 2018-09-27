import {
  ADD_FOOD_SUCCESS,
  FETCH_FOOD_ITEMS_SUCCESS,
  DELETE_FOOD_SUCCESS,
  ADD_ITEM_TO_SEARCH,
  REMOVE_ITEM_FROM_SEARCH,
} from '../actions/app'

import {FETCH_REQUEST} from '../actions/utils'


const initialState = {
  fridge: [],
  pantry: [],
  searchItems: [],
  loading: false
}

export default function reducer(state = initialState, action) {
    if (action.type === ADD_FOOD_SUCCESS) {
      const container = action.foodItem.container.toLowerCase();
      return Object.assign({}, state, {
        [container]: [...state[container], action.foodItem]
      });
    }

    else if (action.type === FETCH_FOOD_ITEMS_SUCCESS) {
      const {fooditems} = action.foodItems
      // if(action.foodItems.length > 0)
      const fridgeItems = fooditems
            .filter(obj => obj.container === "fridge")
      const pantryItems = fooditems
            .filter(obj => obj.container === "pantry")
      return Object.assign({}, state, {
        fridge: [...state.fridge.concat(fridgeItems)],
        pantry: [...state.pantry.concat(pantryItems)],
        // loading: false
      })
    }

    else if (action.type === DELETE_FOOD_SUCCESS) {
      const container = action.food.container
      return Object.assign({}, state, {
        [container]: [...state[container].filter((e) => e !== action.food) ]
      })
    }

    else if (action.type === ADD_ITEM_TO_SEARCH) {
      return Object.assign({}, state, {
        searchItems: [...state.searchItems, action.searchItem]
      })
    }

    else if (action.type === REMOVE_ITEM_FROM_SEARCH) {
      return Object.assign({}, state, {
        searchItems: [...state.searchItems.filter((e) => e !== action.searchItem)]
      })
    }

    if (action.type === FETCH_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      })
    }

    return state;
}
