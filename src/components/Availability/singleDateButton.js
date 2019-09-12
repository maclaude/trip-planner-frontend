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
import { getDateFormat } from 'src/utils/date_format';

/**
 * Code
 */
class SingleDateButton extends React.Component {
  /**
   * Handlers
   */
  voteProjectDates = datesId => () => {
    const { voteProjectDates } = this.props;
    voteProjectDates(datesId);
  }

  /**
   * Render
   */
  render() {
    const {
      userId,
      _id: datesId,
      start_date: startDate,
      end_date: endDate,
      user_vote: userVote,
    } = this.props;

    const currentUserHasVoted = userVote.find(vote => vote === userId);

    return (
      <div
        className={classNames(
          'availability__button',
          { 'availability__button--selected': currentUserHasVoted },
        )}
        onClick={this.voteProjectDates(datesId)}
      >
        Du <strong>{getDateFormat(startDate)}</strong> au <strong>{getDateFormat(endDate)}</strong>
      </div>
    );
  }
}

// PropTypes validation
SingleDateButton.propTypes = {
  userId: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  user_vote: PropTypes.array.isRequired,
  voteProjectDates: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default SingleDateButton;
