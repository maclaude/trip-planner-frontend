/**
 * Initial State
 */
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmedPassword: '',
  termsChecked: false,
  errors: [],
  loggedIn: false,
  token: '',
};

/**
 * Types
 */
// Signup
const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
const TOOGLE_TERMS_CHECKBOX = 'TOOGLE_TERMS_CHECKBOX';
const SHOW_SIGNUP_ERRORS = 'SHOW_SIGNUP_ERRORS';
export const ADD_NEW_USER = 'ADD_NEW_USER';
// Login
const CLEAR_PASSWORDS_INPUTS = 'CLEAR_PASSWORDS_INPUTS';
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
    /**
     * Signup
     */
    case CHANGE_SIGNUP_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
      };

    case TOOGLE_TERMS_CHECKBOX:
      return {
        ...state,
        termsChecked: !state.termsChecked,
      };

    case SHOW_SIGNUP_ERRORS:
      return {
        ...state,
        password: '',
        confirmedPassword: '',
        termsChecked: false,
        errors: action.errors,
      };

    case ADD_NEW_USER: {
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmedPassword: '',
        termsChecked: false,
        loggedIn: true,
      };
    }

    /**
     * Login
     */
    case CLEAR_PASSWORDS_INPUTS:
      return {
        ...state,
        password: '',
        confirmedPassword: '',
      };

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
// Signuo
export const changeSignupInputs = (name, value) => ({
  type: CHANGE_SIGNUP_INPUTS,
  name,
  value,
});

export const toogleTermsCheckbox = () => ({
  type: TOOGLE_TERMS_CHECKBOX,
});

export const addNewUser = () => ({
  type: ADD_NEW_USER,
});

export const showSignupErrors = errors => ({
  type: SHOW_SIGNUP_ERRORS,
  errors,
});

// Login
export const clearPasswordsInputs = () => ({
  type: CLEAR_PASSWORDS_INPUTS,
});

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

export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

export const stockUserInfo = user => ({
  type: STOCK_USER_INFO,
  user,
});


/**
 * Export
 */
export default reducer;
