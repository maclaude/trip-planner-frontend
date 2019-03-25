/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Component
import suggestionIdeas from 'src/components/Ideas/suggestionIdeas';
// Selector
import { getFilteredSuggestions } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  suggestions: getFilteredSuggestions(state.ideas.suggestions, state.ideas.type),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const SuggestionIdeasContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(suggestionIdeas);

/**
 * Export
 */
export default SuggestionIdeasContainer;
