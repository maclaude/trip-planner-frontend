/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SingleCard from 'src/components/Suggestions/SingleCard';

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
const SingleCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleCard);

/**
 * Export
 */
export default SingleCardContainer;
