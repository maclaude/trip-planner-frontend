/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoginForm from 'src/components/Login/LoginForm';

// Action Creators
import {
  changeLoginInputs,
  showLoginErrors,
  connectUser,
} from 'src/store/reducers/login';

import { getProjects } from 'src/store/reducers/createProject';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password,
  errors: state.login.errors,
  loggedIn: state.login.loggedIn,
  isLoading: state.createProject.isLoading,
  loaded: state.createProject.loaded,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeLoginInputs(name, value));
  },
  showErrors: (errors) => {
    dispatch(showLoginErrors(errors));
  },
  connectUser: () => {
    dispatch(connectUser());
  },
  getProjects: () => {
    dispatch(getProjects());
  },
});

/**
 * Connect
 */
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

/**
 * Export
 */
export default LoginFormContainer;
