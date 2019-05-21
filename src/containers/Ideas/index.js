/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Ideas from 'src/components/Ideas';
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
const IdeasContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ideas);

/**
 * Export
 */
export default IdeasContainer;
