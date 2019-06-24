/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import singleDateButton from 'src/components/Availability/SingleDateButton';

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
  voteProjectDates: (datesId) => {
    dispatch(voteProjectDates(datesId));
  },
});

/**
 * Connect
 */
const singleDateButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(singleDateButton);

/**
 * Export
 */
export default singleDateButtonContainer;
