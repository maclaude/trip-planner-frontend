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

      axios.post('url', newUser)
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
