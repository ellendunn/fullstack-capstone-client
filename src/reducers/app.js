import {
  ADD_FOOD_TO_CONTAINER,
  DELETE_FOOD_FROM_CONTAINER,
  ADD_ITEM_TO_SEARCH,
  REMOVE_ITEM_FROM_SEARCH
} from '../actions/app'

const initialState = {
  fridge: [
    'apples', 'spinach', 'chicken', 'cheddar cheese'
  ],
  pantry: [
    'breadcrumbs', 'honey', 'garlic', 'olive oil'
  ],
  searchItems: [],
}

export default function reducer(state = initialState, action) {
    if (action.type === ADD_FOOD_TO_CONTAINER) {
      console.log(action)
      const container = action.container.toLowerCase();
      return Object.assign({}, state, {
        [container]: [...state[container], action.newItem]
      });
    }
    else if (action.type === DELETE_FOOD_FROM_CONTAINER) {
      const container = action.container.toLowerCase();
      console.log(state, container)
      return Object.assign({}, state, {
        [container]: [...state[container].filter((e) => e !== action.itemToDelete)]
      })
    }
    else if (action.type === ADD_ITEM_TO_SEARCH) {
      console.log(action.searchItem, state)
      return Object.assign({}, state, {
        searchItems: [...state.searchItems, action.searchItem]
      })
    }
    else if (action.type === REMOVE_ITEM_FROM_SEARCH) {
      return Object.assign({}, state, {
        searchItems: [...state.searchItems.filter((e) => e !== action.searchItem)]
      })
    }

    return state;
}
