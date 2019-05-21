/* eslint-disable no-console */
/**
 * NPM import
 */
import Geocode from 'react-geocode';

/**
 * Local import
 */
import { NEW_PROJECT, setProject } from 'src/store/reducers/project';

/**
 * Middleware
 */
const geocodeMiddleware = store => next => (action) => {
  // set Google Maps Geocoding API key
  Geocode.setApiKey('/* API Key */');

  const state = store.getState();

  switch (action.type) {
    case NEW_PROJECT: {
      // Set destination
      const destination = {
        name: state.project.destination,
      };

      // Get latidude & longitude from address.
      Geocode.fromAddress(destination.name).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          store.dispatch(setProject(lat, lng));
        },
        (error) => {
          console.error(error);
        },
      );

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
export default geocodeMiddleware;
