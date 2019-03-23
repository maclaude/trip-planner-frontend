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
const CHANGE_INPUT = 'CHANGE_INPUT';
const TOOGLE_TERMS_CHECKBOX = 'TOOGLE_TERMS_CHECKBOX';
const SHOW_ERRORS = 'SHOW_ERRORS';
export const ADD_NEW_USER = 'ADD_NEW_USER';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };

    case TOOGLE_TERMS_CHECKBOX:
      return {
        ...state,
        termsChecked: !state.termsChecked,
      };

    case SHOW_ERRORS:
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
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const toogleTermsCheckbox = () => ({
  type: TOOGLE_TERMS_CHECKBOX,
});

export const addNewUser = () => ({
  type: ADD_NEW_USER,
});

export const showErrors = errors => ({
  type: SHOW_ERRORS,
  errors,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
