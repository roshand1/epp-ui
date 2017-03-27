
function badgesReducer (state={}, action) {
  debugger;
  switch (action.type) {
  case 'FETCH_BADGES_MODEL_SUCCESS':
    //const badgeModel  = action.payload;
    //return { ...state, badgeModel };
    return  object.assign({},state,{
      badgeModel :action.payload
    });
  default:
    return state;
  }
}

export default badgesReducer;