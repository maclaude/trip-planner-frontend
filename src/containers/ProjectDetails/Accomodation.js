/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Accomodation from 'src/components/ProjectDetails/Accomodation';

// Action Creators
import { getFullyApprovedSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getFullyApprovedSuggestions(
    state.suggestions.suggestions,
    ownProps.type,
    ownProps.participants,
  ),
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
