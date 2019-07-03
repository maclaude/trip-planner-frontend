/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SingleCard from 'src/components/Suggestions/SingleCard';

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
const SingleCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleCard);

/**
 * Export
 */
export default SingleCardContainer;
