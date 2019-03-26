/**
 * Initial State
 */
const initialState = {
  title: '',
  description: '',
  debutDates: '',
  endDates: '',
  dateSuggest: [],
  destination: '',
  user: '',
  errors: [],
};

/**
 * Types
 */
const CHANGE_PROJECT_INPUTS = 'CHANGE_PROJECT_INPUTS';
const SHOW_NEWPROJECT_ERRORS = 'SHOW_NEWPROJECT_ERRORS';
const ADD_DATES = 'ADD_DATES';
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
    case NEW_PROJECT:
      return {
        ...state,
        title: '',
        description: '',
        debutDates: '',
        endDates: '',
        destination: '',
        user: '',
      };
    case SHOW_NEWPROJECT_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case ADD_DATES:
      return {
        ...state,
        debutDates: '',
        endDates: '',
        dateSuggest: action.dateSuggest,
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
export const addDates = dateSuggest => ({
  type: ADD_DATES,
  dateSuggest,
});

/**
 * Export
 */
export default reducer;
