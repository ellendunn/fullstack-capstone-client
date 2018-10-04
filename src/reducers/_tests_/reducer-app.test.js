import reducer from '../app'

import {
    addFoodSuccess,
    fetchFoodItemsSuccess,
    deleteFoodSuccess,
    addItemToSearch,
    removeItemFromSearch,
    clearUserData,
    clearSearchItems
  } from '../../actions/app'


describe('appReducer', () => {
  const foodItem = {
    food: 'tomato',
    container: 'fridge'
  }

  const foodItemTwo = {
    food: 'chicken',
    container: 'fridge'
  }

  const foodItems = {
    fooditems: [
      {food: 'broccoli', container: 'fridge' },
      {food: 'garlic', container: 'pantry'}
    ]
  }

  const fridge = [
    foodItem, foodItemTwo
  ]
  const pantry = [
    'garlic', 'walnuts'
  ]
  const searchItems = [
    'tomato', 'apples'
  ]

  it('Should set the initial state when nothing is passed', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      fridge: [],
      pantry: [],
      searchItems: [],
      loading: false
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
    });

  describe('addFoodSuccess', () => {
    it('should add new food to container', () => {
      let state;
      state = reducer(state, addFoodSuccess(foodItem))
      expect(state).toEqual({
        fridge: [foodItem],
        pantry: [],
        searchItems: [],
        loading: false
      })
    })
  })

  describe('fetchFoodItemsSuccess', () => {
    it('should add all foods to containers', () => {
      let state;
      state = reducer(state, fetchFoodItemsSuccess(foodItems))
      expect(state).toEqual({
        fridge: [foodItems.fooditems[0]],
        pantry: [foodItems.fooditems[1]],
        searchItems: [],
        loading: false,
      })
    })
  })

  describe('addItemToSearch', () => {
    it('should add selected food to search terms', () => {
      let state;
      state = reducer(state, addItemToSearch(foodItem))
      expect(state.searchItems).toEqual([foodItem])
    })
  })

  describe('removeItemFromSearch', () => {
    it('should remove selected food from search terms', () => {
      let state = {
        searchItems
      };
      state = reducer(state, removeItemFromSearch(searchItems[0]))
      expect(state.searchItems).toEqual([searchItems[1]])
    })
  })

  describe('clearUserData', () => {
    it('should remove all user data from state', () => {
      let state = {
        fridge: [1, 2, 3],
        pantry: [4, 5, 6],
        searchItems: [7, 8, 9]
      }
      state = reducer(state, clearUserData());
      expect(state.fridge).toEqual([])
      expect(state.pantry).toEqual([])
      expect(state.searchItems).toEqual([])
    })
  })

  describe('clearSearchItems', () => {
    it('should remove search terms from state', () => {
      let state = {
        searchItems: [1, 2, 3]
      }
      state = reducer(state, clearSearchItems());
      expect(state.searchItems).toEqual([])
    })
  })

})
