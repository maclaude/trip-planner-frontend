/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Accomodation from 'src/components/ProjectDetails/Accomodation';

// Action Creators
import { getFullyApprovedSuggestions } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getFullyApprovedSuggestions(
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
const AccomodationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accomodation);

/**
 * Export
 */
export default AccomodationContainer;
