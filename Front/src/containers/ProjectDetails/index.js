/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProjectDetails from 'src/components/ProjectDetails';
import { getCurrentProject } from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, { match: { params } }) => ({
  project: getCurrentProject(state.createProject.projects, params.slug),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const ProjectDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectDetails);

/**
 * Export
 */
export default ProjectDetailsContainer;
