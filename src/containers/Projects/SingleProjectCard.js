/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SingleProjectCard from 'src/components/Projects/SingleProjectCard';

// Action Creators
import { getProjectUserRole } from 'src/store/reducers/project';
import { getProjectSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = null;

// === Actions ===
const mapDispatchToProps = dispatch => ({
  getProjectUserRole: (projectId) => {
    dispatch(getProjectUserRole(projectId));
  },
  getProjectSuggestions: (projectId) => {
    dispatch(getProjectSuggestions(projectId));
  },
});

/**
 * Connect
 */
const SingleProjectCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProjectCard);

/**
 * Export
 */
export default SingleProjectCardContainer;
