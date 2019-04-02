/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Restaurant from 'src/components/ProjectDetails/Restaurant';

// Action Creators
import { getMajorityApprovedSuggestions } from 'src/store/reducers/ideas';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, ownProps) => ({
  suggestions: getMajorityApprovedSuggestions(
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
const RestaurantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restaurant);

/**
 * Export
 */
export default RestaurantContainer;