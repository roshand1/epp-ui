import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import Badges from './Badges.jsx';
import store from '../../redux/reducer.js';
import {getBadgesModel} from '../../redux/actions/BadgesAction.es';
import BadgesStateToProps from '../../redux/stateToProps/BadgesStateToProps.es';
import * as actions from '../../redux/actions/BadgesAction.es';

const BadgesContainer = React.createClass({

  mixins: [PureRenderMixin],
  propTypes: {
    badgeType: PropTypes.number,
    badgesUrl: PropTypes.string
  },
  componentDidMount () {
    if (this.props.badgesUrl) {
      const { getBadgesModel} = this.props;
      getBadgesModel(this.props.badgesUrl, this.props.badgeType);
    }
  },
  render () {
    if (this.props.badgesUrl) {
      return (
        <div>
            <Badges badgeModel={this.props.badgeModel} />
        </div>
      );
    } return null;
  }
});

const mapStateToProps = (state) => {
  badgeModel:state.badgeModel;
};
export default connect(BadgesStateToProps, actions)(BadgesContainer);