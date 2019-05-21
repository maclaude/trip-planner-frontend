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
  changeSignupInputs,
  toogleTermsCheckbox,
  showSignupErrors,
  addNewUser,
} from 'src/store/reducers/signup';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  firstname: state.signup.firstname,
  lastname: state.signup.lastname,
  email: state.signup.email,
  password: state.signup.password,
  confirmedPassword: state.signup.confirmedPassword,
  termsChecked: state.signup.termsChecked,
  errors: state.signup.errors,
  loggedIn: state.signup.loggedIn,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
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
