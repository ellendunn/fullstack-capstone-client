
export const ADD_FOOD_TO_CONTAINER = 'ADD_FOOD_TO_CONTAINER'
export const addFoodToContainer = (foodItem) => ({
  type: ADD_FOOD_TO_CONTAINER,
  foodItem
})


export const ADD_ITEM_TO_SEARCH = 'ADD_ITEM_TO_SEARCH'
export const addItemToSearch = (item) => ({
  type: ADD_ITEM_TO_SEARCH,
  item
})
