/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SingleDatesButton from 'src/components/Availability/SingleDatesButton';

// Action Creators
import { voteProjectDates } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  userId: state.user.id,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  voteProjectDates: datesId => {
    dispatch(voteProjectDates(datesId));
  },
});

/**
 * Connect
 */
const SingleDatesButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleDatesButton);

/**
 * Export
 */
export default SingleDatesButtonContainer;
