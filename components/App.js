import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
//import {getProvidersByFunc} from '../redux/action';
import * as actions from '../redux/action'; 
import OfficeHours from './OfficeHours/OfficeHours.jsx'

const App = React.createClass({

// componentWillMount(){
//  const { getProvidersByFunc} = this.props;
//  getProvidersByFunc();
// },
  // <Providers isMobile={false} providerCount={this.props.providers.length} getProviderUrl={'something'} providerArr={this.props.providers}/>
componentDidMount(){
 const { getProvidersByFunc} = this.props;
 getProvidersByFunc();
},

    render(){
        return <div> This is definitely a React app now!! after reloding
                    <div>
                        <OfficeHours officeHours={[]} acceptNewPatients={true}/>
                    </div>
                </div>
    }
})

const mapStateToProps = (state) => {
  return {
    
         providers: state,
    }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProviders: () => dispatch(getProvidersByFunc()),
  };
};

export default connect(mapStateToProps, actions)(App);