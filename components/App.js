import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import BadgesContainer from './Badges/BadgesContainer.jsx'
import ProviderContainer from './Providers/ProviderContainer.jsx'
import PracticeModelStateToProps from '../redux/stateToProps/PracticeModelStateToProps.es';
import {getPracticeModel} from '../redux/actions/action.js';
import * as actions from '../redux/actions/action.js';
const App = React.createClass({

//       componentDidMount () {
//       const { getPracticeModel} = this.props;
//       getPracticeModel();
//   },


    render(){
        debugger;
        const practiceModel = this.props.practiceModel?this.props.practiceModel:null;
        if(practiceModel){
            return <div> This is definitely a React app now!! after reloding
                     <BadgesContainer badgeType={0} badgesUrl={'https://s3.amazonaws.com/paidpremiumtest/Provider/x2mt8/Files/badges.json'}/>
                    {practiceModel.ProviderListModel &&
                        <ProviderContainer providerCountPerPage={5}
                                       isMobile={false}
                                       providerCount={practiceModel.ProviderListModel.providerCount}
                                       getProviderUrl={practiceModel.ProviderListModel.getProviderUrl}
                                       providerArr={practiceModel.ProviderListModel.providerArr}
                                       practiceId={practiceModel.PracticeId}/>
                    }
                </div>
        }return null;
    }
})
// function PracticeModelStateToProps(state) {
//     if(state)
//     {
//   return {
//     practiceModel: state.practiceModel
//   };
//     }else
//     return null;
// }
export default connect(PracticeModelStateToProps,actions)(App);
 //export default App;


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
