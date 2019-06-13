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

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  projects: state.project.projectsData,
  username: state.user.firstname,
});

// === Actions ===
const mapDispatchToProps = {};

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
