
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

export function getProvidersByFunc(){
    return function(dispatch){
        fetch('https://8afzabjeui.execute-api.us-east-1.amazonaws.com/Prod/GetProviders?practiceId=YBSXXW&skip=0&take=10')
          .then((response)=> response.json())
          .then((response) =>{
              dispatch({type:'FETCH_PROV',payload:response});
          })
          .catch((error)=>{
              return dispatch({type:'FETCH_PROV_ERROR',payload:error});
          });
    }
}

export function provideStaticData(){
    return{
        type:'GET_STATICDATA',
        payload:'this is static'
    }
}


export function getSomething() {
    debugger;
    const response= {
            something: 'Here are some data'
        }
    return (dispatch)=>{
          dispatch({type:'GET_SOMETHING',payload:response});
    }
}

export default actions