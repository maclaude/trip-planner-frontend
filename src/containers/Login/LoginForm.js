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
  clearAuthState,
  clearStatus,
  changeLoginInputs,
  showLoginErrors,
  connectUser,
} from 'src/store/reducers/authentication';

/**
 * Code
 */
// === State (data) ===
const mapStateToProps = state => ({
  email: state.authentication.email,
  password: state.authentication.password,
  errors: state.authentication.errors,
  status: state.authentication.status,
  responseError: state.authentication.responseError,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  clearAuthState: () => {
    dispatch(clearAuthState());
  },
  clearStatus: () => {
    dispatch(clearStatus());
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
