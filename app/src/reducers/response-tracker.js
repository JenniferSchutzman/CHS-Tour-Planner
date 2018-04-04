import {
  SELECTED_INTEREST,
  SELECTED_HISTORY,
  SELECTED_DAYS,
  CHECK_DAY,
  SET_SCHEDULE
} from '../constants'
import { concat, map, merge } from 'ramda'

const initialState = {
  interests: [
    {
      experienceTypes: [
        { name: 'Museum', img: '../../public/white_Museum.jpg' },
        { name: 'Carriage', img: '../../public/hisCharCarriageTour.jpg' },
        { name: 'Boat', img: '../../public/sailing.jpeg' },
        { name: 'Walking', img: '../../public/street.png' }
      ],
      name: 'History',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5pXiGmew-Qup76YUfafCYyLLIh_BB-pyJqh7wcEVP2YeyKZ83A'
    },
    {
      experienceTypes: [
        { name: 'Kayak', img: '../../public/kayak.png' },
        { name: 'Surf', img: '../../public/surfing_1.jpeg' },
        { name: 'Charter', img: '../../public/sunset_sail.jpeg' },
        { name: 'Fishing', img: '../../public/fishing.png' }
      ],
      name: 'Adventure',
      img: '/surfing_color.jpeg'
    },
    {
      experienceTypes: [
        { name: 'Food', img: '../../public/food.jpeg' },
        { name: 'Drinks', img: '../../public/char_wine.jpeg' }
      ],
      name: 'Culinary',
      img: '/food2.jpeg'
    },
    {
      experienceTypes: [
        { name: 'Carriage', imgPath: '../../public/haunted_carriage.jpg' },
        { name: 'Walking', imgPath: '../../public/GhostCharTour.jpg' }
      ],
      name: 'Haunted',
      img: '/graveyard2.png'
    }
  ],
  dow: [
    { name: 'Monday', selected: null },
    { name: 'Tuesday', selected: null },
    { name: 'Wednesday', selected: null },
    { name: 'Thursday', selected: null },
    { name: 'Friday', selected: null },
    { name: 'Saturday', selected: null },
    { name: 'Sunday', selected: null }
  ]
}
// map over the dow
// for each day in the array
// look for the day name that matches the action.payload.day

export const stateTracker = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_DAY:
      let newDow = map(
        day =>
          day.name === action.payload.day
            ? { name: day.name, selected: action.payload.checked }
            : day,
        state.dow
      )
      return merge(initialState, { dow: newDow })
    case SELECTED_HISTORY:
      concat([action.payload], state)
    default:
      return state
  }

  return state
  // export const stateTracker = (state = initialState, action) => {
  //   switch (action.type) {
  //     case SELECTED_HISTORY:
  //       return concat([action.payload], state)
  // case SELECTED_HISTORY:
  //   return concat([action.payload], state.interests.name)
  // case SELECTED_DAYS:
  //   return concat([action.payload], state)
  //   default:
  //     return state
  // }
}

// export const stateTrackerExperiences = (state = stateTracker, action) => {
//   switch (action.type) {
//     case SELECTED_HISTORY:
//       return concat([action.payload], state.interests.history)
//   }
// }

// export const days = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_SCHEDULE:
//       return action.payload
//     default:
//       return state
//   }
// }

// export const checkDay = (state = { selected: null }, action) => {
//   switch (action.type) {
//     case CHECK_DAY:
//       console.log('CHECK_DAY', action.payload)
//       return { selected: true }
//     default:
//       return state
//   }
// }

export default stateTracker
