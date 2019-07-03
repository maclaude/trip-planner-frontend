/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Restaurant from 'src/components/ProjectDetails/Restaurant';

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
const RestaurantContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Restaurant);

/**
 * Export
 */
export default RestaurantContainer;
