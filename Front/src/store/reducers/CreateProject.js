/**
 * Initial State
 */
const initialState = {
  title: '',
  description: '',
  debutDates: '',
  endDates: '',
  destination: '',
  participants: '',
};

/**
 * Types
 */
const CHANGE_PROJECT_INPUTS = 'CHANGE_PROJECT_INPUTS';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROJECT_INPUTS:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeProjectInputs = (name, value) => ({
  type: CHANGE_PROJECT_INPUTS,
  name,
  value,
});

/**
 * Export
 */
export default reducer;
