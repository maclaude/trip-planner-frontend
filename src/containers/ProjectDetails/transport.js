/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Transport from 'src/components/ProjectDetails/Transport';

// Action Creators
import { getMajorityApprovedSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
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
const TransportContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transport);

/**
 * Export
 */
export default TransportContainer;
