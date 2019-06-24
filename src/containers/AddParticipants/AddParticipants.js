/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Component
import AddParticipants from 'src/components/AddParticipants/AddParticipants';

// Action Creators & Selectors
import {
  changeParticipantsInputs,
  showParticipantsErrors,
  sendInvitation,
  getInvitedParticipants,
} from 'src/store/reducers/participants';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = (state, ownProps) => ({
  name: state.participants.name,
  email: state.participants.email,
  errors: state.participants.errors,
  invitedParticipants: getInvitedParticipants(
    state.participants.invitationList,
    ownProps.project.id,
  ),
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInput: (name, value) => {
    dispatch(changeParticipantsInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showParticipantsErrors(errors));
  },
  sendInvitation: () => {
    dispatch(sendInvitation(ownProps.project.id));
  },
});

/**
 * Connect
 */
const AddParticipantsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddParticipants);

/**
 * Export
 */
export default AddParticipantsContainer;
