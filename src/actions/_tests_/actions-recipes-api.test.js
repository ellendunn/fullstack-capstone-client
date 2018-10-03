import {
  SEARCH_RECIPES_SUCCESS,
  searchRecipesSuccess,
  SELECT_RECIPE,
  selectRecipe,
  FETCH_RECIPE_SUCCESS,
  fetchRecipeSuccess,
  CLEAR_RECIPE_ID,
  clearRecipeId,
  fetchRecipeById,
  searchRecipesByIngredients
} from '../recipes-api'

describe('searchRecipesSuccess', () => {
  it('should return the action', () => {
    const recipes = [1, 2, 3]
    const action = searchRecipesSuccess(recipes);
    expect(action.type).toEqual(SEARCH_RECIPES_SUCCESS);
    expect(action.recipes).toEqual(recipes)
  })
})

describe('selectRecipe', () => {
  it('should return the action', () => {
    const recipe = {id: 7}
    const action = selectRecipe(recipe.id);
    expect(action.type).toEqual(SELECT_RECIPE);
    expect(action.id).toEqual(recipe.id)
  })
})

describe('fetchRecipeSuccess', () => {
  it('should return the action', () => {
    const recipe = ['recipe!']
    const action = fetchRecipeSuccess(recipe);
    expect(action.type).toEqual(FETCH_RECIPE_SUCCESS);
    expect(action.recipe).toEqual(recipe)
  })
})

describe('clearRecipeId', () => {
  it('should return the action', () => {
    const action = clearRecipeId();
    expect(action.type).toEqual(CLEAR_RECIPE_ID);
  })
})
