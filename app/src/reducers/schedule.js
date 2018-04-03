import { SET_SCHEDULE } from '../constants'

export const days = (state = initialState, action) => {
  console.log('state inside SET_SCHEDULE', state)
  switch (action.type) {
    case SET_SCHEDULE:
      return action.payload
    default:
      return state
  }
}

export default days
