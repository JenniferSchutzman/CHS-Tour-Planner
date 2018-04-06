import { SELECTED_INTEREST, CHECK_DAY, SELECTED_EXP } from '../constants'
import {
  map,
  merge,
  compose,
  find,
  flatten,
  tap,
  filter,
  toLower,
  prop
} from 'ramda'

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
        { name: 'Carriage', img: '/haunted_carriage.jpeg', selected: null },
        { name: 'Walking', img: '/GhostCharTour.jpg', selected: null }
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
      const newState = map(
        i => (i.name === action.payload ? merge(i, { selected: true }) : i),
        state.interests
      )
      return merge(state, { interests: newState })
    //  return newState
    default:
      return state
    case SELECTED_EXP:
      const wiretap = x => console.log(x)
      console.log('hit reducer', action.payload)
      const newExp = compose(
        map(
          exp =>
            toLower(exp.name) === toLower(action.payload)
              ? merge(exp, { selected: true })
              : exp
        ),
        prop('experienceTypes'),
        find(x => x.name === 'history'),
        map(i => merge(i, { name: toLower(i.name) }))
      )(state.interests)

      console.log('newExp', newExp)

      const finalInterestsWithNewExp = map(
        i => (i.name === 'History' ? merge(i, { experienceTypes: newExp }) : i),
        state.interests
      )

      return merge(state, { interests: finalInterestsWithNewExp })
  }
  return state
}

export default stateTracker
