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
  clearPasswordsInputs,
  changeLoginInputs,
  showLoginErrors,
  connectUser,
} from 'src/store/reducers/authentication';

import { getProjects } from 'src/store/reducers/project';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  email: state.authentication.email,
  password: state.authentication.password,
  errors: state.authentication.errors,
  status: state.authentication.status,
  responseError: state.authentication.responseError,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  clearPasswordsInputs: () => {
    dispatch(clearPasswordsInputs());
  },
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
