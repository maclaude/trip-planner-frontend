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
export const ADD_DATES = 'ADD_DATES';
export const NEW_PROJECT = 'NEW_PROJECT';
export const GET_PROJECTS = 'GET_PROJECTS';

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

    case ADD_DATES: {
      // Creation de l'objet date suggéré
      const date = {
        date_de_debut: state.debutDates,
        date_de_fin: state.endDates,
      };

      // Creation du nouveau tableau de date
      const dateSuggest = [...state.dateSuggest, date];
      return {
        ...state,
        debutDates: '',
        endDates: '',
        dateSuggest,
      };
    }

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

export const addDates = () => ({
  type: ADD_DATES,
});

export const getProjects = () => ({
  type: GET_PROJECTS,
});

/**
 * Export
 */
export default reducer;
