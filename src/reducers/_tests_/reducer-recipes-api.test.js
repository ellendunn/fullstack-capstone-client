import reducer from '../recipes-api-reducer'

import {
  searchRecipesSuccess,
  fetchRecipeSuccess,
  selectRecipe,
  clearRecipeId
} from '../../actions/recipes-api'

import {fetchRequest} from '../../actions/utils'

describe('recipesReducer', () => {
  const recipes = [
    'recipe 1', 'recipe 2', 'recipe 3'
  ]

  const recipe = {
    title: 'recipe title',
    id: 'recipe id'
  }


  it('Should set the initial state when nothing is passed', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      recipes: [],
      recipeId: '',
      recipeInfo: '',
      selected: false,
      loading: false
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
    });

  describe('searchRecipesSuccess', () => {
    it('should add recipes to the state', () => {
      let state = {
        recipes: [],
        selected: true,
        loading: true
      }
      state = reducer(state, searchRecipesSuccess(recipes));
      expect(state.recipes).toEqual(recipes)
      expect(state.selected).toEqual(false);
      expect(state.loading).toEqual(false)
    })
  })

  describe('selectRecipe', () => {
    it('should add individual recipe to the state', () => {
      let state = {
        recipeId: '',
        selected: false
      };
      state = reducer(state, selectRecipe(recipe.id))
      expect(state.recipeId).toEqual(recipe.id);
      expect(state.selected).toEqual(true)
    })
  })

  describe('fetchRecipeSuccess', () => {
    it('should add recipe info to the state', () => {
      let state = {
        loading: true,
        recipeInfo: ''
      };
      state = reducer(state, fetchRecipeSuccess(recipe))
      expect(state.loading).toEqual(false);
      expect(state.recipeInfo).toEqual(recipe)
    })
  })

  describe('fetchRequest', () => {
    it('should change state to loading for fetch', () => {
      let state = {
        loading: false
      }
      state = reducer(state, fetchRequest());
      expect(state.loading).toEqual(true)
    })
  })

  describe('clearRecipeId', () => {
    let state = {
      recipeId: recipe.id,
      recipes
    }
    state = reducer(state, clearRecipeId());
    expect(state.recipeId).toEqual('');
    expect(state.recipes).toEqual([])
  })

})
