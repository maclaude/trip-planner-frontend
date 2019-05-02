/**
 * NPM import
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Utils
import getDateFormat from 'src/utils/date_format';

/**
 * Code
 */
class SingleDateButton extends React.Component {
  /**
   * Local state
   */
  state = {
    isApproved: false,
  }

  /**
   * Handlers
   */
  handleClick = () => {
    const { isApproved } = this.state;
    const { userHasVoted } = this.props;

    if (!isApproved) {
      this.setState({
        isApproved: true,
      });
      userHasVoted();
    }
    else if (isApproved) {
      this.setState({
        isApproved: false,
      });
    }
  }

  /**
   * Render
   */
  render() {
    const { startDate, endDate } = this.props;
    const { isApproved } = this.state;

    return (
      <button
        className={classNames(
          'availability-button',
          { 'availability-button--active': isApproved },
        )}
        type="button"
        onClick={this.handleClick}
      >
        {`${getDateFormat(startDate)} - ${getDateFormat(endDate)}`}
      </button>
    );
  }
}

// PropTypes validation
SingleDateButton.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  userHasVoted: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleDateButton;
