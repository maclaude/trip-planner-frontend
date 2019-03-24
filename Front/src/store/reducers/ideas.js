/**
 * Initial State
 */
const initialState = {
  type: '',
  title: '',
  description: '',
  link: '',
  price: '',
};

/**
 * Types
 */
const CHANGE_SUGGESTION_INPUTS = 'CHANGE_SUGGESTION_INPUTS';
const CHANGE_SUGGESTION_TYPE = 'CHANGE_SUGGESTION_TYPE';
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

    case SEND_SUGGESTION:
      return {
        ...state,
        title: '',
        description: '',
        link: '',
        price: '',
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
