import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import BadgesContainer from './Badges/BadgesContainer.jsx'
const App = React.createClass({
    render(){
        //const practiceModel = this.props.practiceModel.getState().practiceReducer.practiceModel;
        return <div> This is definitely a React app now!! after reloding
                    <BadgesContainer badgeType={0} badgesUrl={'https://s3.amazonaws.com/paidpremiumtest/Provider/x2mt8/Files/badges.json'}/>
                </div>
    }
})

export default App;




//--------------------------- Import data using MapToStateProps-------------------
//import { connect } from 'react-redux';
//import {getProvidersByFunc} from '../redux/action';
//import * as actions from '../redux/action'; 
// import OfficeHours from './OfficeHours/OfficeHours.jsx'

// componentWillMount(){
//  const { getProvidersByFunc} = this.props;
//  getProvidersByFunc();
// },
  // <Providers isMobile={false} providerCount={this.props.providers.length} getProviderUrl={'something'} providerArr={this.props.providers}/>
// componentDidMount(){
//  const { getProvidersByFunc} = this.props;
//  getProvidersByFunc();
// }
//,

// const mapStateToProps = (state) => {
//   return {
    
//          providers: state,
//     }
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProviders: () => dispatch(getProvidersByFunc()),
//   };
// };

//export default connect()(App);
