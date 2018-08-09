
import _fetch from '../../utils/HelperFetch.js';

export function getPracticeModel(){
    return function(dispatch){
        _fetch('someurll?officeId=oo65fmp',{method:'GET'},function(status, practiceModel){
            if(status =='OK'){
               dispatch({type:'FETCH_PRAC_MODEL_SUCCESS',payload:practiceModel});
                var event = new CustomEvent('displayAds', { 'detail': {AdModel:practiceModel.Adds,OmniturePageTracking:practiceModel.OmniturePageTracking} });
                document.dispatchEvent(event);
            }else{
              return dispatch({type:'FETCH_PRAC_MODEL_ERROR',payload:error});
            }
        }) //YBRWWS , oo65fmp
    }
};

//TestUrl
//https://test.healthgrades.com/uisvc/v1_0/EPPUIService/api/Provider/GetProviders?practiceId=PP328S6&skip=5&take=5
//Prod
//https://www.healthgrades.com/uisvc/v1_0/eppuiservice/api/Provider/GetViewModel?officeId=oo65fmp

export function getProvidersByPracticeId(practiceId, skip, take){
const uri = '?practiceId=' + practiceId +'&skip='+skip+'&take='+take;
    return function(dispatch){
        _fetch('https:someruslider/GetProviders'+uri,{method:'GET'},function(status, response){
            if(status == 'OK'){
                dispatch({type:'FETCH_PROV_SUCCESS',payload:response});
            }
            else{
                 return dispatch({type:'FETCH_PRAC_MODEL_ERROR',payload:error});
            }
        })
    }
};


export function getSomething() {
    debugger;
    const response= {
            something: 'Here are some data'
        }
    return (dispatch)=>{
          dispatch({type:'GET_SOMETHING',payload:response});
    }
}
