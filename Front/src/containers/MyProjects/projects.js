/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Projects from 'src/components/MyProjects/Projects';

// Action Creators

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  projects: state.projects.projects,
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
