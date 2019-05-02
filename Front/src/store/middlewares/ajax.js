/* eslint-disable no-console */
/**
 * NPM import
 */
import axios from 'axios';

/**
 * Local import
 */
import { ADD_NEW_USER } from 'src/store/reducers/signup';

import {
  CONNECT_USER,
  GET_USER_INFO,
  // setToken,
  // stockUserInfo,
} from 'src/store/reducers/login';

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
  // Get the state
  const state = store.getState();

  // axiosToken configuration
  const axiosToken = axios.create({
    baseURL: 'baseURL',
    headers: { Authorization: `Bearer ${state.login.token}` },
  });


  switch (action.type) {
    case ADD_NEW_USER: {
      /*
      // newUser object creation
      const newUser = {
        firstname: state.signup.firstname,
        lastname: state.signup.lastname,
        email: state.signup.email,
        password: state.signup.password,
      };

      console.log('AJAX - addUser');

      axios.post('URL', newUser)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));
      */

      break;
    }

    case CONNECT_USER: {
      /*
      const user = {
        email: state.login.email,
        password: state.login.password,
      };

      console.log('AJAX - connectUser');

      axios.post('URL', user)
        .then((response) => {
          console.log(response.data);
          return store.dispatch(setToken(response.data.token));
        })
        .catch(() => console.error('Request has failed'));
      */

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
        user: `/api/users/${state.login.user.id}`,
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
        owner: `/api/users/${state.login.user.id}`,
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
