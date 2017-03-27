import React, { PropTypes } from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import Badges from './Badges.jsx';
import store from '../../redux/reducer.js';
import * as actions from '../../redux/actions/BadgesAction.es';

const BadgesContainer = React.createClass({

  mixins: [PureRenderMixin],
  propTypes: {
    badgeType: PropTypes.number,
    badgesUrl: PropTypes.string
  },
  // componentWillMount () {
  //   this.store = stateStore.initializeStore();
  // },
    componentWillMount () {
    this.store = store;
  },
  componentDidMount () {
    debugger;
    if (this.props.badgesUrl) {
      //this.store.dispatch(actions.getBadgesModel(this.props.badgesUrl, this.props.badgeType));
      store.dispatch(actions.getBadgesModel(this.props.badgesUrl, this.props.badgeType))
    }
  },
  render () {
    if (this.props.badgesUrl) {
      return (
        <div>
            <Badges badgeType={this.props.badgeType} />
        </div>
      );
    } return null;
  }
});
export default BadgesContainer;