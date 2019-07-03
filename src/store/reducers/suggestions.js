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

const APPROVED_SUGGESTION = 'APPROVED_SUGGESTION';
const DISAPPROVED_SUGGESTION = 'DISAPPROVED_SUGGESTION';

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
export const getFilteredSuggestions = (suggestions, typeId) => [
  ...suggestions.filter(
    suggestion => suggestion.suggestion_type._id === typeId,
  )];

// export const getMajorityApprovedSuggestions = (suggestions, typeId, projectId, participants) => {
//   const currentSuggestions = getFilteredSuggestions(suggestions, typeId, projectId);

//   return [
//     ...currentSuggestions.filter(
//       suggestion => (suggestion.vote >= (participants.length * 0.75)),
//     )];
// };

// export const getFullyApprovedSuggestions = (suggestions, typeId, projectId, participants) => {
//   const currentSuggestions = getFilteredSuggestions(suggestions, typeId, projectId);

//   return [
//     ...currentSuggestions.filter(
//       suggestion => (suggestion.vote >= (participants.length)),
//     )];
// };


/**
 * Export
 */
export default reducer;
