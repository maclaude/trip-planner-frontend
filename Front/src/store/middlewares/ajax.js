/* eslint-disable no-console */
/**
 * Npm import
 */
import axios from 'axios';

/**
 * Local import
 */
import { ADD_NEW_USER } from 'src/store/reducer';

/**
 * Middleware
 */
const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case ADD_NEW_USER: {
      const state = store.getState();

      // Création de l'objet newUser
      const newUser = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
      };

      console.log('Requête AJAX pour inscrire le nouvel utilisateur', newUser);

      axios.post('url', newUser)
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
