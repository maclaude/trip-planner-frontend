/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Other from 'src/components/ProjectDetails/Other';

// Action Creators
import { getFilteredOtherSuggestions } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getFilteredOtherSuggestions(
    state.ideas.suggestions,
    ownProps.type,
    ownProps.projectId,
    ownProps.participants,
  ),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const OtherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Other);

/**
 * Export
 */
export default OtherContainer;
