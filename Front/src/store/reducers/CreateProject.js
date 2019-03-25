/**
 * Initial State
 */
const initialState = {
  title: '',
  description: '',
  debutDates: '',
  endDates: '',
  destination: '',
  participants: '',
  errors: [],
};

/**
 * Types
 */
const CHANGE_PROJECT_INPUTS = 'CHANGE_PROJECT_INPUTS';
const SHOW_NEWPROJECT_ERRORS = 'SHOW_NEWPROJECT_ERRORS';
export const NEW_PROJECT = 'NEW_PROJECT';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROJECT_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
      };
    case NEW_PROJECT: {
      return {
        ...state,
        title: '',
        description: '',
        debutDates: '',
        endDates: '',
        destination: '',
        participants: '',
      };
    }
    case SHOW_NEWPROJECT_ERRORS:
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
export const changeProjectInputs = (name, value) => ({
  type: CHANGE_PROJECT_INPUTS,
  name,
  value,
});
export const newProject = () => ({
  type: NEW_PROJECT,
});
export const showNewprojectErrors = errors => ({
  type: SHOW_NEWPROJECT_ERRORS,
  errors,
});

/**
 * Export
 */
export default reducer;
