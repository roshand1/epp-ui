import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import {getProvidersByPracticeId} from '../../redux/actions/PracticeModelAction.js';
import ProviderArrayStateToProps from '../../redux/stateToProps/ProviderArrayStateToProps.es';
import HgPaginationComp from '../../utils/serverSidePagination.jsx';
import * as actions from '../../redux/actions/PracticeModelAction.js';
const ProviderContainer = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    providerCountPerPage:PropTypes.number,
    isMobile: PropTypes.bool,
    providerCount:PropTypes.number,
    getProviderUrl:PropTypes.string, // This is the url to make an api call to get providers for specific practice. 
    providerArr: PropTypes.array.isRequired, // array of providers,
    practiceId:PropTypes.string
  },
    pageChange: function(pageNumber){
    var skip = (pageNumber-1)*(this.props.providerCountPerPage);
    var take = this.props.providerCountPerPage;
    var url = "&skip="+skip+"&take="+take;
    const { getProvidersByPracticeId} = this.props;
      getProvidersByPracticeId(this.props.practiceId,skip,take);
  },
  renderProviders(){
    const providers = [];
    this.props.providerArr.map((provider,idx)=>{
      providers.push(<div key={idx}>
        {provider.displayName}
      </div>)
    })
    return providers;
  },
  render () {
      debugger;
    if (this.props.providerArr.length>0) {
      return (
        <div>
               <HgPaginationComp itemCountPerPage={this.props.providerCountPerPage} 
                                 totalItemCount={this.props.providerCount} 
                                 onClick={this.pageChange}
                                 displayList={this.renderProviders()}/>
        </div>
      );
    } return null;
  }
});
export default connect(ProviderArrayStateToProps,actions)(ProviderContainer);