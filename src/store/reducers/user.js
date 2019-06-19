/**
 * Initial State
 */
const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  avatar: '',
  projects: [],
};

/**
 * Types
 */
const STORE_USER_DATA = 'STORE_USER_INFO';
const STORE_USER_PROJECTS = 'STORE_USER_PROJECTS';
export const GET_USER_PROJECTS = 'GET_USER_PROJECTS';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        id: action.user.id,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        email: action.user.email,
        avatar: action.user.avatar,
      };

    case STORE_USER_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const storeUserData = user => ({
  type: STORE_USER_DATA,
  user,
});

export const storeUserProjects = projects => ({
  type: STORE_USER_PROJECTS,
  projects,
});

export const getUserProjects = () => ({
  type: GET_USER_PROJECTS,
});

/**
 * Export
 */
export default reducer;
