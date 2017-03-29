import { combineReducers } from 'redux';

import practiceReducer from './reducers/PracticeModelReducer.js';
import badgeReducer from './reducers/BadgesReducer.es';
export default combineReducers({ practiceModel:practiceReducer,badgeModel:badgeReducer });
