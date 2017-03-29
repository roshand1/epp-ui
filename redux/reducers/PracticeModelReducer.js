
let reducer = function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PRAC_MODEL_SUCCESS':
      return Object.assign({},action.payload);
      case 'GET_SOMETHING':
      return Object.assign({}, action.payload);
      case 'FETCH_PROV_SUCCESS':
      // return Object.assign({},state, action.payload);
      state.providerModel={};
      state.providerModel.ProviderListModel={};
      return Object.assign({},state,{
        ProviderListModel:action.payload
      })
    default: 
      return state;
  }
}

export default reducer