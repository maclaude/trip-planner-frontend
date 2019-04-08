/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Projects from 'src/components/MyProjects/Projects';
// Action Creators
import { notified } from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  projects: state.createProject.projectsAPI,
  isNotified: state.createProject.isNotified,
  userHasVoted: state.createProject.userHasVoted,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  notified: () => {
    dispatch(notified());
  },
});

/**
 * Connect
 */
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

/**
 * Export
 */
export default ProjectsContainer;
