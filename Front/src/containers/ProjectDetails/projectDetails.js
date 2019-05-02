/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProjectDetails from 'src/components/ProjectDetails/ProjectDetails';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  userHasVoted: state.project.userHasVoted,
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
