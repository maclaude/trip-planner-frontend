/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Projects from 'src/components/Projects/Projects';
// Action Creators
import { notified } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  projects: state.project.projectsData,
  isNotified: state.project.isNotified,
  userHasVoted: state.project.userHasVoted,
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