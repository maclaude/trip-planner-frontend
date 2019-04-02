/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Participants from 'src/components/Participants';
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
const ParticipantsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Participants);

/**
 * Export
 */
export default ParticipantsContainer;
