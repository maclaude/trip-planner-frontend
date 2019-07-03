/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Transport from 'src/components/ProjectDetails/Transport';

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
const TransportContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transport);

/**
 * Export
 */
export default TransportContainer;
