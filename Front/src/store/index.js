/**
 * Npm import
 */
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

/**
 * Local import
 */
// Reducers
import signup from 'src/store/reducers/signup';
import login from 'src/store/reducers/login';
import ideas from 'src/store/reducers/ideas';
import createProject from 'src/store/reducers/createProject';
import participants from 'src/store/reducers/participants';

// Middleware
import ajaxMiddleware from './middlewares/ajax';
import gecodeMiddleware from './middlewares/geocode';

// Compose : les extensions/outils + les middlewares custom
// On utilise la fonction `compose` des redux devtools si elle existe sinon celle de redux
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Composition des enhancers
const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware, gecodeMiddleware),
);

const rootReducer = combineReducers({
  signup,
  login,
  ideas,
  createProject,
  participants,
});

/**
 * Store
 */
// Store, configuré avec le reducer et les "enhancers"
const store = createStore(
  rootReducer,
  enhancers,
);

/**
 * Export
 */
export default store;
