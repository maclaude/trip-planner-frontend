/* eslint-disable no-console */
/**
 * NPM import
 */
import Geocode from 'react-geocode';

/**
 * Local import
 */
import {
  GET_DESTINATION_COORDINATES,
  storeDestinationCoordinates,
  createNewProject,
} from 'src/store/reducers/project';

/**
 * Middleware
 */
const geocodeMiddleware = store => next => (action) => {
  // set Google Maps Geocoding API key
  Geocode.setApiKey('/* API Key */');

  const state = store.getState();

  switch (action.type) {
    case GET_DESTINATION_COORDINATES: {
      // Set destination
      const destination = {
        name: state.project.destination,
      };

      // Get latidude & longitude from address.
      Geocode.fromAddress(destination.name).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          store.dispatch(storeDestinationCoordinates(lat, lng));
          store.dispatch(createNewProject());
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
