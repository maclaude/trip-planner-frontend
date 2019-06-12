/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SignupForm from 'src/components/Signup/SignupForm';

// Action Creators
import {
  clearPasswordsInputs,
  changeSignupInputs,
  toogleTermsCheckbox,
  showSignupErrors,
  addNewUser,
} from 'src/store/reducers/authentication';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  firstname: state.authentication.firstname,
  lastname: state.authentication.lastname,
  email: state.authentication.email,
  password: state.authentication.password,
  confirmedPassword: state.authentication.confirmedPassword,
  termsChecked: state.authentication.termsChecked,
  errors: state.authentication.errors,
  loggedIn: state.authentication.loggedIn,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  clearPasswordsInputs: () => {
    dispatch(clearPasswordsInputs());
  },
  changeInput: (name, value) => {
    dispatch(changeSignupInputs(name, value));
  },
  toogleTermsCheckbox: () => {
    dispatch(toogleTermsCheckbox());
  },
  showErrors: (errors) => {
    dispatch(showSignupErrors(errors));
  },
  addNewUser: () => {
    dispatch(addNewUser());
  },
});

/**
 * Connect
 */
const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);

/**
 * Export
 */
export default SignupFormContainer;
