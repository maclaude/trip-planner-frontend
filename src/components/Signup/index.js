/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import AuthHeader from 'src/components/AuthHeader';
import SignupForm from 'src/containers/Signup/SignupForm';

// Style
import './signup.scss';

/**
 * Code
 */
const SignupView = () => (
  <div id="signup-view">
    <AuthHeader />
    <SignupForm />
  </div>
);

/**
 * Export
 */
export default SignupView;
