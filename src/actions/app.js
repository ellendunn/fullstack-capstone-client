import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {loadAuthToken} from '../local-storage';

export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS';
export const addFoodSuccess= (container, newItem) => ({
  type: ADD_FOOD_SUCCESS,
  container,
  newItem
});

export const addFoodToContainer = (oldContainer, food) => dispatch => {
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
    .then(res => dispatch(addFoodSuccess(res.container, res.food)))
    .catch(err => console.log(err))
}

export const fetchFoodItems = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/food-items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

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
