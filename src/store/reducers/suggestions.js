/**
 * Initial State
 */
const initialState = {
  type: 0,
  title: '',
  description: '',
  url: '',
  price: '',
  errors: [],
  suggestions: [],
};

/**
 * Types
 */
const CHANGE_SUGGESTION_INPUTS = 'CHANGE_SUGGESTION_INPUTS';
const CHANGE_SUGGESTION_TYPE = 'CHANGE_SUGGESTION_TYPE';
const SHOW_SUGGESTION_FORM_ERRORS = 'SHOW_SUGGESTION_FORM_ERRORS';

export const ADD_PROJECT_SUGGESTION = 'ADD_PROJECT_SUGGESTION';
export const GET_PROJECT_SUGGESTIONS = 'GET_PROJECT_SUGGESTIONS';
const STOCK_PROJECT_SUGGESTIONS = 'STOCK_PROJECT_SUGGESTIONS';

export const VOTE_PROJECT_SUGGESTION = 'VOTE_PROJECT_SUGGESTION';

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

    case SHOW_SUGGESTION_FORM_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case ADD_PROJECT_SUGGESTION: {
      return {
        ...state,
        title: '',
        description: '',
        url: '',
        price: '',
        errors: [],
      };
    }

    case STOCK_PROJECT_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions,
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

export const showSuggestionFormErrors = errors => ({
  type: SHOW_SUGGESTION_FORM_ERRORS,
  errors,
});

export const addProjectSuggestion = projectId => ({
  type: ADD_PROJECT_SUGGESTION,
  projectId,
});

export const getProjectSuggestions = projectId => ({
  type: GET_PROJECT_SUGGESTIONS,
  projectId,
});

export const stockProjectSuggestions = suggestions => ({
  type: STOCK_PROJECT_SUGGESTIONS,
  suggestions,
});

export const voteProjectSuggestion = (projectId, suggestionId) => ({
  type: VOTE_PROJECT_SUGGESTION,
  projectId,
  suggestionId,
});

/**
 * Selectors
 */
export const getFilteredSuggestions = (suggestions, typeId) => {
  if (!suggestions) {
    return [];
  }

  return [
    ...suggestions.filter(
      suggestion => suggestion.suggestion_type._id === typeId,
    )];
};

export const getMajorityApprovedSuggestions = (suggestions, typeId, participants) => {
  const filteredSuggestions = getFilteredSuggestions(suggestions, typeId);

  return [
    ...filteredSuggestions.filter(
      suggestion => (suggestion.user_vote.length >= (participants.length * 0.75)),
    )];
};

export const getFullyApprovedSuggestions = (suggestions, typeId, participants) => {
  const filteredSuggestions = getFilteredSuggestions(suggestions, typeId);

  return [
    ...filteredSuggestions.filter(
      suggestion => (suggestion.user_vote.length >= (participants.length)),
    )];
};
/**
 * Export
 */
export default reducer;
