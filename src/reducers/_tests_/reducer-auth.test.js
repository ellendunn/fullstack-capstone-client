import reducer from '../auth'

import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError
} from '../../actions/auth'

describe('authReducer', () => {
  const authToken = 'authToken';
  const currentUser = {}
  // const error = 'login error'

  it('Should set the initial state when nothing is passed', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: false,
        error: null
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
      it('should add auth token', () => {
        let authToken = 'authToken';
        let state;
        state = reducer(state, setAuthToken(authToken))
        expect(state.authToken).toEqual(authToken)
      })
    })

    describe('clearAuth', () => {
      it('should remove auth info', () => {
        let state;
        state = reducer(state, clearAuth(authToken, currentUser))
        expect(state.authToken).toEqual(null)
        expect(state.currentUser).toEqual(null)
      })
    })

    describe('authRequest', () => {
      it('should begin request loading', () => {
        let state = {
          loading: false,
          error: 'error'
        };
        state = reducer(state, authRequest())
        expect(state.loading).toEqual(true);
        expect(state.error).toEqual(null)
      })
    })

    describe('authSuccess', () => {
      it('should set current user and turn off loading', () => {
        let state = {
          loading: true,
          currentUser: {}
        }
        state = reducer(state, authSuccess(currentUser))
        expect(state.currentUser).toEqual(currentUser)
        expect(state.loading).toEqual(false)
      })
    })

    describe('authError', () => {
      it('should set error', () => {
        let error="login error"
        let state = {
          loading: true,
          error: null
        }
        state = reducer(state, authError(error))
        expect(state.error).toEqual(error)
        expect(state.loading).toEqual(false)
      })
    })


})
