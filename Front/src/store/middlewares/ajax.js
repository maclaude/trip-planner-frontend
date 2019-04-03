/* eslint-disable no-console */
/**
 * Npm import
 */
import axios from 'axios';

/**
 * Local import
 */
import { ADD_NEW_USER } from 'src/store/reducers/signup';
import { CONNECT_USER, setToken } from 'src/store/reducers/login';
import { SEND_SUGGESTION } from 'src/store/reducers/ideas';
import { NEW_PROJECT, ADD_DATES, GET_PROJECTS } from 'src/store/reducers/createProject';

/**
 * Middleware
 */
const ajaxMiddleware = store => next => (action) => {
  // Récuperation du state
  const state = store.getState();

  switch (action.type) {
    case ADD_NEW_USER: {
      // Création de l'objet newUser
      const newUser = {
        firstname: state.signup.firstname,
        lastname: state.signup.lastname,
        email: state.signup.email,
        password: state.signup.password,
      };

      console.log('Requête AJAX pour inscrire le nouvel utilisateur', newUser);

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

      console.log('Requête AJAX pour connecter l\'utilisateur', user);

      axios.post('http://127.0.0.1:8000/api/login_check', user)
        .then(response => (
          store.dispatch(setToken(response.data.token))
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
        suggestionGender: '/api/suggestion_genders/1',
        project: '/api/projects/1',
        user: '/api/users/1',
      };

      console.log('Requête AJAX inscrire la nouvelle suggestion', newSuggestion);

      axios.post('http://127.0.0.1:8000/api/suggestions', newSuggestion)
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
        owner: '/api/users/1',
      };

      console.log('Requête AJAX inscrire le nouveau projet', newProject);

      axios.post('http://127.0.0.1:8000/api/projects', newProject)
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

      console.log('Requête AJAX inscrire les suggestions de dates', addDates);

      axios.post('http://127.0.0.1:8000/api/project_dates', addDates)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case GET_PROJECTS: {
      console.log('Requête AJAX pour récupérer les projets');

      axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => console.log(response))
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
