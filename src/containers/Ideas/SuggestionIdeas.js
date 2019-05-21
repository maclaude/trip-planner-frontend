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
import { getFilteredSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getFilteredSuggestions(
    state.suggestions.suggestionsData,
    state.suggestions.type,
    ownProps.project.id,
  ),
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
