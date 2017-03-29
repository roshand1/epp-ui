import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {getPracticeModel} from './actions/action';

let createStoreWithMiddleWare =window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
  applyMiddleware(logger(),thunk),(window.__REDUX_DEVTOOLS_EXTENSION__())
):compose( applyMiddleware(logger(),thunk));
const initialState={
                    practiceModel: {
                                    providerArr:[],
                                    Location:[]
                                  },
                                  badgeModel:{}
                    };
const store = createStoreWithMiddleWare(createStore)(reducer,initialState);
store.dispatch(getPracticeModel())
console.log(store.getState());
export default store;


//------------------------------Create Store Without initialState ------------------------
// const store = createStore(reducer, createStoreWithMiddleWare)
// store.dispatch(getPracticeModel())
// console.log(store);
// export default store;

