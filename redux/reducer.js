import { combineReducers } from 'redux';

import practiceReducer from './reducers/PracticeModelReducer.js';
import badgeReducer from './reducers/BadgesReducer.es';
export default combineReducers({ practiceModel:practiceReducer,badgeModel:badgeReducer });


// let reducer = function(state, action) {
//   debugger;
//   switch (action.type) {
//     case 'FETCH_PROV':
//       return Object.assign({}, state, {
//         providers: action.payload
//       });
//       case 'GET_SOMETHING':
//       return Object.assign({}, state, {
//         practiceModel: action.payload
//       });
//     default: 
//       return state;
//   }
// }

// export default reducer

// function mapBadgesModel (state) {
//   if (state) {
//     deb
//     return { ...state.badgeModel };
//   }
// }
