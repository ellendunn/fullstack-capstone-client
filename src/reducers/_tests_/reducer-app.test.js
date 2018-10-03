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

  const foodItems = {
    fooditems: [
      {food: 'broccoli', container: 'fridge' },
      {food: 'garlic', container: 'pantry'}
    ]
  }

  const fridge = [
    'tomato', 'chicken'
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

  // describe('deleteFoodSuccess', () => {
  //   it('should delete food from container', () => {
  //     let state = {
  //       fridge
  //     };
  //     state = reducer(state, deleteFoodSuccess({food: {foodItem}}))
  //     expect(state.fridge).toEqual([fridge[1]])
  //   })
  // })

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

    // removeItemFromSearch,
    // clearUserData,
    // clearSearchItems

})
