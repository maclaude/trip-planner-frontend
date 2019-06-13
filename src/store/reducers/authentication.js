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
  responseError: '',
  token: '',
  status: '',
};

/**
 * Types
 */
const CLEAR_PASSWORDS_INPUTS = 'CLEAR_PASSWORDS_INPUTS';
const STORE_RESPONSE_ERROR_MESSAGE = 'STORE_RESPONSE_ERROR_MESSAGE';

// Signup
const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
const TOOGLE_TERMS_CHECKBOX = 'TOOGLE_TERMS_CHECKBOX';
const SHOW_SIGNUP_ERRORS = 'SHOW_SIGNUP_ERRORS';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const SET_STATUS_CREATED = 'SET_STATUS_CREATED';
// Login
const CHANGE_LOGIN_INPUTS = 'CHANGE_LOGIN_INPUTS';
const SHOW_LOGIN_ERRORS = 'SHOW_LOGIN_ERRORS';
export const CONNECT_USER = 'CONNECT_USER';
export const STORE_TOKEN = 'STORE_TOKEN';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAR_PASSWORDS_INPUTS:
      return {
        ...state,
        password: '',
        confirmedPassword: '',
      };

    case STORE_RESPONSE_ERROR_MESSAGE:
      return {
        ...state,
        status: '',
        responseError: action.error,
      };

    /**
     * Signup
     */
    case CHANGE_SIGNUP_INPUTS:
      return {
        ...state,
        responseError: '',
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
      };
    }

    case SET_STATUS_CREATED: {
      return {
        ...state,
        status: 'created',
      };
    }

    /**
     * Login
     */
    case CHANGE_LOGIN_INPUTS:
      return {
        ...state,
        responseError: '',
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
        status: 'loading',
      };

    case STORE_TOKEN:
      return {
        ...state,
        token: action.token,
        loggedIn: true,
        status: 'loaded',
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const clearPasswordsInputs = () => ({
  type: CLEAR_PASSWORDS_INPUTS,
});

export const storeResponseErrorMessage = error => ({
  type: STORE_RESPONSE_ERROR_MESSAGE,
  error,
});

// Signup
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

export const setStatusCreated = () => ({
  type: SET_STATUS_CREATED,
});

export const showSignupErrors = errors => ({
  type: SHOW_SIGNUP_ERRORS,
  errors,
});

// Login
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

export const storeToken = token => ({
  type: STORE_TOKEN,
  token,
});

/**
 * Export
 */
export default reducer;
