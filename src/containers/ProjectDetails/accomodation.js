/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Accomodation from 'src/components/ProjectDetails/Accomodation';

// // Action Creators
// import { getFullyApprovedSuggestions } from 'src/store/reducers/suggestions';

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
const AccomodationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accomodation);

/**
 * Export
 */
export default AccomodationContainer;
