function mapProviderModel(state) {
  if (state) {
  return state.practiceModel.ProviderListModel.providerArr;
}
}
const mapStateToProps= (state) => {
  return {
    providerArr: mapProviderModel(state)
  };
};
export default mapStateToProps;