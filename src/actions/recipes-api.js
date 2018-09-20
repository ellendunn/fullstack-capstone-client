// import {KEY} from '../config';
import {normalizeResponseErrors} from './utils';
import {loadAuthToken} from '../local-storage'

import {API_BASE_URL} from '../config';

export const searchRecipesByIngredients = (ingredients) => dispatch => {
  const authToken = loadAuthToken()
  return fetch(`${API_BASE_URL}/recipes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredients })
    })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(res => console.log(res))
}
