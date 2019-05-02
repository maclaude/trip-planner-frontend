/**
 * Initial State
 */
const initialState = {
  email: '',
  password: '',
  errors: [],
  loggedIn: false,
  token: '',
  user: {},
};

/**
 * Types
 */
const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
const SHOW_LOGIN_ERRORS = 'SHOW_LOGIN_ERRORS';
export const CONNECT_USER = 'CONNECT_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_USER_INFO = 'GET_USER_INFO';
const STOCK_USER_INFO = 'STOCK_USER_INFO';

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
        loggedIn: true, // Temporary without database
        email: '',
        password: '',
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        loggedIn: true,
      };

    case STOCK_USER_INFO:
      return {
        ...state,
        user: action.user,
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

export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

export const stockUserInfo = user => ({
  type: STOCK_USER_INFO,
  user,
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
