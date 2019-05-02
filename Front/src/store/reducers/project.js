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
  startDate: '',
  endDate: '',
  suggestedDates: [],
  errors: [],
  isLoading: false,
  loaded: false,
  isNotified: false,
  userHasVoted: false,
  projectsData: projectsDataSample,
};

/**
 * Types
 */
export const GET_PROJECTS = 'GET_PROJECTS';
const STOCK_PROJECTS = 'STOCK_PROJECTS';
const CHANGE_PROJECT_INPUTS = 'CHANGE_PROJECT_INPUTS';
const SHOW_NEWPROJECT_ERRORS = 'SHOW_NEWPROJECT_ERRORS';
export const ADD_DATES = 'ADD_DATES';
export const NEW_PROJECT = 'NEW_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';
const NOTIFY = 'NOTIFY';
const USER_HAS_VOTED = 'USER_HAS_VOTED';

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

    case SET_PROJECT: {
      const newProject = {
        title: state.title,
        description: state.description,
        destination: state.destination,
        lat: action.lat,
        lng: action.lng,
      };

      const newProjectsData = [...state.projectsData, newProject];

      return {
        ...state,
        projectsData: newProjectsData,
        title: '',
        description: '',
        destination: '',
      };
    }

    case SHOW_NEWPROJECT_ERRORS:
      return {
        ...state,
        errors: action.errors,
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
export const changeProjectInputs = (name, value) => ({
  type: CHANGE_PROJECT_INPUTS,
  name,
  value,
});

export const newProject = () => ({
  type: NEW_PROJECT,
});

export const setProject = (lat, lng) => ({
  type: SET_PROJECT,
  lat,
  lng,
});

export const showNewProjectErrors = errors => ({
  type: SHOW_NEWPROJECT_ERRORS,
  errors,
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
