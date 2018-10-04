import {
  SET_AUTH_TOKEN,
  setAuthToken,
  CLEAR_AUTH,
  clearAuth,
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  AUTH_ERROR,
  authError,
  login,
  refreshAuthToken
} from '../auth'

import {API_BASE_URL} from '../../config'

describe('setAuthToken', () => {
  it('should return the action', () => {
    const authToken = 'authToken'
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken)
  })
})

describe('clearAuth', () => {
  it('should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  })
})

describe('authRequest', () => {
  it('should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  })
})

describe('authSuccess', () => {
  it('should return the action', () => {
    const currentUser = 'FirstName LastName'
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser)
  })
})

describe('authError', () => {
  it('should return the action', () => {
    const error = 'some error'
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error)
  })
})

describe('login', () => {
  it('should dispatch fetchFoodItems', () => {
    const username = "username"
    const password = "password"
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return username, password;
        }
      })
    )
    const dispatch = jest.fn();
    return login(username, password)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`,
        {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            "username": `${username}`,
            "password": `${password}`
          })
        })
    })
  })
})
