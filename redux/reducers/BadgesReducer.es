
function badgesReducer (state={}, action) {
  switch (action.type) {
  case 'FETCH_BADGES_MODEL_SUCCESS':
    return Object.assign({},action.payload)
  default:
    return state;
  }
}

export default badgesReducer;