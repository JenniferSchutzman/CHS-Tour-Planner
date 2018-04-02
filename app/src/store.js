import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import startAppState from './reducers/home-data'
import tours from './reducers/tours'
import tour from './reducers/get-tour'
import homeData from './reducers/home-data'
import stateTracker from './reducers/response-tracker'
import stateTrackerExperiences from './reducers/response-tracker'

const store = createStore(
  combineReducers({
    homeData,
    tour,
    tours,
    stateTracker
  }),
  applyMiddleware(thunk)
)

export default store
