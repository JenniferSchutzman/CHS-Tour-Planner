import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import startAppState from './reducers/home-data'

const store = createStore(
  combineReducers({
    startAppState
  }),
  applyMiddleware(thunk)
)

export default store
