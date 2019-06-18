/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProjectDetails from 'src/components/ProjectDetails';
import { getCurrentProject } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, { match: { params } }) => ({
  project: getCurrentProject(state.project.projectsData, params.slug),
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