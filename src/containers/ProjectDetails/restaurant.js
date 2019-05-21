/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Restaurant from 'src/components/ProjectDetails/Restaurant';

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
const RestaurantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restaurant);

/**
 * Export
 */
export default RestaurantContainer;
