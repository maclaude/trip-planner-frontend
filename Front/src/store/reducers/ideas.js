/**
 * Initial State
 */
const initialState = {
  type: '',
  title: '',
  description: '',
  link: '',
  price: '',
  errors: [],
};

/**
 * Types
 */
const CHANGE_SUGGESTION_INPUTS = 'CHANGE_SUGGESTION_INPUTS';
const CHANGE_SUGGESTION_TYPE = 'CHANGE_SUGGESTION_TYPE';
const SHOW_SUGGESTION_ERRORS = 'SHOW_SUGGESTION_ERRORS';
export const SEND_SUGGESTION = 'SEND_SUGGESTION';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SUGGESTION_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CHANGE_SUGGESTION_TYPE:
      return {
        ...state,
        type: action.value,
      };
    
    case SHOW_SUGGESTION_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case SEND_SUGGESTION:
      return {
        ...state,
        title: '',
        description: '',
        link: '',
        price: '',
        errors: [],
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeSuggestionInputs = (name, value) => ({
  type: CHANGE_SUGGESTION_INPUTS,
  name,
  value,
});

export const changeSuggestionType = value => ({
  type: CHANGE_SUGGESTION_TYPE,
  value,
});

export const showSuggestionErrors = errors => ({
  type: SHOW_SUGGESTION_ERRORS,
  errors,
});

export const sendSuggestion = () => ({
  type: SEND_SUGGESTION,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
