/**
 * Import
 */
// Utils
import { getSlug } from 'src/utils/url';
// Local data
// import projectsDataSample from 'src/data/projectsAPI';

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
  isLoading: false,
  loaded: false,
  isNotified: false,
  userHasVoted: false,
  // projects: projectsDataSample,
  projectsAPI: [],
};

/**
 * Types
 */
export const GET_PROJECTS = 'GET_PROJECTS';
const STOCK_PROJECTS = 'STOCK_PROJECTS';
// const STOCK_USER_PROJECTS = 'STOCK_USER_PROJECTS';
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
        id: 90,
        title: state.title,
        description: state.description,
        destination: state.destination,
        owner: 'Marc-Antoine',
        user: [],
        projectDates: [],
        lat: action.lat,
        lng: action.lng,
      };

      const newProjectsAPI = [...state.projectsAPI, newProject];

      return {
        ...state,
        projectsAPI: newProjectsAPI,
        title: '',
        description: '',
        debutDates: '',
        endDates: '',
        destination: '',
        user: '',
      };
    }

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

    case GET_PROJECTS:
      return {
        ...state,
        isLoading: true,
      };

    case STOCK_PROJECTS:
      return {
        ...state,
        projectsAPI: action.data,
        loaded: true,
        isLoading: false,
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

      /*
    case STOCK_USER_PROJECTS:
      return {
        ...state,
        projectsAPI: action.data,
      };
      */

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

export const showNewprojectErrors = errors => ({
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

/*
export const stockUserProjects = data => ({
  type: STOCK_USER_PROJECTS,
  data,
});
*/

/**
 * Selector
 */
export const getCurrentProject = (projects, slug) => (
  projects.find(project => getSlug(project.title) === slug)
);

// export const getFilteredDates = (projectId, availability) => ([
//   ...availability.filter(date => date.project_id === projectId),
// ]);

/**
 * Export
 */
export default reducer;
