/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components
import Header from 'src/components/Header';
import SignupForm from 'src/containers/Signup/SignupForm';

// Style
import './signup.scss';

/**
 * Code
 */
const SignupView = () => (
  <div id="signup-view">
    <Header />
    <SignupForm />
  </div>
);

/**
 * Export
 */
export default SignupView;
