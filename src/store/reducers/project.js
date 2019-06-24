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
};

/**
 * Types
 */
const CLEAR_PROJECT_STATE = 'CLEAR_PROJECT_STATE';
const STORE_SERVER_RESPONSE_MESSAGE = 'STORE_SERVER_RESPONSE_MESSAGE';

const CHANGE_NEWPROJECT_INPUTS = 'CHANGE_NEWPROJECT_INPUTS';
const SHOW_NEWPROJECT_ERRORS = 'SHOW_NEWPROJECT_ERRORS';
export const GET_DESTINATION_COORDINATES = 'GET_DESTINATION_COORDINATES';
export const STORE_DESTINATION_COORDINATES = 'STORE_DESTINATION_COORDINATES';
export const CREATE_NEWPROJECT = 'CREATE_NEWPROJECT';
const STORE_NEWPROJECT_RESPONSE = 'STORE_NEWPROJECT_RESPONSE';

export const ADD_PROJECT_DATES = 'ADD_PROJECT_DATES';
export const SHOW_ADD_PROJECT_DATES_ERRORS = 'SHOW_ADD_PROJECT_DATES_ERRORS';
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
        errors: [],
        serverResponseMessage: '',
      };

    case STORE_SERVER_RESPONSE_MESSAGE:
      return {
        ...state,
        serverResponseMessage: action.message,
      };

    case CHANGE_NEWPROJECT_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
        serverResponseMessage: '',
      };

    case SHOW_NEWPROJECT_ERRORS:
      return {
        ...state,
        errors: action.errors,
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

    case ADD_PROJECT_DATES:
      return {
        ...state,
        startDate: '',
        endDate: '',
        errors: [],
      };

    case SHOW_ADD_PROJECT_DATES_ERRORS:
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
export const clearProjectState = () => ({
  type: CLEAR_PROJECT_STATE,
});

export const storeServerResponseMessage = message => ({
  type: STORE_SERVER_RESPONSE_MESSAGE,
  message,
});

export const changeNewProjectInputs = (name, value) => ({
  type: CHANGE_NEWPROJECT_INPUTS,
  name,
  value,
});

export const showNewProjectErrors = errors => ({
  type: SHOW_NEWPROJECT_ERRORS,
  errors,
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

export const addProjectDates = projectId => ({
  type: ADD_PROJECT_DATES,
  projectId,
});

export const showAddProjectDatesErrors = errors => ({
  type: SHOW_ADD_PROJECT_DATES_ERRORS,
  errors,
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
