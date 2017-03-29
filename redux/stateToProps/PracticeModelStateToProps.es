function mapPracticeModel (state) {
  if (state) {
  return state.practiceModel;
}
}
const mapStateToProps= (state) => {
  return {
    practiceModel: mapPracticeModel(state)
  };
};
export default mapStateToProps;