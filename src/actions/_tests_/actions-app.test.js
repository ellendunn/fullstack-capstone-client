import {
  ADD_FOOD_SUCCESS, 
  addFoodSuccess,
  addFoodToContainer,
  FETCH_FOOD_ITEMS_SUCCESS,
  fetchFoodItemsSuccess,
  fetchFoodItems,
  DELETE_FOOD_SUCCESS,
  deleteFoodSuccess,
  deleteFoodFromContainer,
  ADD_ITEM_TO_SEARCH,
  addItemToSearch,
  REMOVE_ITEM_FROM_SEARCH,
  removeItemFromSearch,
  CLEAR_USER_DATA,
  clearUserData,
  CLEAR_SEARCH_ITEMS,
  clearSearchItems
} from '../app'

import {API_BASE_URL} from '../../config'

describe('fetchFoodItems', () => {
  it('should dispatch fetchFoodItemsSuccess', () => {
    const foodItems = []
    global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
              ok: true,
              json() {
                  return foodItems;
              }
          })
      );
    const dispatch = jest.fn();
    return fetchFoodItems()(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/food-items`,
        {
          "headers": {
            "Authorization": "Bearer undefined",
            "Content-Type": "application/json"
          },
          "method": "GET"
        });
      expect(dispatch).toHaveBeenCalledWith(fetchFoodItemsSuccess(foodItems))
    })
  })
})

describe('addFoodToContainer', () => {
  it('should dispatch addFoodSuccess', () => {
    const food = 'tomato'
    const container = 'fridge'
    global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
              ok: true,
              json() {
                  return food, container;
              }
          })
      );
    const dispatch = jest.fn();
    return addFoodToContainer(food, container)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/food-items`,
        {
          "headers": {
            "Authorization": "Bearer undefined",
            "Content-Type": "application/json"
          },
          "method": "POST",
          "body": JSON.stringify({
            "food": `${food}`,
            "container": `${container}`
          })
        });
      expect(dispatch).toHaveBeenCalledWith(addFoodSuccess(container))
    })
  })
})

describe('deleteFoodFromContainer', () => {
  it('should dispatch deleteFoodSuccess', () => {
    let foodItem = {
      id: 7
    }
    global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
              ok: true,
              json() {
                  return foodItem;
              }
          })
      );
    const dispatch = jest.fn();

    return deleteFoodFromContainer(foodItem)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/food-items/${foodItem.id}`,
        {
          "headers": {
            "Authorization": "Bearer undefined",
            "Content-Type": "application/json"
          },
          "method": "DELETE"
        });
      expect(dispatch).toHaveBeenCalledWith(deleteFoodSuccess(foodItem))
    })
  })
})

describe('addFoodSuccess', () => {
  it('should return the action', () => {
    const foodItem = 'Potato'
    const action = addFoodSuccess(foodItem);
    expect(action.type).toEqual(ADD_FOOD_SUCCESS);
    expect(action.foodItem).toEqual(foodItem)
  })
})

describe('fetchFoodItemsSuccess', () => {
  it('should return the action', () => {
    const foodItems = ['tomato', 'chicken'];
    const action = fetchFoodItemsSuccess(foodItems);
    expect(action.type).toEqual(FETCH_FOOD_ITEMS_SUCCESS);
    expect(action.foodItems).toEqual(foodItems)
  })
})

describe('deleteFoodSuccess', () => {
  it('should return the action', () => {
    const food = 'chicken';
    const action = deleteFoodSuccess(food);
    expect(action.type).toEqual(DELETE_FOOD_SUCCESS);
    expect(action.food).toEqual(food)
  })
})

describe('addItemToSearch', () => {
  it('should return the action', () => {
    const searchItem = 'chicken';
    const action = addItemToSearch(searchItem);
    expect(action.type).toEqual(ADD_ITEM_TO_SEARCH);
    expect(action.searchItem).toEqual(searchItem)
  })
})

describe('removeItemFromSearch', () => {
  it('should return the action', () => {
    const searchItem = 'chicken';
    const action = removeItemFromSearch(searchItem);
    expect(action.type).toEqual(REMOVE_ITEM_FROM_SEARCH);
    expect(action.searchItem).toEqual(searchItem)
  })
})

describe('clearUserData', () => {
  it('should return the action', () => {
    const action = clearUserData();
    expect(action.type).toEqual(CLEAR_USER_DATA);
  })
})

describe('clearSearchItems', () => {
  it('should return the action', () => {
    const action = clearSearchItems();
    expect(action.type).toEqual(CLEAR_SEARCH_ITEMS);
  })
})
