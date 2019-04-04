/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Activity from 'src/components/ProjectDetails/Activity';

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
const ActivityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Activity);

/**
 * Export
 */
export default ActivityContainer;
