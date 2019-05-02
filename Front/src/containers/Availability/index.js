/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Availability from 'src/components/Availability';
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
const AvailabilityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Availability);

/**
 * Export
 */
export default AvailabilityContainer;
