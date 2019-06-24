/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Participants from 'src/components/AddParticipants';
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
const ParticipantsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Participants);

/**
 * Export
 */
export default ParticipantsContainer;
