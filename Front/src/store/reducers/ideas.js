import suggestionsData from 'src/data/suggestions';
/**
 * Initial State
 */
const initialState = {
  type: '',
  name: '',
  description: '',
  url: '',
  price: '',
  errors: [],
  suggestions: suggestionsData,
};

/**
 * Types
 */
const CHANGE_SUGGESTION_INPUTS = 'CHANGE_SUGGESTION_INPUTS';
const CHANGE_SUGGESTION_TYPE = 'CHANGE_SUGGESTION_TYPE';
const SHOW_SUGGESTION_ERRORS = 'SHOW_SUGGESTION_ERRORS';
const VOTE_ON_SUGGESTION = 'VOTE_ON_SUGGESTION';
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
        name: '',
        description: '',
        url: '',
        price: '',
        errors: [],
      };

    case VOTE_ON_SUGGESTION: {
      // @TODO: Voter pour ou contre une suggestion
      /*
        const newSuggestions = state.suggestions.map((suggestion) => {
          if (suggestion.id === action.id) {
            return {
              @TODO
            };
          }
          return suggestion;
        });

      */
      return {
        ...state,
        // suggestions: newSuggestions;
      };
    }

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

export const voteOnSuggestion = id => ({
  type: VOTE_ON_SUGGESTION,
  id,
});

/**
 * Selectors
 */
export const getFilteredSuggestions = (suggestions, typeId) => [
  ...suggestions.filter(suggestion => suggestion.suggestion_gender_id === typeId),
];

/**
 * Export
 */
export default reducer;
