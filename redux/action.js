
let actions = {
fetchProvidersSuccess(providers){
return {
    type:'GET_PROVIDERS',
    payload:providers
    }
},
  fetchProviders(officeId){
      return(dispatch) => {
       
          return fetch('http://localhost:56054/Provider/GetProviders?practiceId=YBSXXW&skip=0&take=10')
          .then((response)=> response.json())
          .then((response) =>{
              return dispatch(actions.fetchProvidersSuccess(response));
          })
          .catch(logger.error);
      }
  }

}

export default actions