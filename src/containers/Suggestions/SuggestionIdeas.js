/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Component
import SuggestionIdeas from 'src/components/Suggestions/SuggestionIdeas';
// Selector
import { getFilteredSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
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
)(SuggestionIdeas);

/**
 * Export
 */
export default SuggestionIdeasContainer;
