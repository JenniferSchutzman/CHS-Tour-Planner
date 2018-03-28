import fetch from 'isomorphic-fetch'
import { GET_TOUR } from '../constants'
const url = 'http://localhost:5000'

export const getTour = async (dispatch, getState) => {
  dispatch({ type: GET_TOUR })
  const tour = await fetch(`${url}/recommendations/${id}`).then(res =>
    res.json()
  )
  dispatch({ type: GET_TOUR, payload: tour })
}
