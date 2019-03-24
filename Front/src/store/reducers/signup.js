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
};

/**
 * Types
 */
const CHANGE_SIGNUP_INPUTS = 'CHANGE_SIGNUP_INPUTS';
const TOOGLE_TERMS_CHECKBOX = 'TOOGLE_TERMS_CHECKBOX';
const SHOW_SIGNUP_ERRORS = 'SHOW_SIGNUP_ERRORS';
export const ADD_NEW_USER = 'ADD_NEW_USER';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
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

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
