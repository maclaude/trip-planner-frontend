/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProjectDetails from 'src/components/ProjectDetails';
import { getCurrentProject } from 'src/store/reducers/user';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = (state, { match: { params } }) => ({
  project: getCurrentProject(state.user.projects, params.slug),
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
