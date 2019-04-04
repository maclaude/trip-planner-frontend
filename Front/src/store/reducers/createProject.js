/**
 * Import
 */
// Utils
import { getSlug } from 'src/utils/url';
// Local data
import projectsData from 'src/data/projectsAPI';
import availabilityData from 'src/data/availability';

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
  projects: projectsData,
  projectsAPI: [],
  availability: availabilityData,
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

    case STOCK_PROJECTS:
      return {
        ...state,
        projectsAPI: action.data,
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

export const stockProjects = data => ({
  type: STOCK_PROJECTS,
  data,
});

/**
 * Selector
 */
export const getCurrentProject = (projects, slug) => (
  projects.find(project => getSlug(project.title) === slug)
);

export const getFilteredDates = (projectId, availability) => ([
  ...availability.filter(date => date.project_id === projectId),
]);

/**
 * Export
 */
export default reducer;
