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
import CreateProject from 'src/store/reducers/CreateProject';
import projects from 'src/store/reducers/projects';

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

const rootReducer = combineReducers({
  signup,
  login,
  ideas,
  CreateProject,
  projects,
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
