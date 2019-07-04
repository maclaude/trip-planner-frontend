/**
 * Initial State
 */
const initialState = {
  id: '',
  title: '',
  description: '',
  destination: '',
  destinationLat: '',
  destinationLng: '',
  startDate: '',
  endDate: '',
  suggestedDates: [],
  errors: [],
  serverResponseMessage: '',
  userRole: '',
};

/**
 * Types
 */
const CLEAR_PROJECT_STATE = 'CLEAR_PROJECT_STATE';
const STORE_SERVER_RESPONSE_MESSAGE = 'STORE_SERVER_RESPONSE_MESSAGE';
const SHOW_PROJECT_FORMS_ERRORS = 'SHOW_PROJECT_FORMS_ERRORS';

const CHANGE_NEWPROJECT_INPUTS = 'CHANGE_NEWPROJECT_INPUTS';
export const GET_DESTINATION_COORDINATES = 'GET_DESTINATION_COORDINATES';
export const STORE_DESTINATION_COORDINATES = 'STORE_DESTINATION_COORDINATES';
export const CREATE_NEWPROJECT = 'CREATE_NEWPROJECT';
const STORE_NEWPROJECT_RESPONSE = 'STORE_NEWPROJECT_RESPONSE';

export const GET_PROJECT_USER_ROLE = 'GET_PROJECT_USER_ROLE';
const STORE_PROJECT_USER_ROLE = 'STORE_PROJECT_USER_ROLE';

export const ADD_PROJECT_DATES = 'ADD_PROJECT_DATES';
export const DELETE_PROJECT_DATES = 'DELETE_PROJECT_DATES';
export const VOTE_PROJECT_DATES = 'VOTE_PROJECT_DATES';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAR_PROJECT_STATE:
      return {
        ...state,
        id: '',
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        errors: [],
        serverResponseMessage: '',
      };

    case STORE_SERVER_RESPONSE_MESSAGE:
      return {
        ...state,
        serverResponseMessage: action.message,
      };

    case SHOW_PROJECT_FORMS_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case CHANGE_NEWPROJECT_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
        serverResponseMessage: '',
      };

    case STORE_DESTINATION_COORDINATES:
      return {
        ...state,
        destinationLat: action.lat,
        destinationLng: action.lng,
      };

    case CREATE_NEWPROJECT:
      return {
        ...state,
        title: '',
        description: '',
        destination: '',
        destinationLat: '',
        destinationLng: '',
      };

    case STORE_NEWPROJECT_RESPONSE:
      return {
        ...state,
        serverResponseMessage: action.message,
        id: action.data.id,
        title: action.data.title,
      };

    case STORE_PROJECT_USER_ROLE:
      return {
        ...state,
        userRole: action.role,
      };

    case ADD_PROJECT_DATES:
      return {
        ...state,
        errors: [],
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const clearProjectState = () => ({
  type: CLEAR_PROJECT_STATE,
});

export const storeServerResponseMessage = message => ({
  type: STORE_SERVER_RESPONSE_MESSAGE,
  message,
});

export const showProjectFormsErrors = errors => ({
  type: SHOW_PROJECT_FORMS_ERRORS,
  errors,
});

export const changeNewProjectInputs = (name, value) => ({
  type: CHANGE_NEWPROJECT_INPUTS,
  name,
  value,
});

export const getDestinationCoordinates = () => ({
  type: GET_DESTINATION_COORDINATES,
});

export const storeDestinationCoordinates = (lat, lng) => ({
  type: STORE_DESTINATION_COORDINATES,
  lat,
  lng,
});

export const createNewProject = () => ({
  type: CREATE_NEWPROJECT,
});

export const storeNewprojectResponse = (message, data) => ({
  type: STORE_NEWPROJECT_RESPONSE,
  message,
  data,
});

export const getProjectUserRole = projectId => ({
  type: GET_PROJECT_USER_ROLE,
  projectId,
});

export const storeProjectUserRole = role => ({
  type: STORE_PROJECT_USER_ROLE,
  role,
});

export const addProjectDates = projectId => ({
  type: ADD_PROJECT_DATES,
  projectId,
});

export const deleteProjectDates = (projectId, datesId) => ({
  type: DELETE_PROJECT_DATES,
  projectId,
  datesId,
});

export const voteProjectDates = datesId => ({
  type: VOTE_PROJECT_DATES,
  datesId,
});

/**
 * Export
 */
export default reducer;
