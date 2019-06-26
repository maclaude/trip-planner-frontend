/**
 * Initial State
 */
const initialState = {
  name: '',
  email: '',
  errors: [],
};

/**
 * Types
 */
const CHANGE_PARTICIPANTS_INPUTS = 'CHANGE_PARTICIPANTS_INPUTS';
const SHOW_PARTICIPANTS_ERRORS = 'SHOW_PARTICIPANTS_ERRORS';
export const SEND_INVITATION = 'SEND_INVITATION';

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

export const sendInvitation = (projectId, projectTitle) => ({
  type: SEND_INVITATION,
  projectId,
  projectTitle,
});

/**
 * Export
 */
export default reducer;
