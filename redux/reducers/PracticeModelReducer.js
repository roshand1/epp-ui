
    const initialState ={
                    practiceModel: {
                                    providerArr:[],
                                    Location:[]
                                    }
                    };
let reducer = function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PROV':
      return Object.assign({}, state, {
        providers: action.payload
      });
      case 'GET_SOMETHING':
      return Object.assign({}, action.payload);
    default: 
      return state;
  }
}

export default reducer