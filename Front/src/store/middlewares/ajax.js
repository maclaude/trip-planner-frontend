/* eslint-disable no-console */
/**
 * Npm import
 */
import axios from 'axios';

/**
 * Local import
 */
import { ADD_NEW_USER } from 'src/store/reducers/signup';
import { CONNECT_USER } from 'src/store/reducers/login';
import { SEND_SUGGESTION } from 'src/store/reducers/ideas';
import { NEW_PROJECT, ADD_DATES } from 'src/store/reducers/CreateProject';

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

      axios.post('url', user)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }

    case SEND_SUGGESTION: {
      // Objet newSuggestion à envoyer au back
      const newSuggestion = {
        type: state.ideas.type,
        title: state.ideas.title,
        description: state.ideas.description,
        link: state.ideas.link,
        price: state.ideas.price,
      };

      console.log('Requête AJAX inscrire la nouvelle suggestion', newSuggestion);

      axios.post('url', newSuggestion)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }
    case NEW_PROJECT: {
      // Objet newProject à envoyer au back
      const newProject = {
        title: state.CreateProject.title,
        description: state.CreateProject.description,
        destination: state.CreateProject.destination,
        user: state.CreateProject.user,
        owner: state.login.email,
      };

      console.log('Requête AJAX inscrire le nouveau projet', newProject);

      axios.post('127.0.0.1:8000/api/projects', newProject)
        .then(response => console.log(response))
        .catch(() => console.error('Request has failed'));

      break;
    }
    case ADD_DATES: {
      // Objet addDates à envoyer au back
      const addDates = {
        starDate: state.CreateProject.debutDates,
        endDate: state.CreateProject.endDates,
      };

      console.log('Requête AJAX inscrire les suggestions de dates', addDates);

      axios.post('127.0.0.1:8000/api/project_dates', addDates)
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
