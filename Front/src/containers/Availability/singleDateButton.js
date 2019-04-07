/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import singleDateButton from 'src/components/Availability/singleDateButton';

// Action Creators
import { userHasVoted } from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = null;

// === Actions ===
const mapDispatchToProps = dispatch => ({
  userHasVoted: () => {
    dispatch(userHasVoted());
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
