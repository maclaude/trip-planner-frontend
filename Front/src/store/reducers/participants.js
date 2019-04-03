/**
 * Initial State
 */
const initialState = {
  name: '',
  email: '',
  errors: [],
  invitationList: [],
};

/**
 * Types
 */
const CHANGE_PARTICIPANTS_INPUTS = 'CHANGE_PARTICIPANTS_INPUTS';
const SHOW_PARTICIPANTS_ERRORS = 'SHOW_PARTICIPANTS_ERRORS';
const SEND_INVITATION = 'SEND_INVITATION';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PARTICIPANTS_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SHOW_PARTICIPANTS_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case SEND_INVITATION: {
      const newInvitation = {
        project_id: action.projectId,
        name: state.name,
        email: state.email,
      };

      const newInvitationList = [...state.invitationList, newInvitation];

      return {
        ...state,
        name: '',
        email: '',
        errors: [],
        invitationList: newInvitationList,
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeParticipantsInputs = (name, value) => ({
  type: CHANGE_PARTICIPANTS_INPUTS,
  name,
  value,
});

export const showParticipantsErrors = errors => ({
  type: SHOW_PARTICIPANTS_ERRORS,
  errors,
});

export const sendInvitation = projectId => ({
  type: SEND_INVITATION,
  projectId,
});

/**
 * Selectors
 */
export const getInvitedParticipants = (invitationList, projectId) => ([
  ...invitationList.filter(invitation => invitation.project_id === projectId),
]);

/**
 * Export
 */
export default reducer;
