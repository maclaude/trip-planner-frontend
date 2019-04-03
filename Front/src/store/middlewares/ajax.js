/* eslint-disable no-console */
/**
 * Npm import
 */
import axios from 'axios';

/**
 * Local import
 */
import { ADD_NEW_USER } from 'src/store/reducers/signup';
import { CONNECT_USER, GET_USER_INFO, setToken } from 'src/store/reducers/login';
import { SEND_SUGGESTION } from 'src/store/reducers/ideas';
import {
  NEW_PROJECT,
  ADD_DATES,
  GET_PROJECTS,
  stockProjects,
} from 'src/store/reducers/createProject';

/**
 * Middleware
 */
const ajaxMiddleware = store => next => (action) => {
  // Récuperation du state
  const state = store.getState();

  // Configuration de l'instance axiosToken
  const axiosToken = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: { Authorization: `Bearer ${state.login.token}` },
  });


  switch (action.type) {
    case ADD_NEW_USER: {
      // Création de l'objet newUser
      const newUser = {
        firstname: state.signup.firstname,
        lastname: state.signup.lastname,
        email: state.signup.email,
        password: state.signup.password,
      };

      console.log('AJAX - addUser');

      axios.post('http://127.0.0.1:8000/api/users', newUser)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case CONNECT_USER: {
      // Objet user à envoyer au back
      const user = {
        email: state.login.email,
        password: state.login.password,
      };

      console.log('AJAX - connectUser');

      axios.post('http://127.0.0.1:8000/api/login_check', user)
        .then((response) => {
          console.log(response.data);
          return store.dispatch(setToken(response.data.token));
        })
        .catch(() => console.error('Request has failed'));

      break;
    }

    case GET_USER_INFO: {
      console.log('AJAX - getUserInfo');

      axiosToken.get('user/info')
        .then(response => (
          console.log(response.data)
        ))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case SEND_SUGGESTION: {
      // Objet newSuggestion à envoyer au back
      const newSuggestion = {
        name: state.ideas.name,
        description: state.ideas.description,
        url: state.ideas.url,
        price: parseInt(state.ideas.price, 10),
        suggestionGender: `/api/suggestion_genders/${state.ideas.type}`,
        project: '/api/projects/7',
        user: '/api/users/3',
      };

      console.log('AJAX - addSuggestion');

      axiosToken.post('suggestions', newSuggestion)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case NEW_PROJECT: {
      // Objet newProject à envoyer au back
      const newProject = {
        title: state.createProject.title,
        description: state.createProject.description,
        destination: state.createProject.destination,
        owner: '/api/users/3',
      };

      console.log('AJAX - addNewProject', newProject);

      axiosToken.post('projects', newProject)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case ADD_DATES: {
      // Objet addDates à envoyer au back
      const addDates = {
        starDate: state.createProject.debutDates,
        endDate: state.createProject.endDates,
        project: '/api/projects/1',
      };

      console.log('AJAX - addDatesSuggestion', addDates);

      axiosToken.post('project_dates', addDates)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case GET_PROJECTS: {
      console.log('AJAX - getProjects');

      axiosToken.get('projects')
        .then((response) => {
          console.log(response.data);
          return (
            store.dispatch(stockProjects(response.data['hydra:member']))
          );
        })
        .catch(() => console.error('Request has failed'));

      break;
    }

    default:
      break;
  }

  // Passer au voisin
  next(action);
};

/**
 * Export
 */
export default ajaxMiddleware;
