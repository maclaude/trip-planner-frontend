/**
 * Import
 */
// NPM
import uuidv4 from 'uuid-v4';
// Local data
import suggestionsData from 'src/data/suggestionsAPI';

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
  suggestionsAPI: [],
};

/**
 * Types
 */
export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
const STOCK_SUGGESTIONS = 'STOCK_SUGGESTIONS';
const CHANGE_SUGGESTION_INPUTS = 'CHANGE_SUGGESTION_INPUTS';
const CHANGE_SUGGESTION_TYPE = 'CHANGE_SUGGESTION_TYPE';
const SHOW_SUGGESTION_ERRORS = 'SHOW_SUGGESTION_ERRORS';
const APPROVED_SUGGESTION = 'APPROVED_SUGGESTION';
const DISAPPROVED_SUGGESTION = 'DISAPPROVED_SUGGESTION';
export const SEND_SUGGESTION = 'SEND_SUGGESTION';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_SUGGESTIONS:
      return {
        ...state,
        suggestionsAPI: action.suggestions,
      };

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
        vote: 0,
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

    case APPROVED_SUGGESTION: {
      // Voter pour ou contre une suggestion
      const newSuggestions = state.suggestions.map((suggestion) => {
        if (suggestion.id === action.id) {
          const newVote = parseInt(suggestion.vote += 1, 10);

          return {
            ...suggestion,
            vote: newVote,
          };
        }
        return suggestion;
      });

      return {
        ...state,
        suggestions: newSuggestions,
      };
    }

    case DISAPPROVED_SUGGESTION: {
      // Voter pour ou contre une suggestion
      const newSuggestions = state.suggestions.map((suggestion) => {
        if (suggestion.id === action.id) {
          const newVote = parseInt(suggestion.vote -= 1, 10);

          return {
            ...suggestion,
            vote: newVote,
          };
        }
        return suggestion;
      });

      return {
        ...state,
        suggestions: newSuggestions,
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

export const getSuggestions = () => ({
  type: GET_SUGGESTIONS,
});

export const stockSuggestions = suggestions => ({
  type: STOCK_SUGGESTIONS,
  suggestions,
});

export const sendSuggestion = projectId => ({
  type: SEND_SUGGESTION,
  projectId,
});

export const approvedSuggestion = id => ({
  type: APPROVED_SUGGESTION,
  id,
});

export const disapprovedSuggestion = id => ({
  type: DISAPPROVED_SUGGESTION,
  id,
});

/**
 * Selectors
 */
export const getFilteredSuggestions = (suggestions, typeId, projectId) => {
  const projectSuggestions = [
    ...suggestions.filter(
      suggestion => suggestion.project.id === projectId,
    )];

  return [
    ...projectSuggestions.filter(
      suggestion => suggestion.suggestionGender.id === typeId,
    )];
};

export const getMajorityApprovedSuggestions = (suggestions, typeId, projectId, participants) => {
  const currentSuggestions = getFilteredSuggestions(suggestions, typeId, projectId);

  return [
    ...currentSuggestions.filter(
      suggestion => (suggestion.vote >= (participants.length * 0.75)),
    )];
};

export const getFullyApprovedSuggestions = (suggestions, typeId, projectId, participants) => {
  const currentSuggestions = getFilteredSuggestions(suggestions, typeId, projectId);

  return [
    ...currentSuggestions.filter(
      suggestion => (suggestion.vote >= (participants.length)),
    )];
};


/**
 * Export
 */
export default reducer;
