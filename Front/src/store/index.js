/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';

// Middleware
import ajaxMiddleware from './middlewares/ajax';

// Compose : les extensions/outils + les middlewares custom
// On utilise la fonction `compose` des redux devtools si elle existe sinon celle de redux
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Composition des enhancers
const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware),
);

/**
 * Store
 */
// Store, configuré avec le reducer et les "enhancers"
const store = createStore(
  reducer,
  enhancers,
);

/**
 * Export
 */
export default store;
