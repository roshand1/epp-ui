
let reducer = function(state, action) {
  switch (action.type) {
    case 'GET_PROVIDERS':
      return Object.assign({}, state, {
        providers: action.payload
      });
    default: 
      return state;
  }
}

export default reducer