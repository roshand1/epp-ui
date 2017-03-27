import _fetch from '../../utils/HelperFetch.js';

export function getBadgesModel (url, badgeType) {
  let badgeModel = {};
  return function (dispatch) {
    _fetch(url, { method:'GET' },function (status, response) {
      if (status === 'OK') {
        if (response && response.Badges.length>0) {
          response.Badges.map((badge)=> {
            if (badge.BadgeType === badgeType)
              {
              badgeModel = badge;
            }
          });
        }
        dispatch({ type:'FETCH_BADGES_MODEL_SUCCESS',payload:badgeModel });
      } 
      else {
        dispatch({ type:'FETCH_BADGES_MODEL_ERROR',payload:{} });
      }
    });
  };
}; 