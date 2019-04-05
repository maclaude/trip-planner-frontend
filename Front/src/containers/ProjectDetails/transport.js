/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Transport from 'src/components/ProjectDetails/Transport';

// Action Creators
import { getMajorityApprovedSuggestions } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getMajorityApprovedSuggestions(
    state.ideas.suggestionsAPI,
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
