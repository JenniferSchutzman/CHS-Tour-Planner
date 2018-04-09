import fetch from 'isomorphic-fetch'
import {
  SELECTED_EXPERIENCE,
  SELECTED_DAYS,
  SELECTED_INTEREST,
  SELECTED_HISTORY,
  SELECTED_HAUNTED,
  SELECTED_ADVENTURE,
  SELECTED_CULINARY,
  SET_SCHEDULE,
  CHECK_DAY
} from '../constants'
const url = 'http://localhost:5000'

export const areaOfInterest = async (dispatch, getState) => {
  dispatch({ type: SELECTED_INTEREST, payload: {} })
  const interests = await fetch(`${url}/interests`).then(res => res.json())
  dispatch({ type: SELECTED_INTEREST, payload: interests })
}
// export const selectInterest = async (dispatch, getState) => {
//   // dispatch({ type: SELECTED_HISTORY, payload: {} })
//   const history = await fetch(`${url}/interests/History`).then(res =>
//     res.json()
//   )
//   dispatch({ type: SELECTED_HISTORY })
// }
