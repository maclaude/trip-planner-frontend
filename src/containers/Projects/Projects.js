/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Projects from 'src/components/Projects/Projects';

// Action Creators
import { getUserInvitations, postUserInvitationResponse } from 'src/store/reducers/user';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  projects: state.user.projects,
  invitations: state.user.invitations,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  getUserInvitations: () => {
    dispatch(getUserInvitations());
  },
  postUserInvitationResponse: (response, projectId) => {
    dispatch(postUserInvitationResponse(response, projectId));
  },
});

/**
 * Connect
 */
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

/**
 * Export
 */
export default ProjectsContainer;
