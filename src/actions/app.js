
export const ADD_FOOD_TO_CONTAINER = 'ADD_FOOD_TO_CONTAINER';
export const addFoodToContainer = (container, newItem) => ({
  type: ADD_FOOD_TO_CONTAINER,
  container,
  newItem
});

export const DELETE_FOOD_FROM_CONTAINER = 'DELETE_FOOD_FROM_CONTAINER';
export const deleteFoodFromContainer = (container, itemToDelete) => ({
  type: DELETE_FOOD_FROM_CONTAINER,
  container,
  itemToDelete
})


export const ADD_ITEM_TO_SEARCH = 'ADD_ITEM_TO_SEARCH';
export const addItemToSearch = (searchItem) => ({
  type: ADD_ITEM_TO_SEARCH,
  searchItem
});

export const REMOVE_ITEM_FROM_SEARCH = 'REMOVE_ITEM_FROM_SEARCH';
export const removeItemFromSearch = (searchItem) => ({
  type: REMOVE_ITEM_FROM_SEARCH,
  searchItem
})
