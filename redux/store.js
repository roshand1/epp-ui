import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {getSomething} from './actions/action';

let createStoreWithMiddleWare =window.__REDUX_DEVTOOLS_EXTENSION__ ? compose(
  applyMiddleware(logger(),thunk),(window.__REDUX_DEVTOOLS_EXTENSION__())
):compose( applyMiddleware(logger(),thunk));
const initialState={
                    practiceModel: {
                                    providerArr:[],
                                    Location:[]
                                    }
                    };
 const store = createStoreWithMiddleWare(createStore)(reducer,initialState);
store.dispatch(getSomething())
console.log(store);
export default store;


//------------------------------Create Store Without initialState ------------------------
// const store = createStore(reducer, createStoreWithMiddleWare)
// store.dispatch(getSomething())
// console.log(store);
// export default store;

