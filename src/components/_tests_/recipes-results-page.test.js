import React from 'react';
import {shallow, mount} from 'enzyme'

import {RecipesResultsPage} from '../recipes-results-page'


const mockSearchRecipesAction = {
    type: 'SEARCH_RECIPES_BY_INGREDIENTS'
  }

jest.mock('../../actions/recipes-api', () => Object.assign({},
    require.requireActual('../../actions/recipes-api'),
    {
      searchRecipesByIngredients: jest.fn().mockImplementation(() => {
        Promise.resolve({
          mockSearchRecipesAction
        })
      })
    }))


describe('<RecipesResultsPage />', () => {
    let searchItems = ['searchTermOne', 'searchTermTwo']
    let recipes = [];
    beforeAll(() => {
      for(let i=0; i<5; i++) {
        recipes.push({
          title: `Recipe Title`,
          id: i
        })
      }
    })

  it.only('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<RecipesResultsPage
      searchItems={searchItems}
      recipes={recipes}
      dispatch={dispatch}
      />)

  })


})
