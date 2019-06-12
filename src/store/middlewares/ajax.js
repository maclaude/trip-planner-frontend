/* eslint-disable no-console */
/**
 * NPM import
 */
import axios from 'axios';

/**
 * Local import
 */
import {
  ADD_NEW_USER,
  CONNECT_USER,
  GET_USER_INFO,
  setToken,
  // stockUserInfo,
} from 'src/store/reducers/authentication';

import {
  GET_SUGGESTIONS,
  SEND_SUGGESTION,
  // stockSuggestions,
} from 'src/store/reducers/suggestions';

import {
  SET_PROJECT,
  ADD_DATES,
  GET_PROJECTS,
  // stockProjects,
} from 'src/store/reducers/project';

/**
 * Middleware
 */
const ajaxMiddleware = store => next => (action) => {
  // Get state
  const state = store.getState();

  // Request header Authorization Bearer token configuration
  const axiosToken = axios.create({
    headers: { Authorization: `Bearer ${state.authentication.token}` },
  });

  // Request body init
  let body;

  switch (action.type) {
    case ADD_NEW_USER: {
      body = {
        firstname: state.authentication.firstname,
        lastname: state.authentication.lastname,
        email: state.authentication.email,
        password: state.authentication.password,
      };

      axios.post('http://localhost:8000/auth/signup', body)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case CONNECT_USER: {
      body = {
        email: state.authentication.email,
        password: state.authentication.password,
      };

      axios.post('http://localhost:8000/auth/login', body)
        .then((response) => {
          console.log(response);
          store.dispatch(setToken(response.data.token));
        })
        .catch(() => console.error('Request has failed'));

      break;
    }

    case GET_USER_INFO: {
      /*
      console.log('AJAX - getUserInfo');

      axiosToken.get('URL')
        .then((response) => {
          console.log(response.data);
          store.dispatch(stockUserInfo(response.data));
        })
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    case GET_SUGGESTIONS: {
      /*
      console.log('AJAX - getSuggestions');

      axiosToken.get('URL')
        .then((response) => {
          console.log(response.data);
          store.dispatch(stockSuggestions(response.data['hydra:member']));
        })
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    case SEND_SUGGESTION: {
      /*
      // newSuggestion object creation
      const newSuggestion = {
        name: state.suggestions.name,
        description: state.suggestions.description,
        url: state.suggestions.url,
        price: parseInt(state.suggestions.price, 10),
        suggestionGender: `/api/suggestion_genders/${state.suggestions.type}`,
        project: `/api/projects/${action.projectId}`,
        user: `/api/users/${state.authentication.user.id}`,
      };

      console.log('AJAX - addSuggestion');

      axiosToken.post('URL', newSuggestion)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    case SET_PROJECT: {
      /*
      // newProject object creation
      const newProject = {
        title: state.project.title,
        description: state.project.description,
        destination: state.project.destination,
        owner: `/api/users/${state.authentication.user.id}`,
        lat: action.lat,
        lng: action.lng,
      };

      console.log('AJAX - addNewProject');

      axiosToken.post('URL', newProject)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    case ADD_DATES: {
      /*
      const addDates = {
        startDate: state.project.startDate,
        endDate: state.project.endDate,
        project: `/api/projects/${action.projectId}`,
      };

      console.log('AJAX - addDatesSuggestion');

      axiosToken.post('URL', addDates)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    case GET_PROJECTS: {
      /*
      console.log('AJAX - getProjects');

      axiosToken.get('URL')
        .then((response) => {
          console.log(response.data);
          return (
            store.dispatch(stockProjects(response.data['hydra:member']))
          );
        })
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    default:
      break;
  }

  // Action goes to the next step
  next(action);
};

/**
 * Export
 */
export default ajaxMiddleware;
