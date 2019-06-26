/**
 * Local import
 */
// Utils
import { getSlug } from 'src/utils/url';

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
  invitationProjectId: '',
  invitations: [],
};

/**
 * Types
 */
const STORE_USER_DATA = 'STORE_USER_INFO';
const STORE_USER_PROJECTS = 'STORE_USER_PROJECTS';
export const GET_USER_PROJECTS = 'GET_USER_PROJECTS';

const STORE_INVITATION_PROJECTID = 'STORE_INVITATION_PROJECTID';
export const ADD_USER_INVITATION = 'ADD_USER_INVITATION';
export const GET_USER_INVITATIONS = 'GET_USER_INVITATIONS';
const STORE_USER_INVITATIONS = 'STORE_USER_INVITATIONS';
export const POST_USER_INVITATION_RESPONSE = 'POST_USER_INVITATION_RESPONSE';

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

    case STORE_INVITATION_PROJECTID: {
      return {
        ...state,
        invitationProjectId: action.projectId,
      };
    }

    case ADD_USER_INVITATION:
      return {
        ...state,
        invitationProjectId: '',
      };

    case STORE_USER_INVITATIONS:
      return {
        ...state,
        invitations: action.invitations,
      };

    case POST_USER_INVITATION_RESPONSE:
      return {
        ...state,
        invitations: [],
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

export const storeInvitationProjectId = projectId => ({
  type: STORE_INVITATION_PROJECTID,
  projectId,
});

export const addUserInvitation = () => ({
  type: ADD_USER_INVITATION,
});

export const getUserInvitations = () => ({
  type: GET_USER_INVITATIONS,
});

export const storeUserInvitations = invitations => ({
  type: STORE_USER_INVITATIONS,
  invitations,
});

export const postUserInvitationResponse = (response, projectId) => ({
  type: POST_USER_INVITATION_RESPONSE,
  response,
  projectId,
});

/**
 * Selector
 */
export const getCurrentProject = (projects, slug) => (
  projects.find(project => getSlug(project.title) === slug)
);

export const getCurrentProjectDates = (projects, projectId) => {
  const currentProject = projects.find(project => project._id === projectId);
  return currentProject.dates;
};

/**
 * Export
 */
export default reducer;
