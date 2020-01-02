/**
 * NPM import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Components
import NavigationProjects from 'src/components/Navigation/NavigationProjects';
// Action Creators
import { getProjectSuggestions } from 'src/store/reducers/suggestions';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  projects: state.user.projects,
  username: state.user.firstname,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  getProjectSuggestions: projectId => {
    dispatch(getProjectSuggestions(projectId));
  },
});

/**
 * Connect
 */
const NavigationProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationProjects);

/**
 * Export
 */
export default withRouter(NavigationProjectsContainer);
