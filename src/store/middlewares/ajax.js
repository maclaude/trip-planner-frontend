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
  setStatusCreated,
  storeResponseErrorMessage,
  storeToken,
} from 'src/store/reducers/authentication';

import {
  GET_USER_PROJECTS,
  storeUserData,
  getUserProjects,
  storeUserProjects,
} from 'src/store/reducers/user';

import {
  CREATE_NEWPROJECT,
  ADD_PROJECT_DATES,
  storeNewprojectResponse,
} from 'src/store/reducers/project';

import {
  GET_SUGGESTIONS,
  SEND_SUGGESTION,
  // stockSuggestions,
} from 'src/store/reducers/suggestions';

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
        .then((response) => {
          console.log(response);
          store.dispatch(setStatusCreated());
        })
        .catch((error) => {
          console.log(error.response);
          store.dispatch(storeResponseErrorMessage(error.response.data.message));
        });

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
          store.dispatch(storeToken(response.data.token));
          store.dispatch(storeUserData(response.data.user));
          store.dispatch(storeUserProjects(response.data.user.projects));
        })
        .catch((error) => {
          console.log(error.response);
          store.dispatch(storeResponseErrorMessage(error.response.data.message));
        });

      break;
    }

    case CREATE_NEWPROJECT: {
      body = {
        title: state.project.title,
        description: state.project.description,
        destination: state.project.destination,
        lat: state.project.destinationLat,
        lng: state.project.destinationLng,
        userId: state.user.id,
      };

      axiosToken.post('http://localhost:8000/project/new-project', body)
        .then((response) => {
          console.log(response);
          store.dispatch(storeNewprojectResponse(response.data.message, response.data.data));
          store.dispatch(getUserProjects());
        })
        .catch(error => console.log(error));

      break;
    }

    case ADD_PROJECT_DATES: {
      body = {
        startDate: state.project.startDate,
        endDate: state.project.endDate,
        projectId: action.projectId,
      };

      axiosToken.post('http://localhost:8000/project/new-dates', body)
        .then((response) => {
          console.log(response);
          store.dispatch(getUserProjects());
        })
        .catch(error => console.log(error));

      break;
    }

    case GET_USER_PROJECTS: {
      axiosToken.get('http://localhost:8000/user/projects')
        .then((response) => {
          console.log(response);
          store.dispatch(storeUserProjects(response.data.userProjects));
        })
        .catch(error => console.log(error));

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
