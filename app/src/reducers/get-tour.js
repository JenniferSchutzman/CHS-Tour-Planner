import { GET_TOUR } from '../constants'

export const tour = (state = {}, action) => {
  switch (action.type) {
    case GET_TOUR:
      return action.payload
    default:
      return state
  }
}

export default tour
