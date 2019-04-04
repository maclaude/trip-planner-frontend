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
const mapStateToProps = (state, ownProps) => ({
  suggestions: getFilteredSuggestions(
    state.ideas.suggestionsAPI,
    state.ideas.type,
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
