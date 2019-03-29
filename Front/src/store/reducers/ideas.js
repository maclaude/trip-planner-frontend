/**
 * Import
 */
// NPM
import uuidv4 from 'uuid-v4';
// Local data
import suggestionsData from 'src/data/suggestions';

/**
 * Initial State
 */
const initialState = {
  type: 0,
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

    case SEND_SUGGESTION: {
      // Création de la nouvelle suggestion
      const newSuggestion = {
        id: uuidv4(),
        name: state.name,
        description: state.description,
        url: state.url,
        price: state.price,
        project_id: action.projectId,
        author: 'Marc-Antoine',
        suggestion_gender_id: state.type,
      };

      // Création du nouveau tableau de suggestions
      const newSuggestions = [...state.suggestions, newSuggestion];

      return {
        ...state,
        name: '',
        description: '',
        url: '',
        price: '',
        errors: [],
        suggestions: newSuggestions,
      };
    }

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

export const sendSuggestion = projectId => ({
  type: SEND_SUGGESTION,
  projectId,
});

export const voteOnSuggestion = id => ({
  type: VOTE_ON_SUGGESTION,
  id,
});

/**
 * Selectors
 */
export const getFilteredSuggestions = (suggestions, typeId, projectId) => {
  const projectSuggestions = [
    ...suggestions.filter(suggestion => suggestion.project_id === projectId),
  ];

  return [
    ...projectSuggestions.filter(suggestion => suggestion.suggestion_gender_id === typeId),
  ];
};

/**
 * Export
 */
export default reducer;
