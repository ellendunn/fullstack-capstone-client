import {API_BASE_URL} from '../config';
import {
  normalizeResponseErrors,
  fetchRequest
} from './utils';
import {loadAuthToken} from '../local-storage';
import swal from 'sweetalert';


export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS';
export const addFoodSuccess= (foodItem) => ({
  type: ADD_FOOD_SUCCESS,
  foodItem
});

export const addFoodToContainer = (food, oldContainer) => dispatch => {
  const authToken = loadAuthToken();
  const container = oldContainer.toLowerCase();
  return fetch(`${API_BASE_URL}/food-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      food,
      container
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => dispatch(addFoodSuccess(res)))
    .catch(err => console.error(err))
}

export const FETCH_FOOD_ITEMS_SUCCESS = 'FETCH_FOOD_ITEMS_SUCCESS';
export const fetchFoodItemsSuccess = (foodItems) => ({
  type: FETCH_FOOD_ITEMS_SUCCESS,
  foodItems
})

export const fetchFoodItems = () => (dispatch, getState) => {
  dispatch(fetchRequest())
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/food-items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(foods => dispatch(fetchFoodItemsSuccess(foods)))
  .catch(err => {
    swal({
      title: 'Your Kitchen is empty! Begin by adding foods to your Fridge and Pantry'
    })
  })
}

export const DELETE_FOOD_SUCCESS = 'DELETE_FOOD_SUCCESS';
export const deleteFoodSuccess = (food) => ({
  type: DELETE_FOOD_SUCCESS,
  food
})

export const deleteFoodFromContainer = (food) => dispatch => {
  const authToken = loadAuthToken();
  return fetch(`${API_BASE_URL}/food-items/${food.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(() => fetchFoodItemsSuccess())
  .then((id) => dispatch(deleteFoodSuccess(food)))
  .catch(err => console.error(err))
}

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

export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const clearUserData = () => ({
  type: CLEAR_USER_DATA
})

export const CLEAR_SEARCH_ITEMS = 'CLEAR_SEARCH_ITEMS';
export const clearSearchItems = () => ({
  type: CLEAR_SEARCH_ITEMS
})
