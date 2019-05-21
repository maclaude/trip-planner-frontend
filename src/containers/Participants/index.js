/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Participants from 'src/components/Participants';
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
const ParticipantsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Participants);

/**
 * Export
 */
export default ParticipantsContainer;
