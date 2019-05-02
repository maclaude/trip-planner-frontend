/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import singleCard from 'src/components/Ideas/singleCard';

// Action Creators
import { approvedSuggestion, disapprovedSuggestion } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = null;

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  approvedSuggestion: () => {
    dispatch(approvedSuggestion(ownProps.id));
  },
  disapprovedSuggestion: () => {
    dispatch(disapprovedSuggestion(ownProps.id));
  },
});

/**
 * Connect
 */
const singleCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(singleCard);

/**
 * Export
 */
export default singleCardContainer;
