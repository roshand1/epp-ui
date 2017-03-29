function mapBadgesModel (state) {
  if (state) {
  return state.badgeModel;
}
}

const mapStateToProps= (state) => {
  return {
    badgeModel: mapBadgesModel(state)
  };
};

export default mapStateToProps;