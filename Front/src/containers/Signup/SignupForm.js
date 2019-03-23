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
  changeInput,
  toogleTermsCheckbox,
  showErrors,
  addNewUser,
} from 'src/store/reducer';

/**
 * Code
 */
// === State (données) ===
const mapStateToProps = state => ({
  firstname: state.firstname,
  lastname: state.lastname,
  email: state.email,
  password: state.password,
  confirmedPassword: state.confirmedPassword,
  termsChecked: state.termsChecked,
  errors: state.errors,
});

// === Actions ===
const mapDispatchToProps = dispatch => ({
  changeInput: (name, value) => {
    dispatch(changeInput(name, value));
  },
  toogleTermsCheckbox: () => {
    dispatch(toogleTermsCheckbox());
  },
  showErrors: (errors) => {
    dispatch(showErrors(errors));
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
