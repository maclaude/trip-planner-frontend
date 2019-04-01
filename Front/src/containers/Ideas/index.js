/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Ideas from 'src/components/Ideas';
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
const IdeasContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ideas);

/**
 * Export
 */
export default IdeasContainer;
