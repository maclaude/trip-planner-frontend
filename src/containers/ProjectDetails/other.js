/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Other from 'src/components/ProjectDetails/Other';

// Action Creators
import { getMajorityApprovedSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getMajorityApprovedSuggestions(
    state.suggestions.suggestionsData,
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
