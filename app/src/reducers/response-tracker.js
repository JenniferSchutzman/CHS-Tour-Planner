// import {
//   SELECTED_INTEREST,
//   SELECTED_EXPERIENCE,
//   SELECTED_DAYS
// } from '../constants'
// import { concat } from 'ramda'
//
// export const stateTracker = (state = [], action) => {
//   interests: [
//     {
//       experienceTypes: [
//         { name: 'Museum', img: '/white_Museum.jpg' },
//         { name: 'Carriage', img: '/hisCharCarriageTour.jpg' },
//         { name: 'Boat', img: '/sailing.jpeg' },
//         { name: 'Walking', img: '/street.png' }
//       ],
//       name: 'history',
//       img: '/BroadStreetCharleston.jpg'
//     },
//     {
//       experienceTypes: [
//         { name: 'Kayak', img: '/kayak.png' },
//         { name: 'Surf', img: '/surfing_1.jpeg' },
//         { name: 'Charter', img: '/sunset_sail.jpeg' },
//         { name: 'Fishing', img: '/fishing.png' }
//       ],
//       name: 'Adventure',
//       imgPath: '/surfing_color.jpeg'
//     },
//     {
//       experienceTypes: [
//         { name: 'Food', img: '/food.jpeg' },
//         { name: 'Drinks', img: '/char_wine.jpeg' }
//       ],
//       name: 'Culinary',
//       imgPath: '/food2.jpeg'
//     },
//     {
//       experienceTypes: [
//         { name: 'Carriage', imgPath: '/haunted_carriage.jpg' },
//         { name: 'Walking', imgPath: '/GhostCharTour.jpg' }
//       ],
//       name: 'Haunted',
//       img: '/graveyard2.png'
//     }
//   ]
//   dow: [
//     { name: 'Monday', selected: null },
//     { name: 'Tuesday', selected: null },
//     { name: 'Wednesday', selected: null },
//     { name: 'Thursday', selected: null },
//     { name: 'Friday', selected: null },
//     { name: 'Saturday', selected: null },
//     { name: 'Sunday', selected: null }
//   ]
//
//   switch (action.type) {
//     case SELECTED_INTEREST:
//       return concat([action.payload], state.interests.name)
//     case SELECTED_EXPERIENCE:
//       return concat([action.payload], state)
//     case SELECTED_DAYS:
//       return concat([action.payload], state)
//   }
// }
//
// export default stateTracker
