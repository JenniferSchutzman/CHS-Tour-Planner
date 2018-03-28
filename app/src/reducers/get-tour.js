import { GET_TOUR } from '../constants'

export const tour = (state = {}, action) => {
  switch (action.type) {
    case GET_TOUR:
      return action.payload
      console.log('tour reducer', state)
    default:
      return state
  }
}
