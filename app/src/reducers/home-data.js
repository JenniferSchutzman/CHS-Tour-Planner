import { ERROR } from '../constants'
import { merge } from 'ramda'

function startAppState() {
  return {
    appName: 'Charleston Tour Planner',
    errorMsg: null
  }
}

export default (state = startAppState(), action) => {
  switch (action.type) {
    case ERROR:
      return merge(state, { errMsg: action.payload })
    default:
      return state
  }
}
