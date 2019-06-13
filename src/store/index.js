/**
 * NPM import
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
import authentication from 'src/store/reducers/authentication';
import participants from 'src/store/reducers/participants';
import project from 'src/store/reducers/project';
import suggestions from 'src/store/reducers/suggestions';
import user from 'src/store/reducers/user';


// Middlewares
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
  authentication,
  participants,
  project,
  suggestions,
  user,
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
