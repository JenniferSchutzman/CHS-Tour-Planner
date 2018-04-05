import {
  SELECTED_INTEREST,
  SELECTED_DAYS,
  CHECK_DAY,
  SET_SCHEDULE
} from '../constants'
import { concat, map, merge, compose, find } from 'ramda'

const initialState = {
  interests: [
    {
      experienceTypes: [
        { name: 'Museum', img: '/white_Museum.jpg', selected: null },
        { name: 'Carriage', img: '/hisCharCarriageTour.jpg', selected: null },
        { name: 'Boat', img: '/sailing.jpeg', selected: null },
        { name: 'Walking', img: '/street.png', selected: null }
      ],
      name: 'History',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5pXiGmew-Qup76YUfafCYyLLIh_BB-pyJqh7wcEVP2YeyKZ83A',
      selected: null
    },
    {
      experienceTypes: [
        { name: 'Kayak', img: '/kayak.png', selected: null },
        { name: 'Surfing', img: '/surfing_1.jpeg', selected: null },
        { name: 'Charter', img: '/sunset_sail.jpeg', selected: null },
        { name: 'Fishing', img: '/fishing.png', selected: null }
      ],
      name: 'Adventure',
      img: '/surfing_color.jpeg',
      selected: null
    },
    {
      experienceTypes: [
        { name: 'Food', img: '/food.jpeg', selected: null },
        { name: 'Drinks', img: '/char_wine.jpeg', selected: null }
      ],
      name: 'Culinary',
      img: '/food2.jpeg',
      selected: null
    },
    {
      experienceTypes: [
        { name: 'Carriage', imgPath: '/haunted_carriage.jpg', selected: null },
        { name: 'Walking', imgPath: '/GhostCharTour.jpg', selected: null }
      ],
      name: 'Haunted',
      img: '/graveyard2.png',
      selected: null
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

    case SELECTED_INTEREST:
      return map(
        i => (i.name === action.payload ? merge(i, { selected: true }) : i),
        state
      )
    default:
      return state
  }
  // let selectedItem = { selected: true }
  // // NEED TO ACCESS name == history, then changed selected to true
  // return merge(initialState, { interests: selectedItem })
  // let selectedItem = map(
  //   x => (x.name == 'History' ? { selected: true } : x),
  //   state.interests
  // )
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
