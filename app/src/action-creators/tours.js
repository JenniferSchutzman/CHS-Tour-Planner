import fetch from 'isomorphic-fetch'
import { ALL_RECOMMENDATIONS } from '../constants'
const url = 'http://localhost:5000'

export const recommendations = async (dispatch, getState) => {
  const tours = await fetch(`${url}/recommendations`).then(res => res.json())
  dispatch({ type: ALL_RECOMMENDATIONS, payload: tours })
}

export default recommendations
