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
  ADD_USER_INVITATION,
  GET_USER_INVITATIONS,
  POST_USER_INVITATION_RESPONSE,
  GET_USER_INFORMATIONS,
  UPDATE_USER_INFORMATIONS,
  storeUserData,
  getUserProjects,
  storeUserProjects,
  addUserInvitation,
  getUserInvitations,
  storeUserInvitations,
  storeUserInformations,
} from 'src/store/reducers/user';

import {
  CREATE_NEWPROJECT,
  ADD_PROJECT_DATES,
  DELETE_PROJECT_DATES,
  VOTE_PROJECT_DATES,
  GET_PROJECT_USER_ROLE,
  storeNewprojectResponse,
  storeProjectUserRole,
} from 'src/store/reducers/project';

import { SEND_INVITATION } from '../reducers/participants';

import {
  ADD_PROJECT_SUGGESTION,
  GET_PROJECT_SUGGESTIONS,
  VOTE_PROJECT_SUGGESTION,
  getProjectSuggestions,
  stockProjectSuggestions,
} from '../reducers/suggestions';

/**
 * Middleware
 */
const ajaxMiddleware = store => next => action => {
  const state = store.getState();

  // Request header auth token configuration
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

      axios.post('https://trip-planner-app-backend.herokuapp.com/auth/signup', body)
        .then(response => {
          console.log(response);
          store.dispatch(setStatusCreated());
        })
        .catch(error => {
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

      axios.post('https://trip-planner-app-backend.herokuapp.com/auth/login', body)
        .then(response => {
          console.log(response);
          store.dispatch(storeToken(response.data.token));
          store.dispatch(storeUserData(response.data.user));
          store.dispatch(storeUserProjects(response.data.user.projects));

          if (state.user.invitationProjectId) {
            store.dispatch(addUserInvitation());
          }
        })
        .catch(error => {
          console.log(error.response);
          store.dispatch(storeResponseErrorMessage(error.response.data.message));
        });

      break;
    }

    case GET_USER_PROJECTS: {
      axiosToken.get('https://trip-planner-app-backend.herokuapp.com/user/projects')
        .then(response => {
          console.log(response);
          store.dispatch(storeUserProjects(response.data.userProjects));
        })
        .catch(error => console.log(error));

      break;
    }

    case GET_PROJECT_USER_ROLE: {
      axiosToken.get(`https://trip-planner-app-backend.herokuapp.com/project/user-role/${action.projectId}`)
        .then(response => {
          console.log(response);
          store.dispatch(storeProjectUserRole(response.data.role));
        })
        .catch(error => console.log(error));

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

      axiosToken.post('https://trip-planner-app-backend.herokuapp.com/project/new-project', body)
        .then(response => {
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

      axiosToken.post('https://trip-planner-app-backend.herokuapp.com/project/new-dates', body)
        .then(response => {
          console.log(response);
          store.dispatch(getUserProjects());
        })
        .catch(error => console.log(error));

      break;
    }

    case DELETE_PROJECT_DATES: {
      body = {
        projectId: action.projectId,
        datesId: action.datesId,
      };

      axiosToken.delete('https://trip-planner-app-backend.herokuapp.com/project/delete-dates', { data: body })
        .then(response => {
          console.log(response);
          store.dispatch(getUserProjects());
        })
        .catch(error => console.log(error));

      break;
    }

    case VOTE_PROJECT_DATES: {
      body = { datesId: action.datesId };

      axiosToken.put('https://trip-planner-app-backend.herokuapp.com/project/vote-dates', body)
        .then(response => {
          console.log(response);
          store.dispatch(getUserProjects());
        })
        .catch(error => console.log(error));

      break;
    }

    case SEND_INVITATION: {
      body = {
        currentUsername: state.user.firstname,
        projectId: action.projectId,
        projectTitle: action.projectTitle,
        invitedUsername: state.participants.name,
        invitedUserEmail: state.participants.email,
      };

      axiosToken.post('https://trip-planner-app-backend.herokuapp.com/project/add-participants', body)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));

      break;
    }

    case ADD_USER_INVITATION: {
      body = { projectId: state.user.invitationProjectId };

      axiosToken.post('https://trip-planner-app-backend.herokuapp.com/user/invitation', body)
        .then(response => {
          console.log(response);
          store.dispatch(getUserInvitations());
        })
        .catch(error => console.log(error));

      break;
    }

    case GET_USER_INVITATIONS: {
      axiosToken.get('https://trip-planner-app-backend.herokuapp.com/user/invitations')
        .then(response => {
          console.log(response);
          store.dispatch(storeUserInvitations(response.data.userInvitations));
        })
        .catch(error => console.log(error));

      break;
    }

    case POST_USER_INVITATION_RESPONSE: {
      body = {
        response: action.response,
        projectId: action.projectId,
      };

      axiosToken.post('https://trip-planner-app-backend.herokuapp.com/user/invitation-response', body)
        .then(response => {
          console.log(response);
          store.dispatch(getUserProjects());
        })
        .catch(error => console.log(error));

      break;
    }

    case ADD_PROJECT_SUGGESTION: {
      body = {
        title: state.suggestions.title,
        description: state.suggestions.description,
        url: state.suggestions.url,
        price: parseInt(state.suggestions.price, 10),
        suggestionType: Number(state.suggestions.type),
        userId: state.user.id,
        projectId: action.projectId,
      };

      axiosToken.post('https://trip-planner-app-backend.herokuapp.com/project/new-suggestion', body)
        .then(response => {
          console.log(response);
          store.dispatch(getProjectSuggestions(action.projectId));
        })
        .catch(error => console.log(error));

      break;
    }

    case GET_PROJECT_SUGGESTIONS: {
      axiosToken.get(`https://trip-planner-app-backend.herokuapp.com/project/suggestions/${action.projectId}`)
        .then(response => {
          console.log(response);
          store.dispatch(stockProjectSuggestions(response.data.suggestions));
        })
        .catch(error => console.log(error));

      break;
    }

    case VOTE_PROJECT_SUGGESTION: {
      body = { suggestionId: action.suggestionId };

      axiosToken.put('https://trip-planner-app-backend.herokuapp.com/project/vote-suggestion', body)
        .then(response => {
          console.log(response);
          store.dispatch(getProjectSuggestions(action.projectId));
        })
        .catch(error => console.log(error));

      break;
    }

    case GET_USER_INFORMATIONS: {
      axiosToken.get('https://trip-planner-app-backend.herokuapp.com/user/informations')
        .then(response => {
          console.log(response);
          store.dispatch(storeUserInformations(response.data.user));
        })
        .catch(error => console.log(error));

      break;
    }

    case UPDATE_USER_INFORMATIONS: {
      body = {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email,
        avatar: state.user.avatar,
      };

      axiosToken.put('https://trip-planner-app-backend.herokuapp.com/user/informations', body)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));

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
