/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Projects from 'src/components/Projects/Projects';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  projects: state.user.projects,
});

// === Actions ===
const mapDispatchToProps = {};

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
