/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Availability from 'src/components/Availability';
import { getCurrentProject } from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = (state, { match: { params } }) => ({
  project: getCurrentProject(state.createProject.projectsAPI, params.slug),
});

// === Actions ===
const mapDispatchToProps = {};

/**
 * Connect
 */
const AvailabilityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Availability);

/**
 * Export
 */
export default AvailabilityContainer;
