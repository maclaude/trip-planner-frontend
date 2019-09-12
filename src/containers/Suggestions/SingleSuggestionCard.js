/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SingleSuggestionCard from 'src/components/Suggestions/SingleSuggestionCard';

// Action Creators
import { voteProjectSuggestion } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  userId: state.user.id,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  voteProjectSuggestion: (projectId, suggestionId) => {
    dispatch(voteProjectSuggestion(projectId, suggestionId));
  },
});

/**
 * Connect
 */
const SingleSuggestionCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleSuggestionCard);

/**
 * Export
 */
export default SingleSuggestionCardContainer;
