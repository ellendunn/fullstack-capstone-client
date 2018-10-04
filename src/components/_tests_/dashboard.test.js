import React from 'react';
import {shallow, mount} from 'enzyme'

import {Dashboard} from '../dashboard'

const mockFetchFoodItemsActions = [
  [{
    type: 'CLEAR_RECIPE_ID'
  }],
  [{
    type: 'CLEAR_SEARCH_ITEMS'
  }]
]

jest.mock('../app', () => Object.assign({},
    require.requireActual('../app'),
    {
      fetchFoodItems: jest.fn().mockImplementation(() => {
        return mockFetchFoodItemsActions
      })
    }))

describe('<Dashboard />', () => {

  let fridge = [];
  let pantry = [];
  beforeAll(() => {
    for(let i=0; i<5; i++) {
      fridge.push({
        food: `food item ${i}`,
        container: 'fridge'
      })
    }
    for(let i=0; i<5; i++) {
      pantry.push({
        food: `food item ${i}`,
        container: 'pantry'
      })
    }
  })

  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Dashboard dispatch={dispatch} fridge={[]} pantry={[]}/>)
    expect(localStorage.getItem).toBeCalledWith('authToken')
  })


})
