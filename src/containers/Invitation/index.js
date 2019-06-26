/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import InvitationView from 'src/components/Invitation';

// Action Creators
import { storeInvitationProjectId } from 'src/store/reducers/user';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = null;

// === Actions ===
const mapDispatchToProps = (dispatch, { match: { params } }) => ({
  storeInvitationProjectId: () => {
    dispatch(storeInvitationProjectId(params.projectId));
  },
});

/**
 * Connect
 */
const InvitationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvitationView);

/**
 * Export
 */
export default InvitationViewContainer;
