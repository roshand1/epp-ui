function mapBadgesModel (state) {
  debugger;
  if (state) {
    //return { ...state.badgeModel };
    //return object.assign({},state,{
      //badgeModel:state.badgeModel
    //})
    return state.badgeModel;
  }
}

const mapStateToProps= (state) => {
  return {
    badgeModel: mapBadgesModel(state)
  };
};

export default mapStateToProps;