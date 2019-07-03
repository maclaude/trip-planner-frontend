/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Activity from 'src/components/ProjectDetails/Activity';

// // Action Creators
// import { getMajorityApprovedSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  suggestions: state.suggestions.suggestions,
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
