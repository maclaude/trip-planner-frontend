/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import suggestions from 'src/components/Ideas/suggestions';

// Action Creators

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  suggestions: state.ideas.suggestions,
});

// === Actions ===
const mapDispatchToProps = null;

/**
 * Connect
 */
const SuggestionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(suggestions);

/**
 * Export
 */
export default SuggestionsContainer;
