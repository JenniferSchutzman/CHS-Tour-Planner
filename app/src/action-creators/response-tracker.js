import fetch from 'isomorphic-fetch'
import {
  SELECTED_EXPERIENCE,
  SELECTED_DAYS,
  SELECTED_INTEREST
} from '../constants'
const url = 'http://localhost:5000'

export const areaOfInterest = async (dispatch, getState) => {
  dispatch({ type: SELECTED_INTEREST, payload: {} })
  const interests = await fetch(`${url}/interests`).then(res => res.json())
  dispatch({ type: SELECTED_INTEREST, payload: interests })
}
export const experienceTypes = async (dispatch, getState) => {
  const types = await fetch(`${url}/experiences`).then(res => res.json())
  dispatch({ type: SELECTED_EXPERIENCE, payload: types })
}

export const schedule = async (dispatch, getState) => {
  const days = await fetch(`${url}/schedule`).then(res => res.json())
  dispatch({ type: SELECTED_DAYS, payload: days })
}
