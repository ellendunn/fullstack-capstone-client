import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth'
import protectedDataReducer from './reducers/protected-data'
import appReducer from './reducers/app'

import {loadAuthToken} from './local-storage'
import {setAuthToken, refreshAuthToken} from './actions/auth'


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        app: appReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken()
if (authToken) {
  store.dispatch(setAuthToken(authToken))
  store.dispatch(refreshAuthToken())
}

export default store;
