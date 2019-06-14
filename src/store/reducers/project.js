/**
 * Local import
 */
// Utils
import { getSlug } from 'src/utils/url';
// Projects data
import projectsDataSample from 'src/data/projectsData';

/**
 * Initial State
 */
const initialState = {
  title: '',
  description: '',
  destination: '',
  destinationLat: '',
  destinationLng: '',
  startDate: '',
  endDate: '',
  suggestedDates: [],
  errors: [],
  responseMessage: '',
  isLoading: false,
  loaded: false,
  isNotified: false,
  userHasVoted: false,
  projectsData: projectsDataSample,
};

/**
 * Types
 */
const CHANGE_NEWPROJECT_INPUTS = 'CHANGE_NEWPROJECT_INPUTS';
const SHOW_NEWPROJECT_ERRORS = 'SHOW_NEWPROJECT_ERRORS';
export const GET_DESTINATION_COORDINATES = 'GET_DESTINATION_COORDINATES';
export const STORE_DESTINATION_COORDINATES = 'STORE_DESTINATION_COORDINATES';
export const CREATE_NEWPROJECT = 'CREATE_NEWPROJECT';
const STORE_RESPONSE_MESSAGE = 'STORE_RESPONSE_MESSAGE';

export const GET_PROJECTS = 'GET_PROJECTS';
const STOCK_PROJECTS = 'STOCK_PROJECTS';
export const ADD_DATES = 'ADD_DATES';
const NOTIFY = 'NOTIFY';
const USER_HAS_VOTED = 'USER_HAS_VOTED';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEWPROJECT_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
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

    case STORE_RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.message,
      };


    case ADD_DATES: {
      const newDates = {
        startDate: state.startDate,
        endDate: state.endDate,
      };

      const suggestedDates = [...state.suggestedDates, newDates];

      return {
        ...state,
        startDate: '',
        endDate: '',
        suggestedDates,
      };
    }

    case GET_PROJECTS:
      return {
        ...state,
        isLoading: true,
        loaded: true, // Temporary without database
      };

    case STOCK_PROJECTS:
      return {
        ...state,
        projectsData: action.data,
        isLoading: false,
        loaded: true,
      };

    case NOTIFY:
      return {
        ...state,
        isNotified: true,
      };

    case USER_HAS_VOTED:
      return {
        ...state,
        userHasVoted: true,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
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

export const storeResponseMessage = message => ({
  type: STORE_RESPONSE_MESSAGE,
  message,
});

export const addDates = projectId => ({
  type: ADD_DATES,
  projectId,
});

export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const stockProjects = data => ({
  type: STOCK_PROJECTS,
  data,
});

export const notified = () => ({
  type: NOTIFY,
});

export const userHasVoted = () => ({
  type: USER_HAS_VOTED,
});

/**
 * Selector
 */
export const getCurrentProject = (projects, slug) => (
  projects.find(project => getSlug(project.title) === slug)
);

/**
 * Export
 */
export default reducer;
