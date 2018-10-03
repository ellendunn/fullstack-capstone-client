import React from 'react';
import {shallow, mount} from 'enzyme'

import {RecipePage} from '../recipe-page'

const mockFetchRecipeAction = {
    type: 'FETCH_RECIPE_BY_ID'
};
jest.mock('../../actions/recipes-api', () => Object.assign({},
    require.requireActual('../../actions/recipes-api'),
    {
        fetchRecipe: jest.fn().mockImplementation(() => {
            return mockFetchRecipeAction;
        })
    }
));

describe('<RecipePage />', () => {

  let recipeInfo = {
    title: 'Recipe Title',
    readyInMinutes: '5',
    ingredients: []
  }
  beforeAll(() => {
    for(let i=0; i<5; i++) {
      recipeInfo.ingredients.push({
        originalString: `ingredient ${i}`,
      })
    }
  })


  it('Renders without crashing', () => {
    const dispatch = jest.fn()
    shallow(<RecipePage
      recipeInfo={recipeInfo}
      ingredients={recipeInfo.ingredients}
      dispatch={dispatch}/>)
  })


})
