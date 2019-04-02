/**
 * Initial State
 */
const initialState = {
  email: '',
  password: '',
  errors: [],
  loggedIn: false,
  token: '',
};

/**
 * Types
 */
const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
const SHOW_LOGIN_ERRORS = 'SHOW_LOGIN_ERRORS';
export const CONNECT_USER = 'CONNECT_USER';
export const SET_TOKEN = 'SET_TOKEN';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SHOW_LOGIN_ERRORS:
      return {
        ...state,
        password: '',
        errors: action.errors,
      };

    case CONNECT_USER:
      return {
        ...state,
        email: '',
        password: '',
        // @TODO
        // Si le retour de la requête de connexion est 200 set true
        // Action dédiée dans ajaxMiddleware ?
        loggedIn: true,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeLoginInputs = (name, value) => ({
  type: CHANGE_LOGIN_INPUTS,
  name,
  value,
});

export const showLoginErrors = errors => ({
  type: SHOW_LOGIN_ERRORS,
  errors,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
