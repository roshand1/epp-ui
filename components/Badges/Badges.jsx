import React, { PropTypes } from 'react';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

const Badges = React.createClass({

  mixins: [PureRenderMixin],
  propTypes: {
    badgeModel:PropTypes.object
  },
  render () {
    if (this.props.badgeModel && this.props.badgeModel.BadgeText) {
      return (
        <div className="componentWrap">
          <h2>Badges</h2>
          <div dangerouslySetInnerHTML={{ __html: this.props.badgeModel.BadgeText }}></div>
        </div>
      );
    }
    return null;
  }
});
export default Badges;